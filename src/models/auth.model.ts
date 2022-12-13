import axios from 'axios'
import CustomError from '../helper/error/error.js'
import IError from '../interfaces/IError.js'

interface RplAuthRegister {
    Error: IError
}

class AuthService {
    // prettier-ignore
    public async register(username: string, password: string, confirmPassword: string): Promise<RplAuthRegister> {
        console.log(username, password, confirmPassword)
        if (password != confirmPassword) {
            return { Error: new CustomError(400, 'passwords is not equal') } //{Error: {Code: 400, Message: 'passwords is not equal'}}
        }
        return await this.registerRequest(username, password)
    }

    // prettier-ignore
    private registerRequest = async (username: string, password: string): Promise<RplAuthRegister> => {
        try {   

            const res = await axios<RplAuthRegister>({
                method: 'post',
                baseURL: 'http://localhost:9000',
                url: '/auth/registration',
                data: { name: username, password: password },
                headers: { 'Content-Type': 'application/json' },
                timeout: 5000,
            });

            console.debug('service.success: ', res.data);

            return { Error: res.data.Error }

        } catch (err) {

            console.debug('error:', err);
            return { Error: new CustomError(500, 'internal system error') }

        }
    }
}

export default AuthService
