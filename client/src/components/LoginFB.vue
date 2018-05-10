<template>
<div class="status">

<div id="loginfbbtn" scope="public_profile,email" class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" autologoutlink="true" data-use-continue-as="false" onlogin="checkLoginState();"></div>

<div
    class="fb-login-button"
    data-max-rows="1"
    data-size="<medium, large>"
    data-button-type="continue_with"
    data-width="<100% or px>"
    data-scope="public_profile, email>"
></div>

<div id="status">
</div>

<div id="status">
</div>


</div>
  
</template>

<script>
function statusChangeCallback(response) {
  console.log(response);
  if (response.status === "connected") {
    // Logged into your app and Facebook.
    testAPI();
  } else {
    // The person is not logged into your app or we are unable to tell.
  }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

window.fbAsyncInit = function() {
  FB.init({
    appId: "176166369753698",
    cookie: true, 
    xfbml: true, 
    version: "v3.0"
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

// Load the SDK asynchronously
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  console.log("Welcome!  Fetching your information.... ");
  FB.api("/me", { fields: ["name", "email", "picture"] }, function(response) {
    console.log("response :", response);
    localStorage.setItem("name", response.name);
    localStorage.setItem("picture", response.picture.data.url);
    let obj = {
      idFB: response.id,
      name: response.name,
      email: response.email,
      role: 'students',
    }
    axios
      .post("http://localhost:3000/users/login", obj, {})
      .then(response => {
        localStorage.setItem("Token", response.data.token);
        window.location = "/";
      })
      .catch(err => {
        console.log(err);
      });
  });
}

function logOut() {
  FB.logout(function(response) {
    // user is now logged out
    console.log(response);
  });
}

// import facebookLogin from "facebook-login-vuejs";
// import idImage from "../assets/id.svg";
// import loginImage from "../assets/login.svg";
// import mailImage from "../assets/mail.svg";
// import faceImage from "../assets/face.svg";
// import LoginFB from "@/components/LoginFB.vue"
// import { mapState } from 'vuex';
export default {
  name: "app"
  // data() {
  //   return {
  //     isConnected: true,
  //   };
  // },
  // computed: {
  //   ...mapState([
  //     'status'
  //   ])
  // }
  // ,
  // components: { facebookLogin },
  // methods: {
  // getUserData() {
  // this.FB.api(
  //   "/me",
  //   "GET",
  //   { fields: "id,name,email" },
  //   userInformation => {
  //     this.idFB = this.email = userInformation.email;
  //     this.name = userInformation.name;
  //     this.personalID = userInformation.id;
  // axios
  //   .post(
  //     "http://localhost:3000/users/login",
  //     {
  //       idFB: this.personalID,
  //       name: this.name,
  //       email: this.email,
  //       password: this.password,
  //       role: this.role
  //     },
  //     {}
  //   )
  //   .then(response => {
  //     localStorage.setItem("Token", response.data.token);
  //     window.location = "/#/materi";
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  //       }
  //     );
  //   },
  //   sdkLoaded(payload) {
  //     this.isConnected = payload.isConnected;
  //     this.FB = payload.FB;
  //     if (this.isConnected) this.getUserData();
  //   },
  //   onLogin() {
  //     this.isConnected = true;
  //     this.$store.dispatch('setStatus')
  //     this.getUserData();
  //   },
  //   onLogout() {
  //     this.isConnected = false;
  //     this.$store.dispatch('offStatus')
  //     localStorage.clear()
  //     this.FB.logout(function(response) {
  //     // user is now logged out
  //     console.log(response)
  //   });
  //   },
  // }
};
</script>

<style>

</style>
