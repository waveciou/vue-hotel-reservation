<template>
    <div class="wrap">
        
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        name: 'room',
        created() {
            console.log(this.$route.query.id);
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
</style>