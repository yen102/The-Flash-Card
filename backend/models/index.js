import dbConfig from '../config/database';
import Sequelize from 'sequelize';
import Card from './card';
import User from './user';
import Deck from './deck';
import Category from './category';
import bcryptjs from 'bcryptjs';
import associations from './associations';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = User(sequelize, Sequelize);
db.categories = Category(sequelize, Sequelize);
db.cards = Card(sequelize, Sequelize);
db.decks = Deck(sequelize, Sequelize);

associations(db);

export const init = async() => {
    try {
        await sequelize.sync();
        const check = await db.users.findOne({
            where: {
                username: 'admin',
            }
        });
        if (check === null) {
            const salt = await bcryptjs.genSalt(10);
            const hashPassword = await bcryptjs.hash('admin', salt);
    
            await db.users.create({
                username: 'admin',
                password: hashPassword,
                role: 1
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export default db;