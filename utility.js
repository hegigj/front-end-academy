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