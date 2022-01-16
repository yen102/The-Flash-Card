import db from '../models';


const Category = db.categories;
const Deck = db.decks;
const Card = db.cards;
const User = db.users;
const Interval = db.intervals;

export const startSession = async(req, res) => {
    console.log(req.body)
    try {
        const deckID = req.body.deckID
        const userID = res.locals.loggedInUser.userID
        const data = await Interval.findAll({ where: { deckID: deckID, userID: userID } });
        if (data.length <= 0) { // never learned cards in this deck before
            console.log("data length < 0")
            const cards = await Card.findAll({ where: { deckID: deckID } })
                // add cards info from this deck to interval table
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                const newInterval = { cardID: card.cardID, userID, deckID, interval: 1 }
                await Interval.create(newInterval);
            }
        }
        const preparedCards = await Interval.findAll({ where: { userID: userID }, attributes: ["cardID", "interval"], order: ['interval'], limit: 15, include: { model: Card } })

        // update new interval in database
        for (let i = 0; i < preparedCards.length; i++) {
            const card = preparedCards[i];
            await Interval.update({ interval: card.interval * 2 }, {
                where: {
                    cardID: card.cardID
                }
            })
        }
        return res.status(201).json({ success: true, cards: preparedCards });
    } catch (err) {
        return res.status(400).json({ success: false, message: err + ' ' });
    }
}