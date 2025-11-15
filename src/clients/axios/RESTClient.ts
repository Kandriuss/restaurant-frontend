import axios, { type AxiosInstance } from 'axios';
import { SECRETS } from '../../config';

export default class RESTClient {
    protected axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: SECRETS.API_URI,
            headers: {
                'Content-Type': 'application/json',
            },
            // Temporalmente deshabilitado para evitar problemas de CORS en desarrollo
            // withCredentials: true,
        });

        console.log('RESTClient initialized', SECRETS.API_URI);

        //Interceptors de respuesta para manejar errores de manera global
        this.axios.interceptors.response.use(
            (response) => response,
            (error) => {
                //solo logueamos el error, no redirigir automaticamente 
                if (error.response?.status === 401) {
                    console.error('Error 401 - No autenticado', error.response.data);
                }else if (error.response?.status === 500) {
                    console.error('Error 500 - Error interno del servidor', error.response.data);
                }else if(error.response?.status === 404) {
                    console.error('Error 404 - Recurso no encontrado', error.response.data);
                }else if (error.code === 'ERR_NETWORK' || error.code === 'ERR_FAILED') {
                    console.error('Error de red - No se pudo conectar al servidor', error.message);
                }else {
                    console.error('Error - Error desconocido', error.response?.data || error.message);
                }

                //Siempre rechazamos el error para que el componente lo maneja 
                return Promise.reject(error);

            }
        );
    }
}