var xls_json = require('../')

xls_json({
  input: __dirname + '/Book1.xls',
  output: __dirname + '/test1.json',
  lowerCaseHeaders : true
}, function(err, result) {
  
  if(err) {
    console.error(err);
  } else {
    console.log(result);
  }
  
});
