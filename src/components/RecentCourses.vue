<script>
import Button from './Button.vue';
import { store } from '../store';
import CardCourses from './CardCourses.vue'

export default {
    data() {
        return {
            textButton:'SHOW ALL',
            store: store,
                     
        }
    },
    methods: {
        
    },
    components: {
        Button,
        CardCourses
    },
    computed: {

    },
   

}

</script>

<template>
<div class="container-large">
    <div class="row">
        
        <h1>Recent Courses</h1>
        <ul>
            <li v-for="cat in store.categories"><a href="#">{{ cat }}</a></li>
        </ul>  
        
    </div>
</div>
<div class="container-fluid"> 
    <div class="row-card">
        <div class="col-2" v-for="item in store.cards" >
            <CardCourses :card="item"/>

        </div>

        <Button v-text="textButton"/>
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

}
.row {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    
    font-size: 38px;
    font-weight: 300;
}

ul {
    margin-top: 50px;
    display: flex;
    gap: 40px;

    li {
        color: $pj_color_blue;
        padding: 10px;

        &:hover {
            background-color: $pj_color_cyan;
            color: $pj_color_grey;            
            border-radius: 15px;
        }
    }
}


</style>
