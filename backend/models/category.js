const Category = (sequelize, Sequelize) => {
    const Category = sequelize.define('category', {
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
                model: 'user',
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
    return Category;
}

export default Category;