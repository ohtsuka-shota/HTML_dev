import React from 'react';
import './App.css';
import eyeIcon from './目のアイコン8.jpeg';
import addUserIcon from './contact_user_add_user_new_user_icon_250756.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const username = this.usernameInput.value.trim();
    const password = this.passwordInput.value.trim();

    if (username === '' || password === '') {
      alert('すべての必須フィールドに入力してください。');
    } else if (!/^[a-zA-Z]+$/.test(username) || !/^[a-zA-Z]+$/.test(password)) {
      alert('全ての項目は英字のみを含む必要があります。');
    }
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    return (
      <form action="" method="post" className="sign-up-group" id="sign-up-form" onSubmit={this.handleSubmit}>
        <div id="sign-up-icon">
          <img src={addUserIcon} alt="Add User Icon" />
        </div>
        <h1 id="sign-up-title">Please Sign-up</h1>
        <div className="sign-up-form">
          <input
            type="text"
            id="username"
            autoComplete="on"
            placeholder="ユーザー名"
            className="sign-up-content"
            ref={(input) => (this.usernameInput = input)}
          />
        </div>
        <div className="sign-up-form">
          <div className="password-container">
            <input
              type={this.state.showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="off"
              placeholder="パスワード"
              className="sign-up-content"
              ref={(input) => (this.passwordInput = input)}
            />
            <img
              id="show-password-icon"
              src={eyeIcon}
              alt="Show Password"
              onClick={this.togglePasswordVisibility}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div id="submit-form">
          <button id="sign-up-button" type="submit">
            サインアップ
          </button>
        </div>
      </form>
    );
  }
}

export default App;
