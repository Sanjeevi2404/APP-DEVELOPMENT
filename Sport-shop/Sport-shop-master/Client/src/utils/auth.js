class Auth {
  static isUserAuthenticated () {
    return window.localStorage.getItem('authToken') !== null
  }

  static getToken () {
    return window.localStorage.getItem('authToken')
  }

  static getUsername () {
    return window.localStorage.getItem('username')
  }

  static isUserAdmin () {
    let roles = window.localStorage.getItem('roles');
    if (!roles) {
      return false
    }

    roles = roles.split(',');
    return roles.includes('Admin')
  }
}

export default Auth
