import type { IPasswordPatch, IUser, IUserFull, IUserPath } from "../../interface";
import RESTClient from "../axios/RESTClient";

class UserClient extends RESTClient {
    async createUser(user: IUser): Promise<IUser> {
        try {
            const response = await this.axios.post('/user/register', user);
            return response.data;
        }catch (error) {
            console.error('Error al crear el usuario', error);
            throw error;
        }
    }

    async createAdmin(): Promise<IUser[]> {
        try {
            const response = await this.axios.get('/user/admin');
            return response.data;
        }catch (error) {
            console.error('Error al obtener los usuarios', error);
            throw error;
        }
    }

    async getUserById(id: string): Promise<IUserFull> {
        try {
            const response = await this.axios.get(`/user/${id}`);
            return response.data;
        }catch (error) {
            console.error('Error al obtener el usuario', error);
            throw error;
        }
    }
    async getAllUsers(): Promise<IUserFull[]> {
        try {
            const response = await this.axios.get('/user');
            return response.data;
        }catch (error) {
            console.error('Error al obtener los usuarios', error);
            throw error;
        }
    }

    async updateUser(id: string, user: IUserPath): Promise<IUserPath> {
        try {
            const response = await this.axios.put(`/user/${id}`, user);
            return response.data;
        }catch (error) {
            console.error('Error al actualizar el usuario', error);
            throw error;
        }
    }

    async updatePassword(id: string, password: IPasswordPatch): Promise<void> {
        try {
            const response = await this.axios.patch(`/user/password/${id}`, password);
            return response.data;
        }catch (error) {
            console.error('Error al actualizar la contraseña', error);
            throw error;
        }
    }

    async deleteUser(id: string): Promise<void> {
        try {
            await this.axios.delete(`/user/${id}`);
        }catch (error) {
            console.error('Error al eliminar el usuario', error);
            throw error;
        }
    }
}

export default new UserClient();