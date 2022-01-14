import { Router } from 'express'
import { createCategory, createDeck, createCard, getCategories } from '../controllers/data';
const router = Router();

router.post('/createCategory', createCategory);
router.post('/createDeck', createDeck);
router.post('/createCard', createCard);
router.post('/getCategories', getCategories);
export default router;