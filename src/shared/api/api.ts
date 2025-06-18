import axios from "axios";
import {refresh} from "@/shared/api/refresh";

// api anilibria
// see docs here: https://github.com/anilibria/docs/blob/master/api_v3.md#websocket
export const $anilibria_api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_ANILIBRIA}/${process.env.NEXT_PUBLIC_VERSION_API}`,
});

export const $sekaianime_api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_SEKAIANIME,
    withCredentials: true,
});

$sekaianime_api.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$sekaianime_api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await refresh();
                localStorage.setItem('accessToken', response.data.accessToken);
                return $sekaianime_api.request(originalRequest);
            } catch (e) {
                console.log('No auth', e.message);
            }
        }
        throw error;
    },
);