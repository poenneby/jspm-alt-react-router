import LoginActions from '../actions/LoginActions';

const requestLatency = 250;

const LoginSource = {

  verify() {
    return {
      remote(state) {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (false) {
              // resolve with some mock data
              resolve(true);
            } else {
              reject('Token invalid');
            }
          }, requestLatency);
        });
      },
      success: LoginActions.loginSuccess,
      error: LoginActions.loginFailure
    }
  },

  login() {
    return {
      remote(state) {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (state.username === 'Peter') {
              // resolve with some mock data
              resolve(true);
            } else {
              reject('Username and/or password incorrect');
            }
          }, requestLatency);
        });

      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: LoginActions.loginSuccess,
      error: LoginActions.loginFailure
    }
  }
};

export default LoginSource;
