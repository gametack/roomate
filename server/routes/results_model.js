const Results = function() {
    const SUCCESS = 0;
    const ERROR = 1;
    const WARNING = 2;

    //ERRORS
    const AUTHERR = 0;
    const DBCERR = 1;


    const results = {
        getErrorObject: (errtype, errmsg) => {
            var rst = {};
            rst.result = ERROR;
            rst.message = errmsg;
            return rst;
        },

        getSuccessObject: (data) => {
            var rst = {};
            rst.result = SUCCESS;
            if (data)
                rst.data = data;
            return rst;
        }

    };
    return results;
};

module.exports = Results;
