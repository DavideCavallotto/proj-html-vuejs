<script>
import Advantages from './Advantages.vue';
import Courses from './Courses.vue';
import { store } from '../store';
import MainHero from './MainHero.vue';
import MainInformation from './MainInformation.vue';
import RecentCourses from './RecentCourses.vue';
import Dates from './Dates.vue';
import Subscribe from './Subscribe.vue';
import CarouselContainer from './CarouselContainer.vue';




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
    MainHero,
    MainInformation,
    RecentCourses,
    Dates,
    Subscribe,
    CarouselContainer
    
    },
  
}

</script>

<template>
    <MainHero/>
    <Advantages/>
    <Courses/> 
    <MainInformation/>
    <RecentCourses/>
    <Dates/>
    <Subscribe/>
    <CarouselContainer/>
    

      

</template>

<style lang="scss" scoped>

.background {
    background-color: #F0F4FA;
    
    .container-medium {
        padding: 0;
    }

  
}


</style>
