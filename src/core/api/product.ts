import END_POINTS from "../constants/endpoinsts";
import instance from "../constants/request";
import { handleRequestError } from "../utils/handle-req-err";

export const shopProducts = async () => {
  try {
    const res = await instance.get(`${END_POINTS.products}`);
    return res.data;
  } catch (err) {
    return handleRequestError(err);
  }
};

