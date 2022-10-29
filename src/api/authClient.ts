import api from './axiosClient'

export const registration = async (email: string, password: string) => {
        try {
            const response = await api.post('/auth/registration', {email, password})
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
}
