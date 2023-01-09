import Axios from "axios"

export const backUrl = Axios.create({
    baseURL:"http://127.0.0.1:8001/api"
})

export function GetCurrentUser(){
    return JSON.parse(localStorage.getItem('user'));
}

export function GetCurrentUserToken(){
    return JSON.parse(localStorage.getItem('userToken'));
}