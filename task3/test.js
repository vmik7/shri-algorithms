describe('Баланс скобок', function () {
    it('[{a}{(a)}]{[a]} - правильная', function () {
        assert.isOk(isCorrect('[{a}{(a)}]{[a]}', brakets));
    });
    it('[]{}()()({}) - правильная', function () {
        assert.isOk(isCorrect('[]{}()()({})', brakets));
    });
    it('<пустая строка> - правильная', function () {
        assert.isOk(isCorrect('', brakets));
    });
    it('[(]) - неправильная', function () {
        assert.isNotOk(isCorrect('[(])', brakets));
    });
    it('[) - неправильная', function () {
        assert.isNotOk(isCorrect('[)', brakets));
    });
    it('[]( - неправильная', function () {
        assert.isNotOk(isCorrect('[](', brakets));
    });
    it('[]) - неправильная', function () {
        assert.isNotOk(isCorrect('[])', brakets));
    });
    it(')() - неправильная', function () {
        assert.isNotOk(isCorrect(')()', brakets));
    });
});
