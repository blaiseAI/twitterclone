const express = require('express');
const cors = require('cors')
const monk = require('monk')


const app = express();

const db = monk('localhost/meower');
const mews = db.get('mews');

app.use(cors());
// Body parser
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        message: 'Meoweer!😹🐈'
    });
})

function isValidMew(mew) {
    return mew.name && mew.name.toString().trim !== "" &&
        mew.content && mew.content.toString().trim !== ""
}
app.post('/mews', (req, res) => {
    if (isValidMew(req.body)) {
        // insert into db..
        const mew = {
            name: req.body.name.toString(),
            content: req.body.name.toString(),
            created: new Date()
        };
        mews
            .insert(mew)
            .then(createdMeow => {
                res.json(createdMeow);
            });
    } else {
        res.status(422);
        res.json({
            message: 'Hey! Name and Content are required'
        })
    }
})

app.get('/mews', (req, res) => {
    // Query the db
    mews
        .find()
        .then(mews => {
            res.json(mews);
        })
})
const port = 5000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})