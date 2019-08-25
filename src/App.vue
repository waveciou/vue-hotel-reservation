<template>
    <div id="app">
        <header class="header">
            <div class="wrap">
                <h1 class="logo">:OR</h1>
                <div class="menu">
                    <router-link to="home" class="menu-link">HOME</router-link>
                    <a href="#" class="menu-link">ROOMS</a>
                </div>
            </div>
        </header>

        <div class="main">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
            <Loading text="Loading" :loading="$store.state.loading"></Loading>
        </div>

        <footer class="footer">
            <div class="wrap">
                <div class="mainFooter">
                    <div class="footer-item logo">:OR</div>
                    <div class="footer-item contact">
                        <p class="icon-place">50 Nathan Road,Tsimshatsui, Kowloon Hong Kong</p>
                        <p class="icon-phone">+886-900-000-000</p>
                        <p class="icon-email">or_hotel@gmail.com</p>
                    </div>
                    <div class="footer-item sitmap">
                        <router-link to="home" class="sitmap-link">HOME</router-link>
                        <a href="#" class="sitmap-link">ROOMS</a>
                    </div>
                    <div class="footer-item media">
                        <a href="javascript:;" class="media-link icon-facebook" title="Facebook">Facebook</a>
                        <a href="javascript:;" class="media-link icon-twitter" title="Twitter">Twitter</a>
                        <a href="javascript:;" class="media-link icon-instagram" title="Instagram">Instagram</a>
                    </div>
                </div>
                <div class="copyright">Copyright © 2019 :OR All Rights Reserved.</div>
            </div>
        </footer>
    </div>
</template>

<script>
    import home from './views/home.vue';
    import room from './views/room.vue';

    import axios from 'axios';

    export default {
        data() {
            return {

            }
        },
        components: {
            'home': home,
            'room': room
        },
        created() {
            // 取得所有房型
            axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer FEHYikSsoJvXjqurOCdQ3nfnpY6i579Hjh7K7ToTmJ11tB7tuiexfHE9uxp8'
                }
            }).then((response) => {
                this.$store.dispatch('getRoomsAllData', response.data.items);
            });
        },
        mounted() {
            
        },
        methods: {

        },
        watch: {
            
        }
    }
</script>

<style lang="scss">
    @import 'assets/scss/_utils.scss';
    @import 'assets/scss/main.scss';

    .media-link {
        width: 30px;
        height: 30px;
        display: inline-block;
        vertical-align: top;
        margin-right: 20px;
        border-radius: 100%;
        background: {
            repeat: no-repeat;
            position: center;
            size: contain;
        }
        font-size: 0px;

        &.icon-facebook {
            background-image: url('../public/img/facebook.svg');
        }

        &.icon-twitter {
            background-image: url('../public/img/twitter.svg');
        }

        &.icon-instagram {
            background-image: url('../public/img/instagram.svg');
        }
    }
</style>
