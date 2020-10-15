/**
 * API
 */

import * as debug from 'debug';
import * as express from 'express';
import * as moment from 'moment';
const log = debug('application: /api/util');
const router = express.Router();

/**
 * プロジェクト設定取得
 */
router.post('/project', async (req, res) => {
    log('project', req.body);
    if (process.env.PROJECT_ID !== undefined && process.env.PROJECT_ID !== '') {
        res.json({
            projectId: process.env.PROJECT_ID,
            projectName: process.env.PROJECT_NAME,
            storageUrl: process.env.PROJECT_STORAGE_URL,
            gmoTokenUrl: process.env.GMO_TOKEN_URL,
            env: process.env.NODE_ENV
        });
        return;
    }
    res.json({
        storageUrl: process.env.STORAGE_URL,
        gmoTokenUrl: process.env.GMO_TOKEN_URL,
        env: process.env.NODE_ENV
    });
});

/**
 * サーバータイム取得
 */
router.get('/serverTime', (_req, res) => {
    log('serverTime');
    res.json({ date: moment().toISOString() });
});

/**
 * バージョン取得
 */
router.get('/version', (_req, res) => {
    log('version');
    res.json({ version: process.env.VERSION });
});

export const utilRouter = router;
