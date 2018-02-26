<template>
  <div id="app" class="container">


    <ul class="is-list-less row justify-around">
        <li class="col-5" v-for="person in persons">
            <person :person="person"></person>
        </li>
    </ul>

  </div>
</template>

<script>
import personService from './services/axios';
import Person from './person.vue'

export default {
  name: 'app',
  components: {Person},
  data () {
    return {
      persons : [],
    }
  },
  mounted() {
    personService.all().then( (datos) => {  this.persons = datos;  })
  }
}
</script>
<style lang="scss">
  @import "./assets/scss/main";
  li{
    border-radius: .4rem;
    border: .2px solid #ccc;
    margin: .8rem 0
  }
</style>
