"use strict";



//load schemas
var transactionSchema = require('./transaction.json');

var useritemSchema = require('./useritem.json');

//init schema validator
var Ajv = require('ajv');
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true} 


function Wrapper() {

}

Wrapper.prototype.type_transaction = 0;
Wrapper.prototype.type_useritem = 1;

Wrapper.prototype.validate = function(data, type) {
    var validate;
    switch (type) {
        case this.type_partyitem:
            validate = ajv.compile(transactionSchema);
            break;
        case this.type_useritem:
            validate = ajv.compile(useritemSchema);
            break;
        default:
            return false;
    }

    var valid = validate(data);
    if (!valid)
        console.log(validate.errors);
    return valid;
};


module.exports = function() {
    return new Wrapper();
};
