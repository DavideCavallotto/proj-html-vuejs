<script>

export default {
    data() {
        return {                       
                          
        }   
    },
    methods: {
        
    },
    components: {
   
    },
   
}

</script>

<template>
    <div class="container-fluid">
        <div class="container-medium">
            <div class="row">
                <div class="col-8">
                    <h3>
                        Subscribe our newsletter
                    </h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, incidunt at, molestias distinctio esse ea consequuntur quae quos ipsam, maxime vitae aliquam.
                    </p>
                </div>
                <div class="col-4">
                    <p>Your E-mail Address</p>
                    <input type="text" placeholder="Enter your E-mail">
                    <button>Subscribe</button>
                </div>
            </div>
        </div>

    </div>
   

</template>

<style lang="scss" scoped>
@use '../style/variables' as*;

.container-fluid {
    padding: 0 0 50px;
    background-color: $pj_color_green;

    button {
    border: none;
    background-color: #385bce;
    color: white;
    padding: 10px;
    cursor: pointer;
    }

    input {
        padding: 10px;
        border: none;
    }

    .col-8 {
        color: white; 
        padding-right: 30px;       

        h3 {
            margin-bottom: 15px;
            font-weight: 500;
        }

        p {
           font-weight: 300; 
        }
    }

    .col-4 {
        color: white;

        p {
            margin-bottom: 15px;
        }
    }
    
}




</style>
