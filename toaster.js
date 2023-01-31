const DURATION = 3000;

function showToastOnSuccess(message, duration = DURATION) {
    const toastElement = document.querySelector('.toast');
    const toastBodyElement = document.querySelector('.toast-body');

    toastBodyElement.innerText = message;
    toastElement.classList.add('bg-success');
    toastElement.classList.add('show');

    setTimeout(
        () => toastElement.classList.remove('show'),
        duration
    );
}

function showToastOnError(message, duration = DURATION) {
    const toastElement = document.querySelector('.toast');
    const toastBodyElement = document.querySelector('.toast-body');

    toastBodyElement.innerText = message;
    toastElement.classList.add('bg-danger');
    toastElement.classList.add('show');

    setTimeout(
        () => toastElement.classList.remove('show'),
        duration
    );
}
