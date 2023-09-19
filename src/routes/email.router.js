
import {Router} from 'express';
const router = Router();
import {sendMailEthereal} from '../controllers/email.controller.js';

router.post('/send', sendMailEthereal);

export default router;