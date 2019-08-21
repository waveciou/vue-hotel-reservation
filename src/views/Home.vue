<template>
    <div class="wrap">
        <div class="banner">
            <img v-lazy="require('../../public/img/holly-stratton-PhwbTwdZ3f4-unsplash.png')">
        </div>

        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        data() {
            return {

            }
        },
        name: 'home',
        components: {
            HelloWorld
        },
        created() {

        },
        mounted() {

        },
        methods: {

        },
        watch: {
            
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/_utils.scss';

    .banner {
        width: 100%;
        height: 0px;
        padding-bottom: 60%;
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
        }
    }
</style>
