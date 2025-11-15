import type { IMenu, IFullMenu, IMenuPatch } from "../../interface";
import RESTClient from "../axios/RESTClient";

class MenuClient extends RESTClient {
    async createMenu(menu: IMenu): Promise<IMenu> {
        try {
            const response = await this.axios.post('/menu', menu);
            return response.data;
        }catch (error) {
            console.error('Error al crear el menú', error);
            throw error;
        }
    }

    async getCurrentMenu(): Promise<IFullMenu> {
        try {
            const response = await this.axios.get('/menu/current');
            return response.data;
        }catch (error) {
            console.error('Error al obtener el menú actual', error);
            throw error;
        }
    }

    async updateCurrentMenu(menu: IMenuPatch): Promise<IMenu> {
        try {
            const response = await this.axios.patch('/menu/current', menu);
            return response.data;
        }catch (error) {
            console.error('Error al actualizar el menú actual', error);
            throw error;
        }
    }

    async getByDate(date: Date): Promise<IFullMenu> {
        try {
            const response = await this.axios.get(`/menu/day/${date}`);
            return response.data;
        }catch (error) {
            console.error('Error al obtener el menú por fecha', error);
            throw error;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await this.axios.delete(`/menu/${id}`);
            return true;
        }catch (error) {
            console.error('Error al eliminar el menú', error);
            throw error;
        }
    }
}

export default new MenuClient();