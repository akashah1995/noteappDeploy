var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
    content: {type: String, required: true, min:3}},
    {timestamps: true });

mongoose.model('Note', noteSchema);
var Note = mongoose.model('Note');

