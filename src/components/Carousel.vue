<script>

import { store } from '../store';
import CardCourses from './CardCourses.vue';


export default {
    data() {
        return {
           store: store,  
           currentIndex: 0,    
           
                     
        }
    },
    components: {
        CardCourses
    },
    props: {
        card: Object
    },

    methods: {
        nextCard() {
            const lastIndex = this.store.cards.length - 1;            
            if (this.currentIndex + 6 <= lastIndex) {

                this.currentIndex += 1;
            } else {
                this.currentIndex = 0
            }

            console.log('next',this.currentIndex + 6)            
            
        },
        prevCard() {
            const lastIndex = this.store.cards.length - 1;
            if (this.currentIndex > 0) {
            this.currentIndex -= 1;
            } else {
            this.currentIndex = lastIndex - 5;
            }


            console.log('prev',this.currentIndex)  

            },
    }

    
}

</script>

<template>
   <div class="container-fluid"> 
    <div class="row-card">
        <div class="col-2" v-for="(item, index) in store.cards.slice(currentIndex, currentIndex + 6)" :key="index">
            <CardCourses :card="item"/>

        </div>      
        
    </div>
    <div class="row">
        <button @click="prevCard" class="prev">Prev</button>       
        <button @click="nextCard" class="next">Next</button>

    </div>
</div>  

</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

.container-fluid {
    padding: 50px;
    .col-2 {
        padding: 0 10px 30px;               
    }
    .row-card {
        display: flex;
        justify-content: center;        
        flex-wrap: wrap;
    }

    .row {
        justify-content: center;
        gap: 2px;

        button {
            padding: 5px;
        }
    }

}




</style>