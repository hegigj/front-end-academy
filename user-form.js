// Country, state, city API communication
// https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
const countrySelect = document.getElementById('country');
const regionSelect = document.getElementById('region');
const citySelect = document.getElementById('city');

let selectedCountry, selectedRegion;

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

// Create user form
const createUserForm = document.getElementById('createUserForm');
createUserForm.addEventListener(
    'submit',
    (event) => {
        event.preventDefault();
        const userFormData = new FormData(createUserForm);
        const user = {
            firstName: userFormData.get('firstName'),
            lastName: userFormData.get('lastName'),
            email: userFormData.get('email'),
            gender: userFormData.get('gender'),
            country: userFormData.get('country'),
            region: userFormData.get('region'),
            city: userFormData.get('city')
        }
        createUserAPI(user);
    }
);

// Filter user form
const filterUserForm = document.getElementById('filterUserForm');
const userTable = document.querySelector('table>tbody');

async function getUsers(filters = undefined) {
    const users = await getUsersAPI(filters);
    fillTable(
        userTable,
        users.map(user => {
            const { firstName, lastName, email, gender, city } = user;
            return {
                firstName,
                lastName,
                email,
                gender,
                city
            };
        }),
        5
    );
}

getUsers();

filterUserForm.addEventListener(
    'submit',
    (event) => {
        event.preventDefault();
        const filterFormData = new FormData(filterUserForm);
        const filters = {};
        if (filterFormData.get('firstName')) {
            // https://github.com/typicode/json-server#operators
            filters['firstName_like'] = filterFormData.get('firstName');
        }
        if (filterFormData.get('lastName')) {
            // https://github.com/typicode/json-server#operators
            filters['lastName_like'] = filterFormData.get('lastName');
        }
        if (filterFormData.has('gender')) {
            filters['gender'] = filterFormData.get('gender');
        }
        console.log(filters, filterFormData.has('firstName'));
        getUsers(Object.keys(filters).length ? filters : undefined);
    }
);