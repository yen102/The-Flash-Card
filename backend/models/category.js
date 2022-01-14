const Category = (sequelize, Sequelize) => {
    const Category = sequelize.define('Category', {
        categoryID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        },
        userID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'User',
                key: 'userID'
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'category',
        indexes: [{
            name: 'category_index',
            using: 'BTREE',
            fields: ['categoryID']
        }]
    });

    // Category.associate = models => {
    //     Category.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Category;
}

export default Category;