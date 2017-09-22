var notes = require('../controllers/notes.js');
module.exports = function(app){

    app.get('/notes', (req, res, next) => {
        console.log("Got to the users 'get' route");
        notes.show(req, res);
    });

    app.post('/notes', (req, res, next) => {
        console.log("You have attempted to create a note");
        console.log(req.body);
        notes.create(req, res);
    });
}







    