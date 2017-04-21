'use strict';

module.exports = function(aMap) {
    return Object.keys(aMap)
        .reduce((acc, k) => {
            const values = aMap[k];
            values.forEach(v => {
                acc[v] = k;
            });
            return acc;
        }, {});
};

