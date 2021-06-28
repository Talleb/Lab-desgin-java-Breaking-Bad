<template>
 <div class="profile">
  <v-card 
  v-for="person in characters"
  :key="person"
  class="d-inline-block mx-auto">
    <v-container align="center">
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            height="600"
            width="300"
           :src="person.img"
          ></v-img>
        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <ProfileText v-bind:person="{
            name: person.name,
            nickname: person.nickname,
            occupation: person.occupation,
            status: person.status
          }" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
   </div>
 </template>



<script>

import ProfileText from '../components/ProfileText.vue'

export default {
  name: 'Profile',
  components: {
    ProfileText
  },
    created() {
    fetch(`https://www.breakingbadapi.com/api/characters/${this.$store.state.personID}`)
      .then(response => response.json())
      .then(result => {
        this.characters = result
        console.log(result)
      });
  },
      data() {
        return {
          characters: [],
          quotes: [],
          counter: this.timesGenerated
        };
      },
      props: {
        timesGenerated: {
        source: Number,
        default: 0
    }
    },
      methods:{
        count(){
          this.counter = this.counter + 1
        },
        getQuote(qName){
         fetch(`https://breakingbadapi.com/api/quote/random?author=${this.$store.state.qName}`)
          .then(response => response.json())
          .then(qResult => {
            this.quotes = qResult[0].quote
              console.log(qResult)
             console.log(qResult[0].author)
      });
          console.log(qName)
        },
      }
  
  }
</script>