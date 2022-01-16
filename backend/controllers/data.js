import db from '../models';
// import Sequelize from '../models'
const Category = db.categories;
const Deck = db.decks;
const Card = db.cards;
const User = db.users;
const Interval = db.intervals;

export const getRankData = async(req, res) => {
    try {
        // const data = Interval.findAll({
        //     attributes: [
        //         [sequelize.literal('(SELECT COUNT(Interval.interval) FROM Interval WHERE Interval.interval > 1)'), 'IntervalCount']
        //     ],
        //     group: 'userID',
        //     order: [
        //             [sequelize.literal('IntervalCount'), 'DESC']
        //         ]
        //         // });
        //         // const data = Interval.count({
        //         //     attributes: ['interval'],
        //         //     // where: {
        //         //     //     interval: { $gte: 1 }
        //         //     // },
        //         //     group: "userID",
        //         // })

        // });
        // const data = await Interval.findAll({
        //     // include: { model: User },
        //     // col: "interval",
        //     // where: {
        //     //     interval: { $gte: 1 }
        //     // },
        //     group: "userID",
        // })
        const data = await Interval.findAll({
            attributes: ['interval', [db.sequelize.fn('count', db.sequelize.col('interval')), 'cnt']],
            group: ['User.userID'],
            include: { model: User },
            where: {
                interval: { $gte: 1 }
            }
        })
        return res.status(200).json({ data });

    } catch (err) {
        return res.status(400).json({ success: false, message: err + ' ' });
    }
}
export const createCategory = async(req, res) => {
    try {
        // check duplicate category 
        const userID = res.locals.loggedInUser.userID;
        const name = req.body.name;
        const newCategory = { userID, name }
        const existed = await Category.findOne({ where: newCategory });
        if (existed) {
            return res.status(400).json({ success: false, message: 'Category existed!' });
        }
        const data = await Category.create(newCategory);
        return res.status(201).json({ success: true, categoryID: data.dataValues.categoryID });
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

export const getDecks = async(req, res) => {
    try {
        // const data = await Category.findAll({ where: { userID: req.body.userID } });
        const data = await Category.findAll({
            where: { userID: res.locals.loggedInUser.userID },
            attributes: ["name", "categoryID"],
            include: { model: Deck, attributes: { exclude: ["categoryID"] } }
        });
        return res.status(201).json({ success: true, listCategories: data });
    } catch (err) {
        return res.status(400).json({ success: false, message: err + ' ' });
    }
}