<template>
    <div class="wrap">

        <transition name="fade" mode="out-in">
            <Album :imageUrl="this.room.imageUrl" />
        </transition>

        <div class="container">
            <div class="article">
                <h2 class="title">{{ this.room.name }}</h2>
                <p>{{ this.room.description }}</p>

                <div class="price-block">
                    <div class="price-item">平日每晚 $ {{ toCurrency(this.room.normalDayPrice) }}</div>
                    <div class="price-item">假日每晚 $ {{ toCurrency(this.room.holidayPrice) }}</div>
                </div>

                <ul class="descriptionShort">
                    <li>客房人數限制：{{ this.getGuestNumber }}</li>
                    <li>房間大小：{{ this.room.descriptionShort.Footage }}</li>
                    <li>床型：{{ this.getBedClassName }}</li>
                    <li>Check In 時間：{{ this.room.checkInAndOut.checkInEarly }} - {{ this.room.checkInAndOut.checkInLate }}</li>
                    <li>衛浴數量：{{ this.room.descriptionShort['Private-Bath'] }}</li>
                    <li>Check Out 時間：{{ this.room.checkInAndOut.checkOut }}</li>
                </ul>

                <ul class="amenitiesList">
                    <li v-for="(item, index) in this.room.amenitiesList" :key="index">
                        <div class="amenities-item" :class="{'current': item[1]}">{{ item[0] }}</div>
                    </li>
                </ul>

            </div>
            <div class="aside">
                <h2 class="aside-title">BOOK NOW</h2>
                <BooksForm :room="room" :booking="booking" />
            </div>
        </div>
        
    </div>
</template>

<script>
    import Album from '@/components/Album.vue';
    import BooksForm from '@/components/BooksForm.vue';
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
                        'Private-Bath': '-',
                        Bed: []
                    },
                    amenitiesList: []
                },
                booking: []
            }
        },
        name: 'room',
        components: {
            Album,
            BooksForm
        },
        created() {
            // 取得房型詳細資料
            axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.$route.query.id}`, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer FEHYikSsoJvXjqurOCdQ3nfnpY6i579Hjh7K7ToTmJ11tB7tuiexfHE9uxp8'
                }
            }).then(response => {
                this.room = response.data.room[0];
                response.data.booking.forEach(item => {
                    this.booking.push(item.date);
                });
                this.setAenitiesList();
                this.$store.state.loading = false;
                document.title = `Vue Hotel Reservation - ${this.room.name}`;
            }).catch(error => {
                this.$store.state.loading = false;

                this.$Message({
                    type: 'error',
                    text: '房型資料載入失敗'
                });
                console.log(error);

                this.$router.push('home');
            });
        },
        methods: {
            setAenitiesList() {
                let obj = this.room.amenities;
                this.room.amenitiesList = Object.keys(obj).map(item => {
                    let name = '';
                    switch(item) {
                        case 'Wi-Fi':
                            name = 'Wifi';
                            break;
                        case 'Room-Service':
                            name = '客房服務';
                            break;
                        case 'Refrigerator':
                            name = '冰箱';
                            break;
                        case 'Smoke-Free':
                            name = '可吸菸';
                            break;
                        case 'Mini-Bar':
                            name = 'Mini Bar';
                            break;
                        case 'Television':
                            name = '電視';
                            break;
                        case 'Sofa':
                            name = '沙發';
                            break;
                        case 'Child-Friendly':
                            name = '適合兒童';
                            break;
                        case 'Breakfast':
                            name = '早餐';
                            break;
                        case 'Air-Conditioner':
                            name = '空調';
                            break;
                        case 'Great-View':
                            name = '景觀';
                            break;
                        case 'Pet-Friendly':
                            name = '寵物攜帶';
                            break;
                        default:
                        name = item;
                    }
                    return [name, obj[item]]
                });
            },
            toCurrency(num) {
                // 轉換成貨幣格式
                if (typeof(num) === 'number') {
                    num = num.toString();
                }
                let reg = /(-?\d+)(\d{3})/;
                while(reg.test(num)) {
                    num = num.replace(reg, '$1,$2');
                }
                return num;
            },
        },
        computed: {
            getBedClassName() {
                // 篩選房型
                let text = '';
                let bed = this.room.descriptionShort.Bed;
                let newBed = bed.sort((a, b) => {return a - b});
                let lastItem = '';

                newBed.forEach(item => {
                    if (item !== lastItem) {
                        let array = newBed.filter(bed => {return bed === item});
                        let name = '';

                        switch(item) {
                            case 'Single':
                                name = '單人床';
                                break;
                            case 'Small Double':
                                name = '小型雙人床';
                                break;
                            case 'Double':
                                name = '雙人床';
                                break;
                            case 'Queen':
                                name = '豪華雙人床';
                                break;
                            default:
                                name = item;
                        }

                        text += `${name} x ${array.length}`;
                        lastItem = item;
                    }
                });

                return text
            },
            getGuestNumber() {
                // 篩選客房人數限制
                if(this.room.descriptionShort.GuestMin === this.room.descriptionShort.GuestMax) {
                    return `${this.room.descriptionShort.GuestMax} 人`;
                } else {
                    return `${this.room.descriptionShort.GuestMin} - ${this.room.descriptionShort.GuestMax} 人`;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/_utils.scss';

    .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-top: 3rem;
        padding-bottom: 3rem;
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
        width: 400px;
        padding: 30px;
        box-shadow: 0px 3px 6px rgba($color-black, 0.16);
    }

    .aside-title {
        margin-bottom: 1rem;
        font-size: 28px;
        font-weight: 600;
        line-height: 1.4em;
        text-align: center;
        color: $color-black;
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

    // * 設施
    .amenitiesList {
        display: flex;
        flex-wrap: wrap;
        font-size: 18px;
        line-height: 1.6em;
        margin-bottom: 2rem;

        > li {
            width: 25%;
            margin-bottom: 10px;
        }
    }

    .amenities-item {
        color: $color-gray;

        &::before {
            content: '';
            width: 17px;
            height: 17px;
            margin-right: 10px;
            display: inline-block;
            vertical-align: middle;
            border: {
                width: 1px;
                color: $color-gray;
                style: solid;
            }
            box-sizing: border-box;
        }

        &.current {
            color: $color-gray-black;
            &::before {
                border-color: $color-gray-black;
                background-color: $color-gray-black;
            }
        }
    }

</style>