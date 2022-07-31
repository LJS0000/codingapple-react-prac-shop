import {createSlice} from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name:'Lee', age:20},
    reducers : {
        changeName(state){
            // return {name:'Lee Jisu', age:20}
            state.name = '졸려'
        },
        changeAge(state, action){
            state.age += action.payload
        }
    }
});

export let {changeName, changeAge} = user.actions

export default user