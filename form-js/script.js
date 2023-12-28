
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sign-up-form').addEventListener('submit', function (event) {
        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            alert('すべての必須フィールドに入力してください。');
            event.preventDefault(); 
        }
    });
});