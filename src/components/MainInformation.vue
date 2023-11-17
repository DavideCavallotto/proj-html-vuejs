<script>
import Button from './Button.vue';
import { store } from '../store';

export default {
    data() {
        return {            
            store: store,
            textButton:'READ MORE',
            
        }
    },
    methods: {
        
    },
    components: {
        Button
    },
    computed: {

    },
    props: {
        
        
    }
}

</script>

<template>
    <div class="container-fluid">
        <div class="container-medium">
            <div class="row">
                <div class="col-4">
                    <div class="text">
                        <h1>Limitless learning, more possibilities</h1>
                        <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitment</p>
                    </div>
                    <Button v-text="textButton"/>
                </div>                
    
            </div>       
    
        </div>

    </div>
  


</template>

<style lang="scss" scoped>
.container-fluid {    
    display: flex;
    justify-content: center;
    background-image: url(public/images/Untitled-1-1-1-1-1.png);
    
    
}

.container-medium {
    
}
.row {
    align-items: center;
    justify-content: flex-start;
    
}
.col-4 {
    
    .text {
        width: 360px;
    }

    h1, p {
        margin-bottom: 30px;
    }

    h1 {
        font-size: 38px;
        font-weight: 300;
        letter-spacing: 3px;
    }

    p {
        font-size: 15px;
    }
    
}


</style>
