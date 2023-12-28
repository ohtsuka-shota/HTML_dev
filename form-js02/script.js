document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sign-up-form').addEventListener('submit', function (event) {
        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            alert('すべての必須フィールドに入力してください。');
            event.preventDefault(); 
        } else if (!/^[a-zA-Z]+$/.test(username) || !/^[a-zA-Z]+$/.test(password)) {
            alert('全ての項目は英字のみを含む必要があります。');
            event.preventDefault();
        }
    });
});

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}
