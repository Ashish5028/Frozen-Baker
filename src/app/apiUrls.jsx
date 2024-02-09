const serverHost = "http://192.168.1.3:3001";

// get Apis
export const loginUserApi = `${serverHost}/api/user/login`;
export const getUserApi = `${serverHost}/api/get/users`;
export const getProductApi = `${serverHost}/api/get/image`;
export const getPastryApi = `${serverHost}/api/get/pastry`;
export const getChocolateApi = `${serverHost}/api/get/chocolate`;
export const getIcecreamApi = `${serverHost}/api/get/icecream`;
// Upload Apis

export const createUserApi = `${serverHost}/api/user/register`;
export const createProductApi = `${serverHost}/api/upload/image`;
export const createDelivaryDetails = `${serverHost}/api/upload/delivary/information`;
export const uploadPastryApi = `${serverHost}/api/upload/pastry`;
export const uploadIcecreamApi = `${serverHost}/api/upload/icecream`;
export const uploadChocolateApi = `${serverHost}/api/upload/chocolate`;
