const Interval = (sequelize, Sequelize) => {
    const Interval = sequelize.define('Interval', {
        intervalID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cardID: {
            type: Sequelize.INTEGER,
        },
        userID: {
            type: Sequelize.INTEGER
        },
        deckID: {
            type: Sequelize.INTEGER
        },
        interval: {
            type: Sequelize.INTEGER
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'Interval',
        indexes: [{
            name: 'interval_index',
            using: 'BTREE',
            fields: ['intervalID']
        }]
    });
    return Interval;
};

export default Interval;