<script>
import { store } from '../store';

export default {
    data() {
        return {
           store: store,
           contactFooter: store.contactFooter[0], 
           
              
                     
        }
    },
    props: {
        
    },

    mounted() {
        console.log(store.pagesFooter)
    }
    
}

</script>

<template>
    <div class="container-large">
        <div class="row">
            <div class="col-3">
                <ul class="card">  
                    <li>
                        <h2>About</h2>
                    </li>
                    <li>
                        <p>
                            <span class="blue">Masterstudy</span>in Education WordPress theme featured by Learning Management System (LMS) for online education. Developed by <span class="blue">StylemixThemes</span>.
                        </p>
                    </li>
                </ul>
                <div class="icon">
                    <div v-for="(icon,index) in store.iconFooter" :key="index">
                        <span>
                            <font-awesome-icon :icon="icon" />
                        </span>                
    
                    </div>

                </div>
                                           

            </div>
            <div class="col-3">
                <ul class="card" > 
                    <li>
                        <h2>{{ contactFooter.title }}</h2>

                    </li>
                    <li>
                        <p>{{ contactFooter.address }}</p>

                    </li>
                    <li>
                        <p>{{ contactFooter.city }}</p>     

                    </li>
                    <li>
                        <p>{{ contactFooter.tel }}</p>

                    </li>
                    <li>
                        <p>{{ contactFooter.fax }}</p>  

                    </li>                         
                    <li class="grey">
                        <p>{{ contactFooter.mail }}</p>
                    </li>                            

                </ul>

            </div>
            <div class="col-3">
                <h2 class="title-page">{{ store.pagesFooter.title }}</h2>
                <ul class="card pages">
                                        
                    <li v-for="page in store.pagesFooter.page">
                        <p><span>&#x2022</span>{{ page }}</p>
                    </li>
                                              

                </ul>
                

            </div>           
            
            
            <div class="row-blog">
                <h2>{{ store.blogFooter.title }}</h2>               
                <div class="col-3" v-for="blog in store.blogFooter.firstBlog">                    
                    <div class="card-blog">
                        <img :src="blog.img" alt="">
                        <div class="card-main">
                            <p>
                                {{ blog.text }}
                            </p>
                            <p class="grey">
                                {{ blog.date }}
                            </p>
        
                        </div>
                    </div>
    
            </div>
                
    
            </div>
        </div>
        </div>

</template>




<style lang="scss" scoped>
@use '../style/variables' as*;

.row {
    flex-wrap: nowrap;
}
.title-page {
    padding-bottom: 20px;
}
.pages {
    height: 50%;    
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    span {
        
        margin-right: 3px;
    }

}

li {
    margin-bottom: 20px;
    margin-right: 15px;
}

.icon {
    display: flex;
    gap: 15px;
    color: #929292;
    font-size: 25px;
}

.blue {
    margin-right: 3px;
    color: $pj_color_blue;

}

.grey {
    color: $pj_color_grey;
}


.row-blog {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        margin-bottom: 20px;
    }
    .card-blog {
        display: flex;   
        
        img {
            align-self: flex-start;
        }
        
        p {
            margin-left: 10px;
        }    
    
        .card-main {
            max-width: 250px;
        }
    }
}


</style>
