export default {
    CODE_SUCCESS: 200,
    PATH_PRODUCT: '/product',
    PATH_CATEGORY: '/category'
}

export function Capitalize(str) {
    return str.replaceAll(/[^\w\s]/gi, '').charAt(0).toUpperCase() + str.slice(2);
}
