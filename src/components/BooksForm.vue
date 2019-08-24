<template>
    <div class="booksform">
        <div class="booksform-body">
            <div class="fieldset">
                <label for="">NAME</label>
                <input type="text" id="" class="ctrl-input">
            </div>
            <div class="fieldset">
                <label for="">TEL</label>
                <input type="text" id="" class="ctrl-input">
            </div>
            <div class="fieldset">
                <label for="">ROOMS</label>
                <input type="text" id="" class="ctrl-input">
            </div>
            <div class="fieldset col-50">
                <label for="">CHECK IN</label>
                <DatePicker v-model="checkInDate" placeholder="請選擇開始日期"
                :option="{
                    start: datepicker.dateStart,
                    disabled: datepicker.disabledDate
                }"
                :readonly="true"></DatePicker>
            </div>
            <div class="fieldset col-50">
                <label for="">CHECK OUT</label>
                <DatePicker v-model="checkOutDate" placeholder="請選擇結束日期"
                :option="{
                    start: datepicker.checkout.dateStart,
                    disabled: datepicker.disabledDate
                }"
                :readonly="true"
                :disabled="datepicker.checkout.disabled"></DatePicker>
            </div>
        </div>
        <div class="booksform-footer">
            <a href="javascript:;" class="submit-btn">立即預訂</a>
        </div>
    </div>
</template>

<script>
    import manba from 'manba';
    export default {
        data() {
            return {
                checkInDate: null,
                checkOutDate: null,
                disabledDate: [],
                datepicker: {
                    dateStart: manba().add(0, manba.DAY),
                    disabled: (value) => {
                        return !this.disabledDate.indexOf(value.format())
                    },
                    checkout: {
                        dateStart: manba().add(0, manba.DAY),
                        disabled: true
                    }
                },
            }
        },
        name: 'BooksForm',
        props: {
            
        },
        components: {
            
        },
        created() {

        },
        mounted() {

        },
        methods: {
            
        },
        computed: {
            
        },
        watch: {
            checkInDate: function(value) {
                if (!value == '') {
                    this.datepicker.checkout.disabled = false;
                    this.datepicker.checkout.dateStart = manba(value).add(1, manba.DAY);
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