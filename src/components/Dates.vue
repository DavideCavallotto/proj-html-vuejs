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
    
    
    
}

</script>

<template>
    <div class="container-fluid">
        <div class="container-medium">
            <div class="row">
                <div class="col-6">
                    <h1>We are Proud</h1>
                    <p>Certificate courses are instructed by highly educated and qualified instructor who hold doctoral and master's level degrees</p>
                </div>
    
            </div>
            
        </div>
        
    </div>          
    <div class="row-dates">
        <div class="col-12-">
            <div class="dates" v-for=" item in store.dates">
                <p class="value">{{ item.value }}</p>
                <p class="type">{{ item.type }}</p>
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables' as *;
.container-fluid {   
    background-color: #F0F4FA;
    .container-medium {
        padding: 0;
    }

    .row {
        justify-content: center;
        align-items: center;

        .col-6 {
            text-align: center;

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
    }

}

.row-dates {
    background-image: url(public/images/we_proud.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #F0F4FA;
    height: 340px;
}
.col-12- {
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .dates {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 30px;
        border-right: 1px solid #E8E8E8;
        
        

        .value {
            font-size: 50px;
            font-weight: 300;
        }

        .type {
            font-size: 20px;
            color: $pj_color_grey;
        }

        &:last-child {
            border: none;
        }
    }
}


</style>
