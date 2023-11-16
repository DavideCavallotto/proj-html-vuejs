<script>
import Button from './Button.vue'

export default {
    data() {
        return {
            textButton:'SIGN UP'
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
    <div class="navigation">
        <img src="/images/MasterStudy_logo.svg" alt="">
        <div class="nav-courses">
            <div class="search-courses">
                <span><a href="#"><font-awesome-icon icon="fa-solid fa-bars" /></a></span>
                <p>Category</p>
                <input type="text" placeholder="Search courses">
                <button><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
            </div>
            <div class="plan">
                <div class="plan-work">
                    <span><a href="#"><font-awesome-icon icon="fa-solid fa-bullhorn" /></a></span>
                    <p><a href="#">Become an Instructor</a></p>
                </div>
                <div class="plan-tipology">
                    <span><a href="#"><font-awesome-icon icon="fa-solid fa-briefcase" /></a></span>
                    <p><a href="#">For Enterprise</a></p>        
                </div>
            </div>
            <div class="access">
                <div class="log-in">
                    <span><a href="#"><font-awesome-icon icon="fa-regular fa-user" /></a></span>
                    <p>Log in</p>
                </div>
                <Button v-text="textButton"/>
                <span class="bookmark"><a href="#"><font-awesome-icon icon="fa-regular fa-bookmark" /></a></span>


            </div>


        </div>

    </div>


</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

.navigation {
    display: flex;
    padding: 20px 100px; 
    gap: 30px;
    font-size: 12px;
    color: $pj_color_grey;
    
    .nav-courses {
        .search-courses {
            
            
            p {
                margin: 0 10px 0 3px;
                font-weight: bold;
                text-transform: uppercase;
            }

            button {
                border: none;
                background-color: $pj_color_blue;
                color: white;
                padding: 15px 25px;
                cursor: pointer;                
                
            }
        }
        
        .plan {
            gap: 30px;
            span {
                margin-right: 5px;
                color: $pj_color_blue;              
                
            }
            .plan-tipology:hover, .plan-work:hover {
                color: $pj_color_blue;  
            }
        }
        
        .access {
            .log-in {
                gap: 4px;
                
                &:hover {
                    color: $pj_color_blue;
                    cursor: pointer;
                }
            }           
            .bookmark {
                font-size: 20px;

                &:hover {
                    color: $pj_color_blue;
                }
            }
        }

            
    }
    .nav-courses,.access {
        gap: 30px;
    }

    .nav-courses,
    .search-courses,.plan,
    .plan-work,
    .plan-tipology,
    .access,
    .log-in {
        display: flex;
        align-items: center; 

        

        input {
            border: none;
            background-color: ghostwhite;
            padding: 15px;
            
        }


    }

}

</style>
