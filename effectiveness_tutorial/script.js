let inputUsername = document.querySelector('#username')
let failMessage = document.querySelector('.fail-message')
let successMessage = document.querySelector('.success-message')

inputUsername.onkeyup = function () {
    console.log(inputUsername.value.length)
    if (inputUsername.value.length < 4) {
        failMessage.classList.remove('hide');
        successMessage.classList.add('hide');

    } else {
        failMessage.classList.add('hide');
        successMessage.classList.remove('hide');
    }
}
