<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
    data() {
        return {

        }
    },
    methods: {
        
    },
    components: {
      Header,
      Main,
      Footer
    },
    computed: {

    }
}

</script>

<template>
  <Header/>
  <Main/>   
  <Footer/>
  
</template>

<style lang="scss">
@use './style/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');



</style>
