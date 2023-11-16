<script>
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
        
    },
    computed: {

    },

    props: {
        card: Object
    }
}

</script>

<template>    
<div class="col-4">
    <div class="card">
        <span><font-awesome-icon :icon="card.icon" /></span>
        <h3>{{ card.title }}</h3>
        <p>{{ card.text }}</p>

    </div>

</div>


</template>

<style lang="scss" scoped>

@use '../style/variables' as *;
.col-4 {    
    padding: 10px;
      
    .card {
        background-color: $pj_color_cyan;
        padding: 30px;
        height: 100%;
    }

    span {
        display: inline-block;
        font-size: 40px; 
        color: $pj_color_blue;       
    }

    h3 {
        font-weight: 400;
        font-size: 14px;
    }

    span, h3 {
        margin-bottom: 20px;
        
    }

    p {
        color: $pj_color_grey;
        font-size: 12px;
    }
}


</style>