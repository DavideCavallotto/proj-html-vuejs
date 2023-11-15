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
    computed: {

    }
}

</script>

<template>   
  <button>

  </button>

</template>

<style lang="scss" scoped>
@use '../style/variables' as *;
button {
    color: white;
    padding: 15px 25px;
    border: none;
    background-color: $pj_color_blue;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #2b77d9;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.24), 0 17px 20px 0 rgba(0,0,0,0.19);
        
    }
}
</style>
