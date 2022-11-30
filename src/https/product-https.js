import {$host} from "./index";

export const _getProducts = async () => {
    const {data} = await $host.get('/product/')
    return data
}

export const _getProductById = async (id) => {
    const {data} = await $host('/product/'+id);
    return data;
}
