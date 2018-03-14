var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var createBoard = function () {
    return {
        0: { 0: '', 1: '', 2: '' },
        1: { 0: '', 1: '', 2: '' },
        2: { 0: '', 1: '', 2: '' },
        putMark: function (x, y, field) {
            return __assign({}, this, (_a = {}, _a[x] = __assign({}, this[x], (_b = {}, _b[y] = field, _b)), _a));
            var _a, _b;
        }
    };
};
console.log(createBoard().putMark(1, 1, 'X'));
//# sourceMappingURL=tictactoe.js.map