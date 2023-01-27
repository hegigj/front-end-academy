const countrySelect = document.getElementById('country');
const regionSelect = document.getElementById('region');

let selectedCountry;

getAccessTokenAPI();

// async function add() {}
// const add = async () => {};

function fillOptions(selectElement, options) {
    selectElement.innerHTML = '';
    options.forEach((option) => {
        const optionEl = document.createElement('option');
        optionEl.value = option;
        optionEl.innerText = option;
        selectElement.appendChild(optionEl);
    });
}

countrySelect.addEventListener('focus', async () => {
    const accessToken = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN);
    if (accessToken) {
        const countries = await getCountriesAPI(accessToken);
        fillOptions(
            countrySelect,
            countries.map((country) => country.country_name)
        )
    } else {
        alert('Countries could not be fetched!');
    }
});

countrySelect.addEventListener('change', (event) => {
    selectedCountry = event.target.value;
    regionSelect.removeAttribute('disabled');
});

regionSelect.addEventListener('focus', async () => {
    const accessToken = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN);
    if (accessToken && selectedCountry) {
        const regions = await getStatesAPI(accessToken, selectedCountry);
        fillOptions(
            regionSelect,
            regions.map((region) => region.state_name)
        )
    } else {
        alert('Regions could not be fetched!');
    }
});

// Beni funksional dropdown(select) per qytetet
// Pasi te selektoni region ju duhet te beni enable cities dhe nu momentin kur
// fokusojm cities ekzekutohet kergesa get cities dhe me pas populloni options
// te dropdown-it