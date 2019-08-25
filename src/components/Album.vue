<template>
    <div class="album">
        <figure class="album-image">
            <img v-lazy="currentImage">
        </figure>
        <ul class="albumList">
            <li v-for="(item, index) in this.imageList" :key="index" :class="{'current': item === currentImage}">
                <a href="javascript:;" class="albumList-image" @click.prevent="selectCurrentImage(item)">
                    <img v-lazy="item">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageList: [],
                currentImage: ''
            }
        },
        name: 'Album',
        props: {
            imageUrl: Array
        },
        methods: {
            selectCurrentImage(url) {
                this.currentImage = url;
            }
        },
        watch: {
            imageUrl: {
                deep: true,
                handler(newItem, oldItem) {
                    this.imageList = newItem;
                    this.currentImage = this.imageList[0];
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/_utils.scss';

    .album {
        position: relative;
    }

    .album-image {
        width: 100%;
        height: 0px;
        padding-bottom: 55%;
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

    .albumList {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        position: absolute;
        left: 0px;
        bottom: 40px;
        opacity: 0.6;
        transition: opacity 0.4s;

        &:hover {
            opacity: 1;
        }

        > li {
            width: 15%;
            position: relative;
            margin-right: 20px;

            &.current {
                
            }
        }
    }

    .albumList-image {
        width: 100%;
        height: 0px;
        padding-bottom: 55%;
        display: block;
        position: relative;
        overflow: hidden;
        box-shadow: 1px 1px 4px rgba($color-gray-dark, 0.4);

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
</style>