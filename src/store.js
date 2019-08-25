import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        rooms: [],
        loading: true,
        lightbox: false,
        order: {
            name: '',
            tel: '',
            date: '',
            roomName: ''
        }
    },
    actions: {
        // 取得所有房型並將所有資料存入 state
        getRoomsAllData(context, item) {
            context.commit('PUSHROOMSITEM', item);
        },
        // 存取訂房成功資料
        getBooksOrder(context, item) {
            context.commit('PUSHBOOKSITEM', item);
        }
    },
    mutations: {
        PUSHROOMSITEM(state, item) {
            item.forEach(element => {
                state.rooms.push(element);
            });
        },
        PUSHBOOKSITEM(state, item) {
            state.order.name = item.booking[0].name;
            state.order.tel = item.booking[0].tel;
            state.order.date = item.booking[0].date;
            state.order.roomName = item.room[0].name;
        }
    },
})
