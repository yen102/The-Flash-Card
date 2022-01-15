const Deck = (sequelize, Sequelize) => {
    const Deck = sequelize.define('Deck', {
        deckID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoryID: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
        words: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'Deck',
        indexes: [{
            name: 'deck_index',
            using: 'BTREE',
            fields: ['deckID']
        }]
    });
    return Deck;
}

export default Deck;