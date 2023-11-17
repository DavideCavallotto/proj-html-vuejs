<script>
import Button from './Button.vue';
import { store } from '../store';

export default {
    data() {
        return {
            textButton:'JOIN FOR FREE',
            store: store,
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
    <div class="container-medium">
        <div class="row">
            <div class="col-6">
                <div class="text">
                    <h1>Start Inventing in You</h1>
                    <p>With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you.</p>
                </div>
                <Button v-text="textButton"/>
            </div>
            <div class="col-6 screen">
                <img src="/images/base.png" alt="">
                <span class="books"><img src="public/images/book1.png" alt=""></span>
                <span class="book"><img src="public/images/book2.png" alt=""></span>
                <span class="bubble"><img src="public/images/bubblespeech.png" alt=""></span>
                <span class="magnifier"><img src="public/images/magnifier.png" alt=""></span>
            </div>

        </div>
        

    </div>
  


</template>

<style lang="scss" scoped>
.row {
    align-items: center;
    justify-content: center;

    .screen {
        
        position: relative;
        .book{
            position: absolute;
            width: 170px;
            left: 174px;
            top: 221px;
        }

        .books {
            position: absolute;
            width: 170px;
            left: 283px;
            top: 73px;
        }

        .bubble {
            position: absolute;
            width: 60px;
            left: 391px;
            top: 36px;
        }
        

        .magnifier{
            position: absolute;
            width: 60px;
            left: 349px;
            top: 249px;
        }
    }
}
.col-6 {
    
    .text {
        width: 450px;
    }

    h1, p {
        margin-bottom: 20px;
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
