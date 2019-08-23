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
        </div>

        <footer class="footer">
            <div class="wrap">
                <div class="mainFooter">
                    <div class="logo">:OR</div>
                    <div class="contact">
                        <p class="icon-place">50 Nathan Road,Tsimshatsui, Kowloon Hong Kong</p>
                        <p class="icon-phone">+886-900-000-000</p>
                        <p class="icon-email">or_hotel@gmail.com</p>
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
</style>
