<template>
  <div class="Home">
    <v-container fixed>
    <v-row>
      <v-col cols="12" > 
        <v-row
          :align="alignment"
          :justify="justify"
          style="height: 300px;"
        >
  <v-card 
    v-for="character in characters"
    :key="character"
    @click="getID(character.char_id, character.name), $router.push('Profile')"
    class="ma-3 pa-6" 
    width="344"
   
  >
    <v-img
      :src="character.img"
      contain
      height="300px"
    ></v-img>

    <v-card-title
    >
      {{character.name}}
    </v-card-title>

    <v-card-subtitle>
      {{character.portrayed}}
    </v-card-subtitle>
  </v-card>
   </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">          
        </v-row>
      </v-col>
    </v-row>
  </v-container>
    <v-content>
    </v-content>

  </div>
</template>

<script>


export default {
  name: 'Home',
    created() {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then(response => response.json())
      .then(result => {
        this.characters = result
        console.log(result)
      });
  },
        data() {
        return {
          characters: [],
        };
      },
      methods:{
        getID(id,qn){
          console.log(id)
          console.log(qn)
          this.$store.state.personID = id
          this.$store.state.qName = qn.replace(/\s/g, "+")

        },
      } , 
  }
</script>