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
        tableName: 'user',
        indexes: [{
            name: 'user_index',
            using: 'BTREE',
            fields: ['userID']
        }]
    });

    // User.associate = models => {
    //     User.hasMany(models.Category, {
    //         onDelete: "cascade"
    //     })
    // }
    return User;
}

export default User;