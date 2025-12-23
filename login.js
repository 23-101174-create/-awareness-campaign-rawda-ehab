function checkLogin() {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    if (emailValue === 'rawda' && passwordValue === '123') {
        window.location.href = 'index.html';
    } else {
        emailInput.classList.add('error');
        passwordInput.classList.add('error');
    }
}

function togglePassword() {
    let passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

document.getElementById("forgot").innerHTML = "Forgot Password?";
document.getElementById("new").innerHTML = "New to SafeSpace?";