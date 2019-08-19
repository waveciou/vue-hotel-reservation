<template>
    <div id="app">
        <header class="header">
            <div class="wrap">
                <h1 class="logo">:OR</h1>
                <div class="menu">
                    <a href="#" class="menu-link">HOME</a>
                    <a href="#" class="menu-link">ROOMS</a>
                </div>
            </div>
        </header>

        <div class="main">
            <router-view />
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

    .header {
        width: 100%;
        height: 90px;
        background-color: $color-white;

        > .wrap {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .menu {
        display: flex;
        align-items: center;
    }

    .menu-link {
        display: block;
        margin-left: 22px;
        margin-right: 22px;
        font-size: 22px;
        font-weight: 600;
        color: $color-black;
    }

    .logo {
        color: $color-black;
        font-size: 39px;
        font-weight: 700;
        line-height: 1.6em;
    }

    .footer {
        padding-top: 60px;
        padding-bottom: 50px;
        background-color: $color-gray-light;

        .contact {
            padding-left: 10px;
            padding-right: 10px;

            p, a {
                display: block;
                color: $color-black;
                font-weight: 600;

                &::before {
                    @include material;
                    line-height: 1.6em;
                    font-size: 22px;
                    margin-right: 10px;
                }

                &.icon-place::before {
                    content: 'place';
                }

                &.icon-phone::before {
                    content: 'phone';
                }

                &.icon-email::before {
                    content: 'email';
                }
            }
        }
    }

    .mainFooter {
        display: flex;
        justify-content: space-between;
    }

    .copyright {
        margin-top: 20px;
        color: $color-black;
        font-weight: 600;
        text-align: right;
    }
</style>
