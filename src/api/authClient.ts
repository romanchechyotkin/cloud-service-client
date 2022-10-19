import api from './axiosClient'
import {setAuth, setAuthEmail} from "../store/auth";

export const registration = async (email: string, password: string) => {
        try {
            const response = await api.post('/auth/registration', {email, password})
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
}

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post('/auth/login', {email, password})
        if (response.status === 200) {
            setAuth(true)
            setAuthEmail(response.data.user.email)
            localStorage.setItem('auth', JSON.stringify(response.data))
        }
        console.log(response.data)
    } catch (e) {
            console.log(e)
    }

}
