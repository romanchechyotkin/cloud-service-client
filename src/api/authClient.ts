import api from './axiosClient'

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
        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('refreshToken', response.data.refreshToken)
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}
