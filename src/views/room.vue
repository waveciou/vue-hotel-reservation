<template>
    <div class="wrap">

        <div class="container">
            <div class="article">
                <h2 class="title">{{ room.name }}</h2>
                <p>{{ room.description }}</p>

                <div class="price-block">
                    <div class="price-item">平日每晚 {{ room.normalDayPrice }}</div>
                    <div class="price-item">假日每晚 {{ room.holidayPrice }}</div>
                </div>

                <ul class="descriptionShort">
                    <li>客房人數限制：{{ room.descriptionShort.GuestMax }}</li>
                    <li>房間大小：{{ room.descriptionShort.Footage }}</li>
                    <li>床型：</li>
                    <li>checkIn 時間：{{ room.checkInAndOut.checkInEarly }} - {{ room.checkInAndOut.checkInLate }}</li>
                    <li>衛浴數量：{{ room.descriptionShort['Private-Bath'] }}</li>
                    <li>checkOut 時間：{{ room.checkInAndOut.checkOut }}</li>
                </ul>

            </div>
            <div class="aside">
                
            </div>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                room: {
                    checkInAndOut: {
                        checkInEarly: '00:00',
                        checkInLate: '00:00',
                        checkOut: '00:00'
                    },
                    descriptionShort: {
                        GuestMax: '-',
                        Footage: '-',
                        'Private-Bath': '-' 
                    }
                }
            }
        },
        name: 'room',
        created() {
            // 取得房型詳細資料
            axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.$route.query.id}`, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer FEHYikSsoJvXjqurOCdQ3nfnpY6i579Hjh7K7ToTmJ11tB7tuiexfHE9uxp8'
                }
            }).then((response) => {
                this.room = response.data.room[0];
                console.log(this.room)
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

<style lang="scss" scoped>
    @import '../assets/scss/_utils.scss';

    .container {
        display: flex;
        justify-content: space-between;
        padding-top: 3rem;
        padding-bottom: 1rem;
    }

    .article {
        width: 730px;

        .title {
            text-transform: uppercase;
            margin-bottom: 1rem;
        }

        p {
            font-size: 20px;
            line-height: 1.6em;
        }
    }

    .aside {
        width: 350px;
        box-shadow: 0px 3px 6px rgba($color-black, 0.16);
    }

    // * 價格
    .price-block {
        display: flex;
        justify-content: flex-end;
    }

    .price-item {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.6em;
        color: $color-black;
        margin-top: 2rem;
        margin-left: 50px;
    }

    // * 房型資訊
    .descriptionShort {
        display: flex;
        flex-wrap: wrap;
        font-size: 18px;
        line-height: 1.6em;
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-top: 2px $color-gray-dark solid;
        border-bottom: 2px $color-gray-dark solid;

        > li {
            width: 50%;
            margin-bottom: 10px;

            &:nth-last-child(-n+2) {
                margin-bottom: 0px;
            }
        }
    }

</style>