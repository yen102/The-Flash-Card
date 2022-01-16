const associations = (db) => {
    db.categories.belongsTo(db.users, {
        foreignKey: 'userID'
    });
    db.users.hasMany(db.categories, {
        foreignKey: 'userID'
    });
    db.categories.hasMany(db.decks, {
        foreignKey: 'categoryID'
    });
    db.decks.belongsTo(db.categories, {
        foreignKey: 'categoryID'
    });
    db.cards.belongsTo(db.decks, {
        foreignKey: 'deckID'
    });
    db.cards.belongsTo(db.intervals, {
        foreignKey: 'cardID'
    });
    db.intervals.hasOne(db.cards, {
        foreignKey: 'cardID'
    });
    db.users.hasMany(db.intervals, {
        foreignKey: 'userID'
    })
    db.intervals.belongsTo(db.users, {
        foreignKey: 'userID'
    })
}

export default associations;