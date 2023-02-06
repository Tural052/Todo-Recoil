import { atom } from "recoil";

const todoListState = atom({
    key:'Todo',
    default:[]
})

export {todoListState} 