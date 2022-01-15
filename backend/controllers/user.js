import db from '../models';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const User = db.users;

export const signup = async(req, res) => {
    const { username, password } = req.body;

    try {
        // check if username exists 
        const usernameExists = await User.findOne({ where: { username: username } });
        if (usernameExists) {
            return res.status(400).json({ message: 'Username existed' });
        }

        // create user
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const newUser = {
            username,
            password: hashPassword,
        };

        // save 
        await User.create(newUser);
        newUser.password = undefined;
        return res.status(201).json({ success: true });
    } catch (err) {
        return res.status(400).json({ message: err + ' ' });
    }
};

export const login = async(req, res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username: username } });
        if (!user) {
            return res.status(400).json({ message: 'Wrong username or password!' });
        }
        const checkPassword = await bcryptjs.compare(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({ message: 'Wrong username or password!' });
        }
        user.password = undefined;
        const payload = {
            user: user.dataValues,
            userID: user.dataValues.userID,
            created: new Date(),
        };
        const token = jwt.sign(payload, 'secret', { expiresIn: '24h' });
        return res.json({ token, userID: payload.userID, role: user.dataValues.role });
    } catch (err) {
        return res.status(400).json({ message: err + ' ' });
    }
};