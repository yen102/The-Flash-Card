const Card = (sequelize, Sequelize) => {
    const Card = sequelize.define('card', {
        cardID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        term: {
            type: Sequelize.STRING
        },
        definition: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        audio: {
            type: Sequelize.STRING
        },
        deckID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'deck',
                key: 'deckID'
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'card',
        indexes: [{
            name: 'card_index',
            using: 'BTREE',
            fields: ['cardID']
        }]
    });
    return Card;
}

export default Card;