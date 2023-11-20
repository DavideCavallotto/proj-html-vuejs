<script>

import { store } from '../store';


export default {
    data() {
        return {
           store: store,           
                     
        }
    },
    props: {
        card: Object
    },

    methods: {
        badgeAssignment() {

            if (this.card.badge === 'Hot') {

                return 'b-red';

            } else if (this.card.badge === 'Special') {

                return 'b-yellow';

            } else {
                
                return '';
            }
        },
    }
  
}
</script>

<template>
    <div class="card" >
        <div class="card-header">
            <img :src="card.img" alt="">
            <span class="badge" v-if="card.badge !== ''" :class="badgeAssignment()"> {{ card.badge }}</span>
        </div>
        <div class="card-body">
            <p class="tipology">{{ card.type }}</p>
            <p class="line">{{ card.text }}</p>
        </div>
        <div class="card-footer">
            <div class="vote">
                <span class="clock"><font-awesome-icon :icon="card.icon" /></span>
                <span>{{ card.hour }}</span>
                <span v-if="card.vote !== 0">{{ card.vote }}</span>
                <span class="star" v-for="n in card.vote"> &starf; </span>
            </div>
            <div class="price">
                <p class="discount" v-if="card.discount !== 0">${{ card.discount }}</p>
                <p>${{card.price}}</p>

            </div>
        </div>
    
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

.card {    
    background-color: white;
    border: 1px solid #E8E8E8;
    height: 100%;
    cursor: pointer;
    
    &:hover {
        border: 1px solid gold;
    }

    .card-header {
        position: relative;
        .badge {
            position: absolute;
            background-color: green;
            color: white;
            padding: 10px;
            border-radius: 10px;
            right: 5px;
            top: 5px;
        }

        .b-red {
            background-color: red;
        }
        .b-yellow {
            background-color: goldenrod;
        }
    }
    
    .card-body {
        padding: 15px;
    }
    
    img {
        width: 100%;
    }

    .card-body {
        .tipology {
            margin-bottom: 10px;
            font-size: 12px;
            color: $pj_color_grey;
        }

        .line {
            border-bottom: 1px solid #E8E8E8;
            padding-bottom: 20px;
        } 
       
    }

    .card-footer {
        display: flex;
        justify-content: space-between;  
        padding: 0 15px 15px; 
        
        .star {
            font-size: 15px;
            color: gold;
        }
        .discount {
            font-size: 14px;
            text-decoration: line-through;
            color: $pj_color_grey;
        }

        .clock {
            margin-right: 5px;
            color: $pj_color_grey;
        }

    }

    
}



</style>
