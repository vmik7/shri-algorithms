describe('Инверсия односвязного списка', function () {
    it('1->2->3->4 => 4->3->2->1', function () {
        const input = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: {
                        value: 4,
                        next: null,
                    },
                },
            },
        };
        const result = {
            value: 4,
            next: {
                value: 3,
                next: {
                    value: 2,
                    next: {
                        value: 1,
                        next: null,
                    },
                },
            },
        };
        const answer = inverseList(input);
        console.log(answer);

        assert.deepEqual(answer, result, 'неправильный ответ');
    });
    it('1 => 1', function () {
        const input = {
            value: 1,
            next: null,
        };
        const result = {
            value: 1,
            next: null,
        };
        const answer = inverseList(input);
        console.log(answer);

        assert.deepEqual(answer, result, 'неправильный ответ');
    });
    it('пустой список => пустой список', function () {
        const input = {};
        const result = {};
        const answer = inverseList(input);
        console.log(answer);

        assert.deepEqual(answer, result, 'неправильный ответ');
    });
});
