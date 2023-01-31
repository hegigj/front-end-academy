// https://github.com/typicode/json-server
const userApi = 'http://localhost:3000/users';

async function getUsersAPI(filters = undefined) {
    let getUserApi = userApi;

    if (filters && Object.keys(filters).length) {
        getUserApi += '?';
        getUserApi += Object.keys(filters).reduce(
            (queryParamsString, key, i, array) => {
                queryParamsString += `${key}=${filters[key]}`;
                if (i < (array.length - 1)) {
                    queryParamsString += '&';
                }
                return queryParamsString;
            },
            ''
        );
    }

    const fetchObjectResponse = await fetch(getUserApi, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    });

    return await fetchObjectResponse.json();
}

async function createUserAPI(user) {
    if (
        user &&
        user.firstName &&
        user.lastName &&
        user.email &&
        user.gender
    ) {
        const fetchObjectResponse = await fetch(userApi, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const { status, statusText } = fetchObjectResponse;
        if (status >= 400) {
            showToastOnError(statusText);
        } else {
            showToastOnSuccess(statusText);
        }
    }
}