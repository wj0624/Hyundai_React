module.exports = {
    a: 10,
    fnA: (module.exports = function () {
        console.log('fnA()');
    }),
};
