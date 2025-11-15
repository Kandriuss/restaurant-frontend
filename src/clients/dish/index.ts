import type { IDish, IDishPatch } from "../../interface";
import RESTClient from "../axios/RESTClient";

class DishClient extends RESTClient {
    async createDish(dish: IDish): Promise<IDish> {
        try {
            const response = await this.axios.post('/dishes', dish);
            return response.data;
        }catch (error) {
            console.error('Error al crear el plato', error);
            throw error;
        }
    }

    async getAllDishes(): Promise<IDish[]> {
        try {
            const response = await this.axios.get('/dishes');
            return response.data;
        }catch (error) {
            console.error('Error al obtener los platos', error);
            throw error;
        }
    }

    async getDishById(id: string): Promise<IDish> {
        try {
            const response = await this.axios.get(`/dishes/${id}`);
            return response.data;
        }catch (error) {
            console.error('Error al obtener el plato', error);
            throw error;
        }
    }

    async updateDish(id: string, dish: IDishPatch): Promise<IDish> {
        try {
            const response = await this.axios.patch(`/dishes/${id}`, dish);
            return response.data;
        }catch (error) {
            console.error('Error al actualizar el plato', error);
            throw error;
        }
    }

    async deleteDish(id: string): Promise<void> {
        try {
            await this.axios.delete(`/dishes/${id}`);
        }catch (error) {
            console.error('Error al eliminar el plato', error);
            throw error;
        }
    }
}

export default new DishClient();