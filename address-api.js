const cred = {
    userEmail: 'hgjoka16@gmail.com',
    userToken: '2n-__D3JK1ykprTvekJ5QWq3KIuTnnWyMISwqvAPx5z3E4FtzBfFUFlTDUpJTtQ4vzk'
};

const LOCALSTORAGE_ACCESS_TOKEN = 'user-form:access-token';

async function getAccessTokenAPI() {
    const api = 'https://www.universal-tutorial.com/api/getaccesstoken';
    const { userToken, userEmail } = cred;
    const fetchObjectResponse = await fetch(api, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'api-token': userToken,
            'user-email': userEmail
        }
    });
    const response = await fetchObjectResponse.json();
    const { auth_token } = response;
    localStorage.setItem(LOCALSTORAGE_ACCESS_TOKEN, auth_token);
    return auth_token;
}

async function getCountriesAPI(accessToken) {
    const api = 'https://www.universal-tutorial.com/api/countries';
    const fetchObjectResponse = await fetch(api, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    });
    return await fetchObjectResponse.json();
}

async function getStatesAPI(accessToken, country) {
    const api = 'https://www.universal-tutorial.com/api/states/' + country;
    const fetchObjectResponse = await fetch(api, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    });
    return await fetchObjectResponse.json();
}

async function getCitiesAPI(accessToken, state) {
    const api = 'https://www.universal-tutorial.com/api/cities/' + state;
    const fetchObjectResponse = await fetch(api, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    });
    return await fetchObjectResponse.json();
}