<script>
import CardIcon from './CardIcon.vue';
import { store } from '../store';

export default {
    data() {
        return {
          store: store,
        }
    },
    methods: {
        
    },
    components: {
        CardIcon
    },
    computed: {

    }
}

</script>

<template>    
  <div class="container-medium">
    <div class="row">
      <CardIcon v-for="icon in store.advantages" :card="icon"/>

    </div>

  </div>


</template>

<style lang="scss" scoped>

</style>