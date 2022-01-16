import { Router } from 'express'
import { createCategory, createDeck, createCard, getDecks, getRankData, createCards } from '../controllers/data';
const router = Router();

router.post('/createCategory', createCategory);
router.post('/createDeck', createDeck);
router.post('/createCard', createCard);
router.get('/getDecks', getDecks);
router.get('/getRankData', getRankData);
router.post('/createCards', createCards);
export default router;