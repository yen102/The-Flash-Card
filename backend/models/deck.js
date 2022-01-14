const Deck = (sequelize, Sequelize) => {
    const Deck = sequelize.define('deck', {
        deckID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoryID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'category',
                key: 'categoryID'
            }
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