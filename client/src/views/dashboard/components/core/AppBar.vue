<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    mobile-breakpoint="960"
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <div class="mx-3" />

    <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/"
    >
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-btn
      v-if="!$store.state.isUserLoggedIn"
      class="ml-2"
      width="10"
      text
      large
      elevation="2"
      to="/login"
    >
      Login
    </v-btn>

    <v-btn
      v-if="!$store.state.isUserLoggedIn"
      class="ml-2"
      width="10"
      text
      large
      elevation="2"
      to="/register"
    >
      Register
    </v-btn>

    <v-btn
      v-if="$store.state.isUserLoggedIn"
      class="ml-2"
      width="10"
      text
      large
      elevation="2"
      @click="logout"
    >
      Log Out
    </v-btn>

    <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/"
    >
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/bank"
    >
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>

  // Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DashboardCoreAppBar',

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      ...mapState([
        'isUserLoggedIn',
        'drawer',
      ]),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'Dashboard',
        })
      },
    },
  }
</script>
