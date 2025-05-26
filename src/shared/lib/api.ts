import axios from "axios";

// api anilibria
// see docs here: https://github.com/anilibria/docs/blob/master/api_v3.md#websocket
export const anilibria_api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_ANILIBRIA}/${process.env.NEXT_PUBLIC_VERSION_API}`,
});