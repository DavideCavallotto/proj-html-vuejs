<script>

import Carousel from './Carousel.vue'


export default {
    data() {
        return {                       
         
           
        }   
    },
    methods: {
        
    },
    components: {
   
    Carousel
    
    },
  
}

</script>

<template>
    <div class="container-fluid">        
        <h1>Popular Courses</h1>
        <p>Discover our most popular courses for self learning</p>
    </div>

  
    <Carousel/>  
     

</template>

<style lang="scss" scoped>
.container-fluid {
    text-align: center;
    background-color: #F0F4FA;

    h1 {
        font-size: 38px;
        font-weight: 300;
        margin-bottom: 20px;
    }

    p {
        font-weight: 300;
        color: gray;
    }
}




</style>
