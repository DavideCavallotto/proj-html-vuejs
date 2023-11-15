<script>
import {store} from '../store'
import HeaderSearchBar from '../components/HeaderSearchBar.vue'
export default {
    data() {
        return {
            store: store,        
            
        }
    },
    methods: {
        
    },
    components: {
        HeaderSearchBar
    },
    computed: {

    }
}

</script>

<template>
  <div class="nav-bar">
    <div class="dropdown-language">
        <select name="languages" id="languages">
            <option v-for="language in store.languages" :key="language" :value="language.value">
                {{language.language}}
            </option>
            
        </select>
    </div>
    <div class="courses-socials">
        <ul class="courses">
            <li class="course" v-for="course in store.typeCourses" :key="course">
                <a href="#">{{ course.text }}</a>
                <span v-if="course.news === true" class="badge">NEW</span>
            </li>           

        </ul>
        <ul class="socials">
            <li class="social-icons" v-for="item in store.icons" :key="item">
                <a href="#"><font-awesome-icon :icon="item" /></a>                
            </li>
        </ul>

    </div>

  </div>
  <HeaderSearchBar/>
</template>

<style lang="scss" scoped>
@use '../style/variables' as*;
.nav-bar {
    display: flex;
    justify-content: space-between;  
    padding: 20px 100px;  
    border-bottom: 1px solid rgb(230, 230, 231);
    color: $pj_color_grey;
    
    select {
        border: none;
        color: $pj_color_grey;       
       
    }
    .courses-socials,.courses,.socials {
        display: flex;
        gap: 20px;
    } 

    .courses-socials {
        
    }

    .courses {
        margin-right: 30px;
               
        .course {
            position: relative;
        }
        .badge {
            background-color: red;
            color: white;
            font-size: 8px;
            padding: 3px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            border-top-left-radius: 5px;
            position: absolute;
            bottom: 17px;
            right: 0;
            
            
        }
    }

    
}

</style>
