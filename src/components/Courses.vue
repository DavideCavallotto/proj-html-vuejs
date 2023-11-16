<script>
import { store } from '../store';

export default {
    data() {
        return {
            store: store,
        }
    },
    
}

</script>

<template>
    <div class="container-medium">
        <div class="row-up">
            <div class="col-8">
                <div class="card">
                    <img src="public/images/cat_1-770x375.jpg" alt="">
                    <div class="course">
                        <p>Software Development</p>
                        <p class="number-courses">5 Courses</p>
                    </div>
                </div>
            </div>
            
            <div class="col-4 d-flex">
                <div class="card">
                    <img src="public/images/cat_2-370x155.jpg" alt="">
                    <div class="course">
                        <p>Art</p>
                        <p class="number-courses">8 Courses</p>
                    </div>
                </div>
                <div class="card">
                    <img src="public/images/cat_3-370x155.jpg" alt="">
                    <div class="course">
                        <p>Material Design</p>
                        <p class="number-courses">5 Courses</p>
                    </div>

                </div>
            </div>          
                  
        </div>
              

        <div class="row-down">            
            <div v-for="item in store.numberCourses" class="col-4">
                <div class="card">
                    <img :src="item.img" alt="">
                    <div class="course">
                        <p>{{ item.course }}</p>
                        <p class="number-courses">{{ item.counter }} Courses</p>
                    </div>
    
                </div>
            </div>           
            
        </div>
    </div>
    

    

    


</template>

<style lang="scss" scoped>  
@use '../style/variables' as *;

img {
    margin-bottom: 10px;
}

p {
    font-size: 13px;
}
.d-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.row-up,.row-down {
    display: flex;
    flex-wrap: wrap;
}
    
.col-8, .col-4 {
    padding: 10px;
}
    
.course {
    display: flex;
    justify-content: space-between;

    .number-courses {
        color: $pj_color_grey;
    }
}



</style>
