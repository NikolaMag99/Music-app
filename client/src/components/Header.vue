<template>
  <div class="pozicija">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed>
      <b-navbar-brand href="#"  @click="navigateTo({name: 'songs'})">Songs</b-navbar-brand>
      <b-button text  @click="navigateTo({name: 'songs-create'})">Add Song</b-button>
      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
<!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
            <b-button text @click="navigateTo({name: 'songs-create'})">Search</b-button>
          </b-nav-form>

          <b-nav-item right>
            <!-- Using 'button-content' slot -->
            <router-link to="login">
              <b-button
                v-if = "!$store.state.isUserLoggedIn">
                Login
              </b-button>
            </router-link>
            <router-link to="register">
              <b-button
               v-if = "!$store.state.isUserLoggedIn">
                Sing up
              </b-button>
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
