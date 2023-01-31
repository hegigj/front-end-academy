const countrySelect = document.getElementById('country');
const regionSelect = document.getElementById('region');
const citySelect = document.getElementById('city');

let selectedCountry, selectedRegion;

const userFormElement = document.querySelector('form');
userFormElement.addEventListener(
    'submit',
    (event) => {
        event.preventDefault();
        event.stopPropagation();
        const userFormData = new FormData(userFormElement);
        const user = {
            firstName: userFormData.get('firstName'),
            lastName: userFormData.get('lastName'),
            email: userFormData.get('email'),
            gender: userFormData.get('gender'),
            country: userFormData.get('country'),
            region: userFormData.get('region'),
            city: userFormData.get('city')
        }
        createUser(user);
    }
);

getAccessTokenAPI();

countrySelect.addEventListener('focus', async () => {
    const accessToken = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN);
    if (accessToken) {
        const countries = await getCountriesAPI(accessToken);
        fillOptions(
            countrySelect,
            countries.map((country) => country.country_name),
            'Select country'
        )
    } else {
        showToastOnError('Can\'t load countries!');
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
            regions.map((region) => region.state_name),
            'Select region'
        )
    } else {
        showToastOnError('Can\'t load regions!');
    }
});

regionSelect.addEventListener('change', (event) => {
    selectedRegion = event.target.value;
    citySelect.removeAttribute('disabled');
});

citySelect.addEventListener('focus', async () => {
    const accessToken = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN);
    if (accessToken && selectedRegion) {
        const cities = await getCitiesAPI(accessToken, selectedRegion);
        fillOptions(
            citySelect,
            cities.map(city => city.city_name),
            'Select city'
        );
    } else {
        showToastOnError('Can\'t load cities!');
    }
});