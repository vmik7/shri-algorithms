describe('Сортировка выбором. Результаты выполнения в консоли', function () {
    it('[1, 5, 8, 2, 9, 2, 5, 3, 3, 6, 1]', function () {
        const input = [1, 5, 8, 2, 9, 2, 5, 3, 3, 6, 1];
        const result = [...input].sort();
        const answer = selectionSort(input);
        console.log(answer);

        assert.isArray(answer, 'ответ не является массивом');
        assert.deepEqual(answer, result, 'неправильный ответ');
    });
    it('[5, 5, 5, 5, 5]', function () {
        const input = [5, 5, 5, 5, 5];
        const result = [...input].sort();
        const answer = selectionSort(input);
        console.log(answer);

        assert.isArray(answer, 'ответ не является массивом');
        assert.deepEqual(answer, result, 'неправильный ответ');
    });
    it('[]', function () {
        const input = [];
        const result = [...input].sort();
        const answer = selectionSort(input);
        console.log(answer);

        assert.isArray(answer, 'ответ не является массивом');
        assert.deepEqual(answer, result, 'неправильный ответ');
    });
});
