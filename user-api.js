const api = 'http://localhost:3000/users';

async function createUser(user) {
    if (
        user &&
        user.firstName &&
        user.lastName &&
        user.email &&
        user.gender
    ) {
        const fetchObjectResponse = await fetch(api, {
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