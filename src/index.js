
import data from "./data.js";
import sortData from "./utils/sortData.js";

const tableContainer = document.getElementById("tableContainer");
const toggle = document.getElementById('toggle');
const valueDisplay = document.getElementById('value');
const newData = sortData(data.flights);

document.addEventListener('DOMContentLoaded', function() {
    createTable(newData);

    toggle.addEventListener('change', function() {
        const switcher = this.checked;

        if (switcher) {
            createTable([...newData].reverse());
            valueDisplay.textContent = 'Switch to early flights';
        } else {
            createTable(newData);
            valueDisplay.textContent = 'Switch to latest flights';
        }
    });
});

function createTable(departures) {
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
                ${departures
                  .map(
                    (flight) => `
                    <tr>
                        <td>${flight.id}</td>
                        <td>${flight.plane}</td>
                        <td>${flight.departureDate}</td>
                        <td>${flight.origin}</td>
                        <td>${flight.arrivalDate}</td>
                        <td>${flight.destination}</td>
                        <td>${flight.stops}</td>
                    </tr>
                `
                  )
                  .join("")}
            </tbody>
        </table>
    `;
    tableContainer.innerHTML = tableHTML;
}