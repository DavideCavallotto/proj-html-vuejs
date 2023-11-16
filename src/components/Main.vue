<script>
import Advantages from './Advantages.vue';
import Courses from './Courses.vue';
import { store } from '../store';
import MainHero from './MainHero.vue';

export default {
    data() {
        return {
            store: store,
        }
    },
    methods: {
        
    },
    components: {    
    Advantages,
    Courses,
    MainHero
},
    computed: {

    }
}

</script>

<template>
    <MainHero :item="store.heroComp"/>
    <Advantages/>
    <Courses/> 

</template>

<style scoped>

</style>
