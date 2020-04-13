/**
 * ルーティング
 */
import * as debug from 'debug';
import * as express from 'express';
import { NOT_FOUND } from 'http-status';
import * as path from 'path';
import { Auth2Model } from '../models/auth2/auth2.model';
import { authorizeRouter } from './api/authorize';
import { linyRouter } from './api/liny';
import { utilRouter } from './api/util';
const log = debug('application: router');

export default (app: express.Application) => {
    app.use((_req, res, next) => {
        res.locals.NODE_ENV = process.env.NODE_ENV;
        next();
    });
    app.use((req, res, next) => {
        if ((/\.(css|js|svg|jpg|png|gif|ico|json|html|txt)/).test(req.path)) {
            res.status(404);
            res.end();
            return;
        }
        next();
    });

    app.use('/api/authorize', authorizeRouter);
    app.use('/api/liny', linyRouter);
    app.use('/api', utilRouter);

    app.get('/signIn', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        log('signInRedirect');
        try {
            if (req.session === undefined) {
                throw new Error('session is undefined');
            }
            const authModel = new Auth2Model(req.session.auth);
            if (req.query.state !== authModel.state) {
                throw (new Error(`state not matched ${req.query.state} !== ${authModel.state}`));
            }
            const auth = authModel.create(req);
            const credentials = await auth.getToken(
                req.query.code,
                <string>authModel.codeVerifier
            );
            // log('credentials published', credentials);
            authModel.credentials = credentials;
            authModel.save(req.session);
            auth.setCredentials(credentials);
            res.redirect('/#/auth/signin');
        } catch (error) {
            next(error);
        }
    });

    app.get('/signOut', (req: express.Request, res: express.Response) => {
        log('signOutRedirect');
        delete (<Express.Session>req.session).auth;
        res.redirect('/#/auth/signout');
    });

    app.get(['/:projectId/:projectName/inquiry', '/:projectId/inquiry'], (req, res, next) => {
        if (req.xhr || req.header('Sec-Fetch-Mode') === 'cors') {
            next();
            return;
        }
        res.redirect(`/?${getQueryParameter(req)}#/inquiry/input`);
    });

    app.get([
        '/:projectId/:projectName/purchase/transaction/:eventId/:passportToken',
        '/:projectId/:projectName/purchase/transaction/:eventId',
        '/:projectId/purchase/transaction/:eventId/:passportToken',
        '/:projectId/purchase/transaction/:eventId'
    ], (req, res, next) => {
        if (req.xhr || req.header('Sec-Fetch-Mode') === 'cors') {
            next();
            return;
        }
        const eventId = req.params.eventId;
        const passportToken = req.params.passportToken;
        if (passportToken === undefined) {
            res.redirect(`/?${getQueryParameter(req)}#/purchase/transaction/${eventId}`);
            return;
        }
        res.redirect(`/?${getQueryParameter(req)}#/purchase/transaction/${eventId}/${passportToken}`);
    });

    app.get(['/:projectId/:projectName', '/:projectId'], (req, res, next) => {
        if (req.xhr || req.header('Sec-Fetch-Mode') === 'cors') {
            next();
            return;
        }
        res.redirect(`/?${getQueryParameter(req)}`);
    });

    app.get('*', (req, res, next) => {
        if (req.xhr || req.header('Sec-Fetch-Mode') === 'cors') {
            next();
            return;
        }
        if (req.session !== undefined) {
            if (req.query.performanceId !== undefined && req.query.eventId === undefined) {
                req.query.eventId = req.query.performanceId;
            }
            req.session.external = req.query;
        }
        const dir = (process.env.NODE_ENV === 'production') ? 'production' : 'development';
        res.sendFile(path.resolve(`${__dirname}/../../../client/${dir}/index.html`));
    });

    app.all('*', (req, res, _next) => {
        res.status(NOT_FOUND);
        if (req.xhr || req.header('Sec-Fetch-Mode') === 'cors') {
            res.json('NOT FOUND');
            return;
        }
    });
};

/**
 * クエリ取得
 */
function getQueryParameter(req: express.Request) {
    let result = `projectId=${req.params.projectId}`;
    if (req.params.projectName !== undefined) {
        result += `&projectName=${req.params.projectName}`;
    }
    const query = req.url.split('?')[1];
    if (query !== undefined) {
        result += `&${query}`;
    }
    return result;
}
