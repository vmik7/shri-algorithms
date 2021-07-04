describe('Простые числа до N', function () {
    it('N = 100. Результат в консоли', function () {
        const result = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97,
        ];

        const ans = getPrimes(100);
        console.log(ans);

        assert.isArray(ans, 'ответ не является массивом');
        assert.deepEqual(ans, result, 'неправильный ответ');
    });
});
