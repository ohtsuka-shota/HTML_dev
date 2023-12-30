document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('sign-up-form') as HTMLFormElement;
    signUpForm.addEventListener('submit', function (event) {
      const usernameInput = document.getElementById('username') as HTMLInputElement;
      const passwordInput = document.getElementById('password') as HTMLInputElement;
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
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
    const passwordInput = document.getElementById('password') as HTMLInputElement;
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }