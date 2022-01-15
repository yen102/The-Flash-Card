import db from '../models';

const Category = db.categories;
const Deck = db.decks;
const Card = db.cards;
const User = db.users;
export const createCategory = async(req, res) => {
    try {
        // check duplicate category 
        const existed = await Category.findOne({ where: req.body });
        if (existed) {
            return res.status(400).json({ success: false, message: 'Category existed!' });
        }
        const newCategory = req.body;
        await Category.create(newCategory);
        return res.status(201).json({ success: true });
    } catch (err) {
        return res.status(400).json({ success: false, message: err + ' ' });
    }
};

export const createDeck = async(req, res) => {
    try {
        const checkCategory = await Category.findOne({ where: { categoryID: req.body.categoryID } });
        if (!checkCategory) {
            return res.status(400).json({ success: false, message: 'Category doesn\'t exist !' });
        }
        const existed = await Deck.findOne({ where: req.body });
        if (existed) {
            return res.status(400).json({ success: false, message: 'Deck existed!' });
        }
        const newDeck = req.body;
        await Deck.create(newDeck);
        return res.status(201).json({ success: true });
    } catch (err) {
        return res.status(400).json({ success: false, message: err + ' ' });
    }
}

export const createCard = async(req, res) => {
    try {
        const checkDeck = await Deck.findOne({ where: { deckID: req.body.deckID } });
        if (!checkDeck) {
            return res.status(400).json({ success: false, message: 'Deck doesn\'t exist !' });
        }
        const existed = await Card.findOne({ where: { deckID: req.body.deckID, term: req.body.term } });
        if (existed) {
            return res.status(400).json({ success: false, message: 'Duplicate term!' });
        }
        const newCard = req.body;
        await Card.create(newCard);
        await Deck.update({ words: +1 }, { where: { deckID: req.body.deckID } })
        return res.status(201).json({ success: true });
    } catch (err) {
        return res.status(400).json({ success: false, message: err + ' ' });
    }
}

export const getCategories = async(req, res) => {
    try {
        // const data = await Category.findAll({ where: { userID: req.body.userID } });
        const data = await Category.findAll({ include: { model: User } });
        return res.status(201).json({ success: true, listCategories: data });
    } catch (err) {
        return res.status(400).json({ success: false, message: err + ' ' });
    }
}