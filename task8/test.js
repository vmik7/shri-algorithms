describe('Левый бинарный поиск', function () {
    it('[1, 2, 3, 3, 3, 4, 5, 7], ищем 3, индекс 2', function () {
        const input = [1, 2, 3, 3, 3, 4, 5, 7];
        const answer = leftBinarySearch(input, 3);
        assert.strictEqual(answer, 2, 'неправильный ответ');
    });
    it('[1, 2, 3, 3, 3, 4, 5, 7], ищем 5, индекс 6', function () {
        const input = [1, 2, 3, 3, 3, 4, 5, 7];
        const answer = leftBinarySearch(input, 5);
        assert.strictEqual(answer, 6, 'неправильный ответ');
    });
    it('[1, 2, 3, 3, 3, 4, 5, 7], ищем 7, индекс 7', function () {
        const input = [1, 2, 3, 3, 3, 4, 5, 7];
        const answer = leftBinarySearch(input, 7);
        assert.strictEqual(answer, 7, 'неправильный ответ');
    });
    it('[1, 2, 3, 3, 3, 4, 5, 7], ищем 1, индекс 0', function () {
        const input = [1, 2, 3, 3, 3, 4, 5, 7];
        const answer = leftBinarySearch(input, 1);
        assert.strictEqual(answer, 0, 'неправильный ответ');
    });
    it('[1, 2, 3, 3, 3, 4, 5, 7], ищем 6, в массиве такого нет', function () {
        const input = [1, 2, 3, 3, 3, 4, 5, 7];
        const answer = leftBinarySearch(input, 6);
        assert.strictEqual(answer, -1, 'неправильный ответ');
    });
    it('[], ищем 1, в массиве такого нет', function () {
        const input = [];
        const answer = leftBinarySearch(input, 1);
        assert.strictEqual(answer, -1, 'неправильный ответ');
    });
});
