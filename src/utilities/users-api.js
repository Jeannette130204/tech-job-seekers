import { getToken } from './users-service'

const BASE_URL = '/api/users'

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'post', userData)
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}
export function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`)
}

async function sendRequest(url, method = 'GET', payload = null){
    const options = { method }
    if(payload){
        options.headers = { 'Access-Control-Allow-Origin': '*' }
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(payload)
    }
    const token = getToken()
    if (token) {
        options.headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true' }
        // options.headers = {'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS', 'Access-Control-Allow-Origin': '*' , 'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization' }
        options.headers = options.headers || {}
        options.headers.Autorization = `Bearer ${token}`
    }
    const res = await fetch(url, options)
    if (res.ok) return res.json()
    throw new Error('Bad Request')

}
