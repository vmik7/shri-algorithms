describe('Обход дерева в ширину', function () {
    it('Граф на картинке выше. Правильный ответ: [1, 2, 3, 4, 5, 6, 7, 8, 9]', function () {
        const tree = {
            value: 1,
            children: [
                {
                    value: 2,
                    children: [{ value: 4 }, { value: 5 }, { value: 6 }],
                },
                {
                    value: 3,
                    children: [
                        { value: 7 },
                        {
                            value: 8,
                            children: [{ value: 9 }],
                        },
                    ],
                },
            ],
        };
        const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const ans = bfs(tree);

        assert.isArray(ans, 'ответ не является массивом');
        assert.deepEqual(ans, result, 'неправильный ответ');
    });
});
