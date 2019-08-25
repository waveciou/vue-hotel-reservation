<template>
    <div id="app">
        <header class="header">
            <div class="wrap">
                <h1 class="logo">:OR</h1>
                <div class="menu">
                    <router-link to="home" class="menu-link">HOME</router-link>
                    <a href="javascript:;" class="menu-link">ROOMS</a>
                </div>
            </div>
        </header>

        <div class="main" :class="{'is-show': $store.state.loading}">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
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
                        <a href="javascript:;" class="sitmap-link">ROOMS</a>
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

        <Modal v-model="$store.state.lightbox">
            <div class="lightBox">
                <div class="lightBox-header">
                    <a href="javascript:;" class="close-btn" @click="closeLightBox">close</a>
                </div>
                <div class="lightBox-title">訂房完成</div>
                <div class="lightBox-body">
                    <p>您已預定完成，詳細內容將傳送簡訊至您的手機。</p>
                    <dl>
                        <dt>NAME</dt>
                        <dd>{{ $store.state.order.name }}</dd>
                    </dl>
                    <dl>
                        <dt>TEL.</dt>
                        <dd>{{ $store.state.order.tel }}</dd>
                    </dl>
                    <dl>
                        <dt>ROOMS</dt>
                        <dd>{{ $store.state.order.roomName }}</dd>
                    </dl>
                    <dl>
                        <dt>DATE</dt>
                        <dd>{{ $store.state.order.date }}</dd>
                    </dl>
                </div>
                <div class="lightBox-footer">
                    <a href="javascript:;" class="btn" @click="closeLightBox">完成</a>
                </div>
            </div>
        </Modal>

        <Loading text="Loading" :loading="$store.state.loading"></Loading>

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
            }).then(response => {
                this.$store.dispatch('getRoomsAllData', response.data.items);
                this.$store.state.loading = false;
            }).catch(error => {
                this.$store.state.loading = false;
                console.log(error);
            });
        },
        methods: {
            closeLightBox() {
                this.$store.state.lightbox = false;
            }
        },
    }
</script>

<style lang="scss">
    @import 'assets/scss/_utils.scss';
    @import 'assets/scss/main.scss';
    @import 'assets/scss/theme.scss';

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

    // * Light Box
    .lightBox {
        width: 500px;
    }

    .lightBox-header {
        display: flex;
        justify-content: flex-end;

        .close-btn {
            width: 20px;
            height: 20px;
            display: block;
            border-radius: 100%;
            background-color: $color-black;
            @include material;
            line-height: 20px;
            color: $color-white;
        }
    }

    .lightBox-title {
        font-size: 22px;
        font-weight: 600;
        line-height: 1.6em;
        margin-bottom: 10px;
        text-align: center;
        color: $color-black;
    }

    .lightBox-body {
        font-size: 16px;

        p {
            text-align: center;
            margin-bottom: 1rem;
        }

        dl {
            display: flex;
            justify-content: center;
            width: 70%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 10px;
        }

        dt {
            width: 40%;
            font-weight: 600;
            padding: 0px 10px;
            color: $color-black;
            text-align: right;
        }

        dd {
            width: 60%;
            text-align: left;
        }
    }

    .lightBox-footer {
        text-align: center;
        margin-bottom: 1rem;
    }
</style>
