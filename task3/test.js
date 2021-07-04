describe('Баланс скобок', function () {
    it('[{a}{(a)}]{[a]}', function () {
        assert.isOk(isCorrect('[{a}{(a)}]{[a]}', brakets));
    });
    it('[]{}()()({})', function () {
        assert.isOk(isCorrect('[]{}()()({})', brakets));
    });
    it('Пустая строка', function () {
        assert.isOk(isCorrect('', brakets));
    });
    it('[(])', function () {
        assert.isNotOk(isCorrect('[(])', brakets));
    });
    it('[)', function () {
        assert.isNotOk(isCorrect('[)', brakets));
    });
    it('[](', function () {
        assert.isNotOk(isCorrect('[](', brakets));
    });
    it('[])', function () {
        assert.isNotOk(isCorrect('[])', brakets));
    });
    it(')()', function () {
        assert.isNotOk(isCorrect(')()', brakets));
    });
});
