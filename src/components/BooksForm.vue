<template>
    <div class="booksform">
        <div class="booksform-body">
            <div class="fieldset">
                <label for="">NAME</label>
                <input type="text" id="">
            </div>
            <div class="fieldset">
                <label for="">TEL</label>
                <input type="text" id="">
            </div>
            <div class="fieldset">
                <label for="">ROOMS</label>
                <input type="text" id="">
            </div>
            <div class="fieldset col-50">
                <label for="">CHECK IN</label>
                <Datepicker v-model="checkInDate"
                class="ctrl-checkin"
                :format="datepicker.format"
                :language="datepicker.languages['zh']"
                :disabled-dates="datepicker.disabledDates"></Datepicker>
            </div>
            <div class="fieldset col-50">
                <label for="">CHECK OUT</label>
                <Datepicker v-model="checkOutDate"
                class="ctrl-checkout"
                :format="datepicker.format"
                :language="datepicker.languages['zh']"
                :disabled-dates="datepicker.disabledDates"></Datepicker>
            </div>
        </div>
        <div class="booksform-footer">
            <a href="javascript:;" class="submit-btn">立即預訂</a>
        </div>
        
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import * as lang from "vuejs-datepicker/src/locale";
    export default {
        data() {
            return {
                checkInDate: '',
                checkOutDate: '',
                datepicker: {
                    format: 'yyyy-MM-dd',
                    disabledDates: {
                        to: new Date(),
                        dates: [
                            new Date(2019, 12, 16),
                            new Date(2019, 12, 17),
                            new Date(2019, 12, 18)
                        ],
                    },
                    languages: lang,
                },
            }
        },
        name: 'BooksForm',
        props: {
            
        },
        components: {
            Datepicker
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