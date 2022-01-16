import { Router } from 'express'
import { startSession } from '../controllers/studySession';
const router = Router();

router.post('/startSession', startSession);

export default router;