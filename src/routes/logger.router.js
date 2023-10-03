import {Router} from 'express';
const router = Router();
import logger from '../middlewares/logger-mw.js';

router.get('/'), (req, res) => {
    logger.info('User Authenticated');
    res.send({message: 'User Profile '});
}

export default router