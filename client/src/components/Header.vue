<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
    }
  }
}
</script>

<style scoped>

.home:hover {
  color: black;
}
</style>
