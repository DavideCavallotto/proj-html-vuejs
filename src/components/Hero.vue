<script>
import Button from './Button.vue';

export default {
    data() {
        return {
            textButton:'JOIN FOR FREE'
        }
    },
    methods: {
        
    },
    components: {
        Button
    },
    computed: {

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
                <img src="public/images/base.png" alt="">
            </div>

        </div>
        

    </div>
  


</template>

<style lang="scss" scoped>
.row {
    align-items: center;
    justify-content: center;
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
