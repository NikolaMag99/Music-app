<template>

  <form>
    <p class="h4 text-center mb-4">Sign up</p>
    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormLoginEmailEx" class="form-control" v-model = "email"/>
    <br/>
    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
    <input type="password" id="defaultFormLoginPasswordEx" class="form-control" v-model = "password"/>
    <div class="text-center mt-4">
      <button class="btn btn-indigo" type="submit" @click="register">Sign up</button>
    </div>
  </form>
<!--
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar dense>
        <v-toolbar-title class="tekst">Register</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-text-field
          label="Email"
          v-model = "email">
        </v-text-field>
        <br>
        <v-text-field

          label= "Password"
          v-model = "password">
        </v-text-field>
        <br>
        <div class="error" v-html="error"/>
          <v-btn
            class="cyan"
            @click = "register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
  -->
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'root',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.tekst {
  padding-left: 1150px;
  text-align: center;
}
.cyan {
  text-align: center;
 margin-top: 20px;
 margin-right: 85px;
}
.error {
  color: red;
}

</style>
