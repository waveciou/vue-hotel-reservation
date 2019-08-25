<template>
    <div class="booksform">
        <div class="booksform-body">
            <div class="fieldset">
                <label for="booksName">NAME</label>
                <input type="text" id="booksName" class="ctrl-input" v-model.trim="form.name">
            </div>
            <div class="fieldset">
                <label for="booksTel">TEL</label>
                <input type="text" id="booksTel" class="ctrl-input" v-model.trim="form.tel">
            </div>
            <div class="fieldset">
                <label for="booksRooms">ROOMS</label>
                <input type="text" id="booksRooms" class="ctrl-input" :placeholder="room.name" disabled>
            </div>
            <div class="fieldset col-50">
                <label for="">CHECK IN</label>
                <DatePicker v-model="checkInDate" placeholder="請選擇開始日期"
                :option="{
                    start: datepicker.dateStart,
                    disabled: datepicker.disabled
                }"
                :readonly="true"></DatePicker>
            </div>
            <div class="fieldset col-50">
                <label for="">CHECK OUT</label>
                <DatePicker v-model="checkOutDate" placeholder="請選擇結束日期"
                :option="{
                    start: datepicker.checkoutStart,
                    disabled: datepicker.disabled
                }"
                :readonly="true"
                :disabled="datepicker.checkoutDisabled"></DatePicker>
            </div>
            <!-- <div class="fieldset">
                <DatePicker v-model="checkInDate" :inline="true"
                :option="{
                    start: datepicker.dateStart,
                    disabled: datepicker.disabledDate
                }"></DatePicker>
            </div> -->
        </div>
        <div class="booksform-footer">
            <a href="javascript:;" class="btn" @click="checkBooksform()">立即預訂</a>
        </div>
    </div>
</template>

<script>
    import manba from 'manba';
    import axios from 'axios';
    export default {
        data() {
            return {
                checkInDate: '',
                checkOutDate: '',
                disabledDate: [],
                datepicker: {
                    dateStart: manba().add(0, manba.DAY),
                    disabled: (value) => {
                        return this.disabledDate.indexOf(value.format()) >= 0;
                    },
                    checkoutStart: manba().add(0, manba.DAY),
                    checkoutDisabled: true
                },
                form: {
                    name: '',
                    tel: ''
                }
            }
        },
        name: 'BooksForm',
        props: {
            room: Object,
            booking: Array
        },
        components: {
            
        },
        created() {

        },
        mounted() {

        },
        methods: {
            toDateObj(datestr) {
                // 字串轉換成日期物件
                let temp = datestr.split('-');
                let date = new Date(temp[0], temp[1] - 1, temp[2]);
                return date;
            },
            getBookDates(start, end) {
                // 產生日期區間陣列
                let date_all = [], i = 0;
                let startTime = this.toDateObj(start);
                let endTime = this.toDateObj(end);
                while (endTime.getTime() - startTime.getTime() >= 0) {
                    let year = startTime.getFullYear();
                    let month = (startTime.getMonth() + 1).toString().length == 1 ? '0' + (startTime.getMonth() + 1).toString() : (startTime.getMonth() + 1).toString();
                    let day = startTime.getDate().toString().length == 1 ? '0' + startTime.getDate() : startTime.getDate();
                    date_all[i] = year + '-' + month + '-' + day;
                    startTime.setDate(startTime.getDate() + 1);
                    i += 1;
                }
                return date_all
            },
            valBooksName(value) {
                // 驗證姓名
                let reg = /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/;
                if (!reg.test(value) || value == false) {
                    return false
                } else {
                    return true
                }
            },
            valTelNumber(value) {
                // 驗證電話號碼
                let reg = /^\d{10,11}$/;
                if (!reg.test(value) || value == false) {
                    return false
                } else {
                    return true
                }
            },
            checkBooksform() {
                let errorText = '請填妥正確的訂單格式';
                let valid = {
                    name: false,
                    tel: false,
                    date: false
                }

                let obj = {
                    name: '',
                    tel: '',
                    date: []
                }

                valid.name = this.valBooksName(this.form.name);
                valid.tel = this.valTelNumber(this.form.tel);

                if (this.checkInDate === '' && this.checkOutDate === '') {
                    valid.date = false;
                } else {
                    obj.date = this.getBookDates(this.checkInDate, this.checkOutDate);

                    if (obj.date.length < 2) {
                        valid.date = false;
                        errorText = '訂房天數至少一晚以上';
                    } else {
                        errorText = '您所選擇的日期已經被預訂';
                        valid.date = obj.date.every(item => {
                            return this.disabledDate.indexOf(item) < 0;
                        });
                    }
                }

                if (valid.name === false || valid.tel === false || valid.date === false) {
                    this.$Message({
                        type: 'error',
                        text: errorText
                    });
                } else {
                    obj.name = this.form.name;
                    obj.tel = this.form.tel;
                    this.sendBooksOrder(obj);
                }
            },
            sendBooksOrder(obj) {
                // 送出訂單
                axios({
                    method: 'POST',
                    url: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.room.id}`,
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer FEHYikSsoJvXjqurOCdQ3nfnpY6i579Hjh7K7ToTmJ11tB7tuiexfHE9uxp8'
                    },
                    data: obj
                }).then(response => {
                    this.$store.dispatch('getBooksOrder', response.data);
                    this.$store.state.lightbox = true;

                    this.checkInDate = '';
                    this.checkOutDate = '';
                    this.form.name = '';
                    this.form.tel = '';

                }).catch(error => {
                    this.$Message({
                        type: 'error',
                        text: '訂房失敗，此段時間無法預定'
                    });
                    console.log(error);
                });
            },
        },
        computed: {
            
        },
        watch: {
            checkInDate: function(value) {
                if (!value == '') {
                    this.datepicker.checkoutDisabled = false;
                    this.datepicker.checkoutStart = manba(value).add(1, manba.DAY);
                } else {
                    this.datepicker.checkoutDisabled = true;
                    this.datepicker.checkoutStart = manba().add(0, manba.DAY);
                }
            },
            booking: {
                deep: true,
                handler(newItem, oldItem) {
                    this.disabledDate = newItem;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/_utils.scss';

    .booksform-body {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
    }

    .booksform-footer {
        text-align: right;
    }

</style>