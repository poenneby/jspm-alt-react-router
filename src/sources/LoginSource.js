import LoginActions from '../actions/LoginActions';

const LoginSource = {
  login() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(true);
            } else {
              reject('Things have broken');
            }
          }, 250);
        });
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: LoginActions.loginSuccess,
      error: LoginActions.loginFailure,
      loading: LoginActions.login
    }
  }
};

export default LoginSource;
