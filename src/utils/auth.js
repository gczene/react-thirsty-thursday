class Auth {
  get username() {
    return window.localStorage.getItem('username');
  };

  login = (username) => {
    window.localStorage.setItem('username', username);
  }

  get isLoggedIn() {
    return !!this.username;
  }
}

export default new Auth;
