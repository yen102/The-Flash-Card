import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { init } from './backend/models';
import jwt from 'jsonwebtoken';

const app = express();

init();

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    try {
        if (req.headers['x-access-token']) {
            const accessToken = req.headers['x-access-token'];
            const { user, exp } = jwt.verify(accessToken, 'secret');
            //Check if token has expired
            if (exp < Date.now().valueOf() / 1000) {
                return res.status(401).json({ message: "JWT token has expired, please login to obtain a new one" });
            }
            res.locals.loggedInUser = user;
            next();
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
});

// Import Routes
import userRoute from './backend/routes/user';
import dateRoute from './backend/routes/data';

app.use('/user', userRoute);
app.use('/data', dateRoute);
// app.use('/file', fileRoute);
// app.use('/admin', adminRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on ${PORT}`));