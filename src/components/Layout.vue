<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="this.$store.state.drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action >
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="$router.push('/')"> 
            <v-list-item-title >Characters</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Random Character</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Random Quote</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Episode</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Random Death Information</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="green"
      dark
    >
      <v-app-bar-nav-icon @click.stop="toggle"/>
      <v-toolbar-title @click="$router.push('/')">Breaking Bad </v-toolbar-title>
    </v-app-bar>
    <v-content>
        <router-view></router-view>
    </v-content>
    <v-footer
      color="green"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: "Layout",
    props: {
      source: String,
    },
    computed: {
    },
    methods: {
      toggle() {
          this.$store.commit("setdrawer");
      },
    },
       data() {
      }
  }
</script>