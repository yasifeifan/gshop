/*直接更新state的多个方法的对象*/

/*引入对应的type*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
}from './mutation-type'

export default {
  [RECEIVE_ADDRESS](state,{address}){             //第一个参数为state，第二个参数传递的是相应的接收值的一个对象
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops=shops
  }
}
