import axios from 'axios'
import CError from '../helper/error/error.js'

interface ReplyAuthRegister {
    Error: CError
}

class AuthService {
    // prettier-ignore
    public async register(username: string, password: string, confirmPassword: string): Promise<ReplyAuthRegister> {
        console.log(username, password, confirmPassword)
        if (password != confirmPassword) {
            return { Error: new CError(400, 'passwords is not equal') } //{Error: {Code: 400, Message: 'passwords is not equal'}}
        }
        return await this.registerRequest(username, password)
    }

    // prettier-ignore
    private registerRequest = async (username: string, password: string): Promise<ReplyAuthRegister> => {
        try {   

            const res = await axios<ReplyAuthRegister>({
                method: 'post',
                baseURL: 'http://localhost:9000',
                url: '/auth/registration',
                data: { name: username, password: password },
                headers: { 'Content-Type': 'application/json' },
                timeout: 5000,
            });

            console.debug('service.success: ', res.data);

            return res.data

        } catch (err) {

            console.debug('error:', err);
            return { Error: new CError(500, 'internal system error') }

        }
    }
}

export default AuthService
