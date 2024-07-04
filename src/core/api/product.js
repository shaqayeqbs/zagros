import END_POINTS from "../constants/endpoinsts.js";
import instance from "../constants/request.js";
import { handleRequestError } from "../utils/handle-req-err.js";

export const shopProducts = async () => {
  try {
    const res = await instance.get(`${END_POINTS.products}`);
    return res.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getProductByIdAPi = async (id) => {
  try {
    const res = await instance.get(`${SHOP_END_POINTS.shop_products}/${id}`);

    return res?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};
