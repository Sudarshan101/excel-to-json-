# node-xls-json-lc

[![Build Status](https://travis-ci.org/DataGarage/node-xls-json.svg?branch=master)](https://travis-ci.org/DataGarage/node-xls-json)

Credits to DataGarage

Converting xls file to json files using nodejs. This is a fork of DataGarage module with additional option of converting excel headers to lowerCase as json keys.

## Install

```
  npm install xls-to-json-lc
```

## Usage

``` javascript
  node_xj = require("xls-to-json-lc");
  node_xj({
    input: "sample.xls",  // input xls
    output: "output.json", // output json
    sheet: "sheetname",  // specific sheetname
    lowerCaseHeaders:true
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
```

In config object, you have to enter an input path. But If you don't want to output any file you can set to `null`.

## License

MIT [@chilijung](http://github.com/chilijung)

