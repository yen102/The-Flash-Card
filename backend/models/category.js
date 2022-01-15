const Category = (sequelize, Sequelize) => {
    const Category = sequelize.define('Category', {
        categoryID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        userID: {
            type: Sequelize.INTEGER,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'Category',
        indexes: [{
            name: 'category_index',
            using: 'BTREE',
            fields: ['categoryID']
        }]
    });
    return Category;
}

export default Category;