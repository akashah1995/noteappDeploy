var mongoose = require('mongoose');
var fs = require('fs');
// require path for getting the models path
var path = require('path');
// connect to mongoose!
mongoose.connect('mongodb://localhost/notesNew');

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});



