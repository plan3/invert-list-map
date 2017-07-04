'use strict';

const entries = (obj) => {
    return Object.keys(obj)
            .map(k => [k, obj[k]]);
};

const failingReductor = (acc, [key, values]) => {
    values.forEach(v => {
        if (acc[v]) {
            throw new Error(`The value '${v}' exists under '${key}' and '${acc[v]}'.`);
        }
        acc[v] = key;
    });
    return acc;
};

const joiningReductor = (acc, [key, values]) => {
    values.forEach(v => {
        if (!acc[v]) {
            acc[v] = [key];
        } else {
            acc[v].push(key);
        }
    });
    return acc;
};

module.exports = function(aMap, failOnConflicts = true) {
    const e = entries(aMap);
    if (failOnConflicts) {
        return e.reduce(failingReductor, {});
    }
    return e.reduce(joiningReductor, {});
};
