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
        <div class="row">
            <div class="col-3">
                <div class="card">
                    <div class="card-header">
                        <h1>Come as you are</h1>
                    </div>
                    <div class="card-main">
                        <p>MasterStudy used is an excellent workshop whether you come as a counselor, advisor,
                            administrator, or faculty member. I am going home empowered. I am looking forward to attending
                            the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the
                            use of this excellent retention/student success course at my college.</p>
                    </div>
                    <div class="card-footer">
                        <h3>Tim Sab</h3>
                        <p>General Developer, Stylemix Themes</p>


                    </div>
                </div>
                <span><font-awesome-icon icon="fa-solid fa-caret-right" /></span>

            </div>



        </div>
    </div>


    <Carousel />
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

.container-fluid {
    background-image: url(public/images/brooke-cagle-224821-unsplash-1-1920x700.jpg);
    background-size: cover;
    padding: 60px 0;

    .row {
        justify-content: flex-start;

        .col-3 {
            position: relative;
            left: 30%;
            flex-basis: 30%;
            .card {
                background-color: white;
                padding: 60px;

                .card-header{
                    margin-bottom: 20px;
                }

                .card-main{
                    margin-bottom: 20px;
                }

                h1 {
                    font-size: 38px;
                    font-weight: 300;
                    margin-bottom: 20px;
                }

                p {
                    font-weight: 300;
                    
                }
            }
        }

        span {
            position: absolute;
            right: -27px;
            top: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 50px;
        }

    }

}


</style>
