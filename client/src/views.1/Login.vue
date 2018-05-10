<template>
  <div class="test">
    <p>hello world</p>
    <facebook-login class="button"
      appId="176166369753698"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login>
  </div>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';

// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }

// window.fbAsyncInit = function() {
//   FB.init({
//     appId: "176166369753698",
//     cookie: true,
//     xfbml: true,
//     version: "v3.0"
//   });

//   FB.AppEvents.logPageView();
// };

// (function(d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {
//     return;
//   }
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, "script", "facebook-jssdk");

export default {
  name: 'app',
  data() {
    return {
      idImage, loginImage, mailImage, faceImage,
      isConnected: false,
      name: '',
      email: '',
      personalID: '',
      FB: undefined
    }
  },
  components: { facebookLogin },
  methods: {
    getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
        }
      )
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      this.getUserData()
    },
    onLogout() {
      this.isConnected = false;
    }
  }
}
</script>

<style>

</style>
