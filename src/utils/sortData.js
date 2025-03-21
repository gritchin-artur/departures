/**
 * This function sort array of date
 *
 * @param {number} [arr = []] - some array
 * @returns {boolean} - returns already sorted array
 */

const sortData = (arr = []) => {
    const flights = [...arr]
        .sort((a, b) => {
            return new Date(b.departureDate) - new Date(a.departureDate);
        })
        .reverse();
    console.log(flights);
    return flights;
};

export default sortData;
