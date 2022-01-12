const Deck = (sequelize, Sequelize) => {
    const Deck = sequelize.define('deck', {
        deckID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        },
        words: {
            type: Sequelize.INTEGER
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'deck',
        indexes: [{
            name: 'deck_index',
            using: 'BTREE',
            fields: ['deckID']
        }]
    });
    return Deck;
}

export default Deck;