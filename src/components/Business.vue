<script>
import Button from './Button.vue';
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
        Button      
    
    },
  
}

</script>

<template>
    <div class="container-fluid">        
        <div class="row">
            <div class="col-4 card-container" v-for="item in store.business">
                <div class="card">
                    <div class="card-img">
                        <img :src="item.img" alt="">

                    </div>
                    <div class="card-text">
                        <h1>{{ item.title }}</h1>
                        <p>{{ item.text }}</p>
                        <Button v-text="item.textBtn"/>
                    </div>

                </div>

            </div>
            
            
            
        </div>
    </div>

  
    <Carousel/>  
     

</template>

<style lang="scss" scoped>
@use '../style/variables' as *;
.row {
    justify-content: center;
    .card-container {  
        padding: 20px;  
        .card {
            text-align: center;
            border: 1px solid #E8E8E8;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 150px 40px 40px;
            
            .card-text {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding-left: 30px;
                gap: 20px;
    
                p {
                    text-align: start;                
                }
                
            }
            
        }
        
    }
}


</style>
