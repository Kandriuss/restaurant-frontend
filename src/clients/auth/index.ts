import RESTClient from '../axios/RESTClient';
import type { ILogin } from '../../interface/auth';

class AuthClient extends RESTClient {
    async login(email: string, password: string): Promise<ILogin> {
        try {
            const { data } = await this.axios.post('/auth/login', { email, password });
            return data;
        }catch (error) {
            console.error('Error al iniciar sesión', error);
            throw error;
        }
    }
}

export default new AuthClient();