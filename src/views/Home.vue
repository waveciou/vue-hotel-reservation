<template>
    <div class="wrap">
        <div class="banner">
            <img v-lazy="require('../../public/img/holly-stratton-PhwbTwdZ3f4-unsplash.png')">
        </div>

        <div class="desc-block">
            <div class="desc-item">
                <div class="desc-title icon-place">UPCOMING NEIGHBORHOODS</div>
                <p>Tourist Attractions, Industrial Park, College, Hospital, Airport, Major Cross Road For Through Traffic, etc</p>
            </div>
            <div class="desc-item">
                <div class="desc-title icon-train">TRANSPORTATION CONNECTIVITY</div>
                <p>Roads, Taxi, Metro, Subway, Buses, Trains, Walking, Bicycle Paths, etc</p>
            </div>
        </div>

        <h2 class="title">ENJOY YOUR STAY</h2>
        <div class="subtitle">PERFECT PLACE FOR HOLIDAY</div>

        <transition name="fade" mode="out-in">
            <RoomsList />
        </transition>
    </div>
</template>

<script>
    import RoomsList from '@/components/RoomsList.vue'

    export default {
        data() {
            return {

            }
        },
        name: 'home',
        components: {
            RoomsList
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

    // * Banner
    .banner {
        width: 100%;
        height: 0px;
        padding-bottom: 53%;
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
            opacity: 0;
            transition: opacity 1s;

            &[lazy="loaded"] {
                opacity: 1;
            }
        }
    }

    // * 簡介說明
    .desc-block {
        display: flex;
        margin-top: 5rem;
        margin-bottom: 8rem;
    }

    .desc-item {
        width: 50%;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;

        p {
            font-size: 18px;
        }
    }

    .desc-title {
        margin-bottom: 1rem;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 1.6em;
        color: $color-black;

        &::before {
            @include material;
            display: block;
            line-height: 1.4em;
            font-size: 40px;
        }

        &.icon-place::before {
            content: 'place';
        }

        &.icon-train::before {
            content: 'train';
        }
    }


</style>
