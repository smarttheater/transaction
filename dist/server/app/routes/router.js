"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ルーティング
 */
const debug = require("debug");
const http_status_1 = require("http-status");
const path = require("path");
const auth2_model_1 = require("../models/auth2/auth2.model");
const authorize_1 = require("./api/authorize");
const liny_1 = require("./api/liny");
const util_1 = require("./api/util");
const log = debug('application: router');
exports.default = (app) => {
    app.use((req, res, next) => {
        if (/\.(css|js|svg|jpg|png|gif|ico|json|html|txt)/.test(req.path)) {
            res.status(404);
            res.end();
            return;
        }
        next();
    });
    app.use('/api/authorize', authorize_1.authorizeRouter);
    app.use('/api/liny', liny_1.linyRouter);
    app.use('/api', util_1.utilRouter);
    app.use((req, res, next) => {
        if (req.xhr || req.header('Sec-Fetch-Mode') === 'cors') {
            res.status(http_status_1.NOT_FOUND);
            res.send('NOT FOUND');
            return;
        }
        next();
    });
    app.get('/signIn', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        log('signInRedirect', req.query);
        if (req.query.code === undefined) {
            res.redirect('/default/html/signIn.html');
            return;
        }
        try {
            if (req.session === undefined) {
                throw new Error('session is undefined');
            }
            const authModel = new auth2_model_1.Auth2Model(req.session.auth);
            if (req.query.state !== undefined &&
                req.query.state !== authModel.state) {
                throw new Error(`state not matched ${req.query.state} !== ${authModel.state}`);
            }
            const auth = authModel.create(req);
            const credentials = yield auth.getToken(req.query.code, authModel.codeVerifier);
            // log('credentials published', credentials);
            authModel.credentials = credentials;
            authModel.save(req.session);
            auth.setCredentials(credentials);
            res.redirect('/#/auth/signin');
        }
        catch (error) {
            next(error);
        }
    }));
    app.get('/signOut', (req, res) => {
        log('signOutRedirect');
        delete req.session.auth;
        res.redirect('/#/auth/signout');
    });
    app.use((req, res, next) => {
        if (req.query.login === 'true') {
            const url = req.url.replace('login=true', '');
            const redirectUrl = encodeURIComponent(url);
            res.redirect(`${url}&redirectUrl=${redirectUrl}`);
            return;
        }
        next();
    });
    app.get(['/projects/:projectId/product/:productType'], (req, res) => {
        const productType = req.params.productType;
        res.redirect(`/?${path2Query(req)}#/product/${productType}`);
    });
    app.get([
        '/projects/:projectId/:projectName/inquiry',
        '/projects/:projectId/inquiry',
    ], (req, res) => {
        if (req.query.confirmationNumber === undefined) {
            res.redirect(`/?${path2Query(req)}#/inquiry/input`);
            return;
        }
        res.redirect(`/?${path2Query(req)}#/inquiry/input/${req.query.confirmationNumber}`);
    });
    app.get([
        '/projects/:projectId/order/money/transfer',
        '/projects/:projectId/order/money/:theaterCode/transfer',
    ], (req, res) => {
        const theaterCode = req.params.theaterCode;
        if (theaterCode) {
            res.redirect(`/?${path2Query(req)}#/order/money/transfer/${theaterCode}/input`);
            return;
        }
        res.redirect(`/?${path2Query(req)}#/order/money/transfer/input`);
    });
    app.get([
        '/projects/:projectId/purchase/transaction/:eventId/:passportToken',
        '/projects/:projectId/purchase/transaction/:eventId',
    ], (req, res) => {
        const eventId = req.params.eventId;
        const passportToken = req.params.passportToken;
        if (passportToken === undefined) {
            res.redirect(`/?${path2Query(req)}&eventId=${eventId}#/purchase/transaction`);
            return;
        }
        res.redirect(`/?${path2Query(req)}&eventId=${eventId}&passportToken=${passportToken}#/purchase/transaction`);
    });
    app.get(['/projects/:projectId/:projectName', '/projects/:projectId'], (req, res) => {
        res.redirect(`/?${path2Query(req)}`);
    });
    app.get('*', (req, res) => {
        if (req.session !== undefined) {
            if (req.query.performanceId !== undefined &&
                req.query.eventId === undefined) {
                req.query.eventId = req.query.performanceId;
            }
            req.session.external = req.query;
        }
        res.sendFile(path.resolve(`${__dirname}/../../../client/index.html`), {
            lastModified: false,
            etag: false,
        });
    });
};
/**
 * パスパラメータをクエリへ変換
 */
function path2Query(req) {
    let result = `projectId=${req.params.projectId}`;
    if (req.params.projectName !== undefined &&
        req.params.projectName === 'print') {
        result += `&projectName=${req.params.projectName}`;
    }
    const query = req.url.split('?')[1];
    if (query !== undefined) {
        result += `&${query}`;
    }
    return result;
}
