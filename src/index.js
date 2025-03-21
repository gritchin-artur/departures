import data from './data.js';
import sortData from './utils/sortData.js';

const tableContainer = document.getElementById('tableContainer');
const newData = sortData(data.flights);

function createTable() {
    const tableHTML = `
        <table class="flight-table">
            <thead>
                <tr>
                    <th>Flight</th>
                    <th>Aircraft</th>
                    <th>Departure</th>
                    <th>Origin</th>
                    <th>Arrival</th>
                    <th>Destination</th>
                    <th>Stops</th>
                </tr>
            </thead>
            <tbody>
                ${newData
                    .map(
                        (flight) => `
                    <tr>
                        <td>${flight.id}</td>
                        <td>
                            <div class="plane-info">
<<<<<<< HEAD
                                <img src="./img/airplane.png" alt="plane-${flight.id}" class="plane-img">
=======
                                <img src="./../planning/screenshot.jpg" alt="plane-${flight.id}" class="plane-img">
>>>>>>> c0372443db4d14237458459ecfcdb0cc9d23cd8e
                                <span>${flight.plane}</span>
                            </div>
                        </td>
                        <td>${flight.departureDate}</td>
                        <td>${flight.origin}</td>
                        <td>${flight.arrivalDate}</td>
                        <td>${flight.destination}</td>
                        <td>${flight.stops}</td>
                    </tr>
                `
                    )
                    .join('')}
            </tbody>
        </table>
    `;
    tableContainer.innerHTML = tableHTML;
}

createTable();
