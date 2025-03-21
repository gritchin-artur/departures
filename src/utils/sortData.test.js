import sortData from './sortData.js';

describe('sort data', () => {
    test('some array of dates 2', () => {
        const arr = [
            { departureDate: '2025-09-02 11:55:00' },
            { departureDate: '2023-08-05 13:45:00' },
            { departureDate: '2024-04-04 03:01:00' }
        ];
        const expected = [
            { departureDate: '2023-08-05 13:45:00' },
            { departureDate: '2024-04-04 03:01:00' },
            { departureDate: '2025-09-02 11:55:00' }
        ];
        expect(sortData(arr)).toEqual(expected);
    });

    test('some array of dates 2', () => {
        const arr = [
            { departureDate: '2025-09-02 11:55:00' },
            { departureDate: '2024-04-04 03:01:00' },
            { departureDate: '2023-08-05 13:45:00' }
        ];
        const expected = [
            { departureDate: '2023-08-05 13:45:00' },
            { departureDate: '2024-04-04 03:01:00' },
            { departureDate: '2025-09-02 11:55:00' }
        ];
        expect(sortData(arr)).toEqual(expected);
    });

    test('empty array', () => {
        expect(sortData()).toEqual([]);
    });
});
