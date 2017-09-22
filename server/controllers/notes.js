var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    show: function(req, res){
        Note.find({}, function(err, notes){
            console.log(notes);
            return res.json(notes);
        })
    },

    create: function(req, res){
        console.log(req.body);
        Note.create(req.body, (err, note) => {
        if (err) {
            return res.json(err)
        }
        else {
            return res.json(note)
        }
    })
    }
}




