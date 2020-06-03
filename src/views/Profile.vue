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
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">
              <H1>Name</H1>
              <p>
              {{person.name}}
              </p>
            </v-col>

            <v-col class="px-0">
              <H1>Alias</H1>
              <p >
              {{person.nickname}}
              </p>
            </v-col>

            <v-col class="px-0">
              <H1>Occupation</H1>
          <ul>
            <li 
            v-for="(occupation, index) in person.occupation"
            :key="occupation"> 
            {{person.occupation[index]}}
            </li>
          </ul>
            </v-col>

            <v-col class="px-0">
              <H1>Status</H1>
              <p>
              {{person.status}}
              </p>
            </v-col>            

            <v-col class="px-0">
              <v-btn :times-generated="counter" @click="getQuote(person.name); count()">
                Generate Qoute {{counter}}
              </v-btn>
              <div id="randomQoute">{{quotes}}</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
   </div>
 </template>



<script>

export default {
  name: 'Profile',
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