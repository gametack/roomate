"use strict";
var db = require('../sqlite_wrapper/sqlite-wrapper.js')('database/main.db');
var tablemodel = require('../code/tablemodels.js')();

function Wrapper() {

}

Wrapper.prototype.createTables = function() {
    db.createTable(tablemodel.transactiontable, tablemodel.transactiontablemodel, function(err) {
        if (err) console.log("Error creating transactionlist table: " + err);
    });

    db.createTable(tablemodel.userinfotable, tablemodel.userinfotablemodel, function(err) {
        if (err) console.log("Error creating userinfotable table: " + err);
    });
};


Wrapper.prototype.addTransaction = function(transaction, cb) {
    db.insert(tablemodel.transactiontable, transaction, cb); //function(err) {
    //     if (err) console.log("Error adding transaction item: " + err);
    // });
};


Wrapper.prototype.addUser = function(useritem, cb) {
    db.insert(tablemodel.userinfotable, useritem, cb); // function(err) {
    // if (err) console.log("Error adding user item: " + err);
    // });
};

Wrapper.prototype.removeTransaction = function(transactionitemid, cb) {
    db.removeById(tablemodel.transactiontable, transactionitemid, cb); //function(err) {
    //    if (err) console.log("Error removing transaction item: " + err);
    // });
};

Wrapper.prototype.removeSongRequest = function(songitemid, cb) {
    db.removeById(tablemodel.songrequesttable, songitemid, cb); //function(err) {
    // if (err) console.log("Error removing transaction item: " + err);
    // });
};


Wrapper.prototype.updateTransaction = function(userid, transactionupdateitem, cb) {
    db.updateById(tablemodel.transactiontable, transactionupdateitem, cb);
};

Wrapper.prototype.updateUser = function(useritem, cb) {
    db.updateById(tablemodel.userinfotable, useritem, cb);
};

Wrapper.prototype.getTransaction = function(transactionid,columns, cb) {
    db.selectOne(tablemodel.transactiontable, null, columns, 'id=?', [transactionid], cb);
};

Wrapper.prototype.getTransactions = function(cb) {
    db.list(tablemodel.transactiontable, cb);
};

Wrapper.prototype.getUsers = function(cb) {
    db.list(tablemodel.userinfotable, cb);
};
Wrapper.prototype.getUsers = function(cb) {
    db.list(tablemodel.userinfotable, cb);
};
module.exports = function() {
    return new Wrapper();
};
