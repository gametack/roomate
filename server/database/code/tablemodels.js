const TableModel = function() {

    const tablemodels = {
        transactiontable : "event_list",
        userinfotable : "user_info",

        transactiontablemodel : {
            'id': {
                type: 'INTEGER',
                primary: true,
                notnull: true,
                asc: true
            },
            'name': {
                type: 'TEXT',
                notnull: true,
                unique: false
            },
            'description': {
                type: 'TEXT',
                notnull: true,
                unique: false
            },
            'type': {
                type: 'INTEGER',
                notnull: true,
                unique: false
            },
            'active': {
                type: 'INTEGER',
                notnull: true,
                unique: false
            },
            'timestamp': {
                type: 'INTEGER',
                notnull: true,
                unique: false
            },
            'to_userid': {
                type: 'INTEGER',
                notnull: true,
                unique: false
            }
        },

       

        userinfotablemodel : {
            'id': {
                type: 'INTEGER',
                primary: true,
                notnull: true,
                asc: true
            },
            'name': {
                type: 'TEXT',
                notnull: true,
                unique: false
            }
        }
    };
    return tablemodels;
};

module.exports = TableModel;