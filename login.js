const users = [
    {
        username: 'test1',
        password: 'test1'
    },
    {
        username: 'test2',
        password: 'test2'
    },
    {
        username: 'test',
        password: 'test'
    },
];

const formEl = document.querySelector('form');
formEl.addEventListener(
    'submit',
    (event) => {
        event.preventDefault();
        const form = new FormData(formEl);
        // form.append('isAdmin', 'true');
        // console.log(form.has('username'));
        // console.log(form.has('user'));
        // console.log(form.get('username'));
        // console.log(form.get('user'));
        // console.log(form.keys());
        // for (let key of form.keys()) console.log(key);
        const username = form.get('username');
        const password = form.get('password');
        if (
            users.some(
                (user) => {
                    const {password: pass, username: usr} = user;
                    return (
                        username === usr &&
                        password === pass
                    );
                }
            )
        ) {
            localStorage.setItem(LOCALSTORAGE_USERNAME, username.toString());
            const anchorTag = document.createElement('a');
            anchorTag.href = 'dice-game.html';
            anchorTag.click();
        } else {
            alert('Username or password incorrect');
        }
    }
);

const person = {
    name: 'Hegi',
    age: 26
};

const student = {
    name: 'Ledio',
    age: 28,
    course: 'FED'
};

const { name: personName } = person;
const { name: studentName } = student;