import db from '../models';
import { Op } from 'sequelize/dist';
const Category = db.categories;
const Deck = db.decks;
const Card = db.cards;
const User = db.users;
const Interval = db.intervals;

export const getRankData = async(req, res) => {
    try {
        const data = await Interval.findAll({
            attributes: [
                [db.sequelize.fn('count', db.sequelize.col('interval')), 'cnt']
            ],
            where: {
                interval: {
                    [Op.gte]: 0
                }
            },
            group: ['Interval.userID'],
            include: { model: User, attributes: ['username'] },
            order: [
                [db.sequelize.col('cnt'), 'desc']
            ]
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
export const createCards = async(req, res) => {
    try {
        const cards = [{
                "deckID": 8,
                "term": "chicken",
                "definition": "gà",
                "image": "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQqMWVw2EdSJDgzjHRE0_-lYkL7PRcXBQQ7I_S0ndTkOZBeRd37lSPXdzaxkv0xKfvqtlVsorptYlUXyXm4SXQ",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/chicken--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "pig",
                "definition": "lợn",
                "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/152F0/production/_120986768_pigs.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/pig--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "elephant",
                "definition": "voi",
                "image": "https://vcdn-vnexpress.vnecdn.net/2017/03/28/elephant-6332-1490697448.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/elephant--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "bird",
                "definition": "chim",
                "image": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/bird--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "egg",
                "definition": "trứng",
                "image": "https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-superJumbo-v2.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/egg--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "beef",
                "definition": "thịt bò",
                "image": "https://hips.hearstapps.com/hmg-prod/images/delish-roast-beef-horizontal-1540505165.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/beef--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "pork",
                "definition": "thịt lợn",
                "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Schweinebauch-2.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/pork--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "milk",
                "definition": "sữa",
                "image": "https://www.arla.com/48f187/contentassets/b7b39c42ad1646a7a7296b88696660d6/milk.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/milk--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "banana",
                "definition": "chuối",
                "image": "https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&crop=0px%2C74px%2C1024px%2C536px&resize=1200%2C628&strip",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/banana--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "advocado",
                "definition": "bơ",
                "image": "https://t4.ftcdn.net/jpg/00/40/29/93/360_F_40299383_U9KUQrii4tclIJjHcM2nMRmguVhw9qCT.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/advocado--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "mango",
                "definition": "xoài",
                "image": "http://vietnamfruits.com.vn/upload/files/mango.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/mango--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "apple",
                "definition": "táo",
                "image": "https://i.pinimg.com/originals/d3/1e/01/d31e0135469b9db2a37fe773a2a54f5c.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "tomato",
                "definition": "cà chua",
                "image": "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/tomato--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "potato",
                "definition": "khoai tây",
                "image": "https://www.macmillandictionary.com/external/slideshow/full/141151_full.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/potato--_gb_1.mp3"
            },
            {
                "deckID": 8,
                "term": "candy",
                "definition": "kẹo",
                "image": "https://blog.galvanize.com/wp-content/uploads/2020/10/Candy-Crush-copy.jpg",
                "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/candy--_gb_1.mp3"
            },
        ]
        for (let i = 0; i < cards.length; i++) {
            await Card.create(cards[i])
        }
        return res.status(201).json({ success: true });
    } catch (err) {
        return res.status(400).json({ success: false, message: err + ' ' });
    }
}

export const getDecks = async(req, res) => {
    try {
        // const data = await Category.findAll({ where: { userID: req.body.userID } });
        const data = await Category.findAll({
            where: {
                [Op.or]: [
                    { userID: res.locals.loggedInUser.userID },
                    { userID: 1 }
                ]
            },
            attributes: ["name", "categoryID"],
            include: { model: Deck, attributes: { exclude: ["categoryID"] } }
        });
        return res.status(201).json({ success: true, listCategories: data });
    } catch (err) {
        return res.status(400).json({ success: false, message: err + ' ' });
    }
}