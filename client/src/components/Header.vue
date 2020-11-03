<template>
  <div class="pozicija">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed>
      <b-navbar-brand href="#"  @click="navigateTo({name: 'root'})">Songs</b-navbar-brand>
      <v-btn text  @click="navigateTo({name: 'songs'})">Browse</v-btn>
      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            <v-btn text @click="navigateTo({name: 'songs'})">Browse</v-btn>
          </b-nav-form>

          <b-nav-item right>
            <!-- Using 'button-content' slot -->
            <router-link to="login">
              <v-btn
                v-if = "!$store.state.isUserLoggedIn">
                Login
              </v-btn>
            </router-link>
            <router-link to="register">
              <v-btn
               v-if = "!$store.state.isUserLoggedIn">
                Sing up
              </v-btn>
            </router-link>

              <v-btn
                @click="logout" v-if = "$store.state.isUserLoggedIn">
                Log Out
              </v-btn>

          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br><br>
  </div>
<!--<v-toolbar fixed class="blue" dark>-->
<!--  <v-toolbar-title class="mr-4">-->
<!--    <span-->
<!--      class="home"-->
<!--      @click="navigateTo({name: 'root'})">-->
<!--    Songs-->
<!--  </span>-->
<!--  </v-toolbar-title>-->

<!--  <v-spacer></v-spacer>-->
<!--  <v-toolbar-items>-->
<!--      <v-btn-->
<!--        @click="navigateTo({name: 'root'})">-->
<!--        Login-->
<!--      </v-btn>-->
<!--  </v-toolbar-items>-->

<!--  <v-toolbar-items>-->
<!--    <router-link to="register">-->
<!--      <v-btn>-->
<!--         Sign Up-->
<!--      </v-btn>-->
<!--    </router-link>-->
<!--  </v-toolbar-items>-->
<!--</v-toolbar>-->
</template>

<script>
export default {
  name: 'Header',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.pozicija {
 margin-top: -68px;
}
.home:hover {
  color: black;
}
</style>
