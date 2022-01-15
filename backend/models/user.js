const User = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        userID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.INTEGER,
            defaultValue: 0 // 0 is normal user, 1 is admin
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'User',
        indexes: [{
            name: 'user_index',
            using: 'BTREE',
            fields: ['userID']
        }]
    });
    return User;
}

export default User;