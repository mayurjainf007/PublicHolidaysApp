document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnLoad");
    const countryInput = document.getElementById("country");
    const yearInput = document.getElementById("year");
    const tableBody = document.querySelector("#results tbody");

    btn.addEventListener("click", async function () {
        const country = countryInput.value.trim();
        const year = parseInt(yearInput.value.trim(), 10);

        if (!country || !year) {
            alert("Please enter both country code and year.");
            return;
        }

        try {
            const response = await fetch(`/Home/GetHolidaysJson?countryCode=${encodeURIComponent(country)}&year=${year}`);

            if (!response.ok) {
                alert("Error fetching holidays: " + response.statusText);
                return;
            }

            const data = await response.json();

            // Clear existing rows
            tableBody.innerHTML = "";

            data.forEach(item => {
                const row = document.createElement("tr");

                const dateCell = document.createElement("td");
                const nameCell = document.createElement("td");
                const localNameCell = document.createElement("td");
                const countryCodeCell = document.createElement("td");
                const globalCell = document.createElement("td");

                dateCell.textContent = item.date ? item.date.substring(0, 10) : "";
                nameCell.textContent = item.name;
                localNameCell.textContent = item.localName;
                countryCodeCell.textContent = item.countryCode;
                globalCell.textContent = item.global;

                row.appendChild(dateCell);
                row.appendChild(nameCell);
                row.appendChild(localNameCell);
                row.appendChild(countryCodeCell);
                row.appendChild(globalCell);

                tableBody.appendChild(row);
            });

        } catch (err) {
            console.error(err);
            alert("Unexpected error occurred while fetching holidays.");
        }
    });
});
