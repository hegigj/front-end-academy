function fillOptions(selectElement, options, emptySelectOption = undefined) {
    if (options instanceof Array && options.length) {
        selectElement.innerHTML = ''; // clear all select tag options

        if (emptySelectOption) {
            const optionEl = document.createElement('option'); // create option tag
            optionEl.innerText = emptySelectOption; // add text to option tag
            selectElement.appendChild(optionEl); // append option tag to select
        }

        options.forEach((option) => {
            const optionEl = document.createElement('option'); // create option tag
            optionEl.value = option; // add value attribute to option tag
            optionEl.innerText = option; // add text to option tag
            selectElement.appendChild(optionEl); // append option tag to select
        });
    }
}

function fillTable(tbodyElement, data, emptyRowColspan) {
    tbodyElement.innerHTML = '';

    if (data instanceof Array && data.length) {
        data.forEach(rowData => {
            const trEl = document.createElement('tr');
            Object.keys(rowData).forEach(key => {
                const tdEl = document.createElement('td');
                tdEl.innerText = rowData[key];
                trEl.appendChild(tdEl);
            });
            tbodyElement.appendChild(trEl);
        })
    } else {
        const trEl = document.createElement('tr');
        const tdEl = document.createElement('td');
        tdEl.innerText = 'No data';
        tdEl.colSpan = emptyRowColspan;
        tdEl.style.textAlign = 'center';
        trEl.appendChild(tdEl);
        tbodyElement.appendChild(trEl);
    }
}