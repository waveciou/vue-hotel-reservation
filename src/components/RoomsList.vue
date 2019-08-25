<template>
    <ul class="roomsList">
        <li v-for="(item, index) in $store.state.rooms" :key="index">
            <div class="roomsList-item">
                <figure class="roomsList-image">
                    <img v-lazy="item.imageUrl">
                </figure>
                <div class="roomsList-heading">
                    <div class="roomsList-title">{{ item.name }}</div>
                    <a href="javascript:;" class="roomsList-link" @click.prevent="goToRoomPage(item.id)">MORE</a>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        name: 'RoomsList',
        methods: {
            goToRoomPage(id) {
                this.$store.state.loading = true;
                this.$router.push({
                    path: 'room',
                    query: {
                        id: id
                    }
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/_utils.scss';

    .roomsList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 3rem;
        margin-bottom: 3rem;

        > li {
            width: calc((100% - 36px)/3);
            margin-bottom: 32px;
        }
    }

    .roomsList-image {
        width: 100%;
        height: 0px;
        padding-bottom: 88%;
        margin: 0px;
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            object-fit: cover;
            opacity: 0;
            transition: opacity 1s;

            &[lazy="loaded"] {
                opacity: 1;
            }
        }
    }

    .roomsList-heading {
        padding-top: 15px;
        padding-bottom: 15px;
        overflow: hidden;
    }

    .roomsList-title {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.6em;
        letter-spacing: 1px;
        color: $color-black;
        float: left;
    }

    .roomsList-link {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.6em;
        letter-spacing: 1px;
        color: $color-gray-dark;
        float: right;

        &::after {
            content: 'keyboard_arrow_right';
            @include material;
            font-size: 29px;
            vertical-align: top;
        }
    }
</style>
