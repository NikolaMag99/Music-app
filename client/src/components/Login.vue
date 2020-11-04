<template>

  <form>
    <p class="h4 text-center mb-4">Login</p>
    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormLoginEmailEx" class="form-control" v-model = "email"/>
    <br/>
    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
    <input type="password" id="defaultFormLoginPasswordEx" class="form-control" v-model = "password"/>
    <div class="text-center mt-4">
      <div class="error" v-html="error"/>
      <v-btn
        class ="cyan"
        @click = "login">
        Login
      </v-btn>
      <!-- <button class="btn btn-indigo" type="submit"  @click="login">Login</button> -->
     </div>
   </form>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.token)
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
