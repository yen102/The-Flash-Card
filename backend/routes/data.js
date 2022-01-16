import { Router } from 'express'
import { createCategory, createDeck, createCard, getDecks } from '../controllers/data';
const router = Router();

router.post('/createCategory', createCategory);
router.post('/createDeck', createDeck);
router.post('/createCard', createCard);
router.get('/getDecks', getDecks);
export default router;