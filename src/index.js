import data from './data.js';

const tableContainer = document.getElementById('tableContainer');

const now = new Date('2023-08-05 13:45:00',);
console.log(now.getDate());

function table () {
return `
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Plane</th>
            <th>Departure date</th>
            <th>Origin</th>
            <th>Arrival date</th>
            <th>Destination</th>
            <th>Stops</th>
        </tr>
        ${data.map((flight) => {
            return`
                   <tr>
            <td>${flight.id}</td>
            <td>${flight.name}</td>
            <td>${flight.plane}</td>
            <td>${flight.departureDate}</td>
            <td>${flight.origin}</td>
            <td>${flight.arrivalDate}</td>
            <td>${flight.destination}</td>
            <td>${flight.stops}</td>
        </tr>`;
        }).join('')}
    </table>`
};

tableContainer.innerHTML = table();



