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
        }
        // , {
        //     freezeTableName: true,
        //     timestamps: false,
        //     tableName: 'Category',
        //     indexes: [{
        //         name: 'category_index',
        //         using: 'BTREE',
        //         fields: ['categoryID']
        //     }]
        // }, {
        //     classMethods: {
        //         associate: models => {
        //             Category.belongsTo(models.Category, {
        //                 onDelete: 'CASCADE',
        //                 foreignKey: 'userID',
        //                 targetKey: 'userID'
        //             });
        //         }
        //     }
        // }
    );
    Category.associate = models => {
        Category.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'userID'
        })
    }
    return Category;
}

// Category.associate = models => {
//     Category.belongsTo(models.User);
// };

export default Category;