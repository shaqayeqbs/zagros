"use client";

import instance from "../constants/request-client.js";
import { toast } from "react-toastify";
import axios from "axios";
import { handleRequestError } from "../utils/handle-req-err.js";
import { AUTH_END_POINTS } from "../constants/endpoinsts.js";

export const login = async ({ phone }) => {
  try {
    const res = await instance.post(END_POINTS.login, { username, password });
    console.log(res);
    if (res?.status === 200) {
      localStorage.setItem("token", res?.data?.data?.access);
    }

    return res?.status == 200;
  } catch (err) {
    console.log(err, "eeeeeee");
    return handleRequestError(err);
  }
};
export const sign_up = async (name, lastname, email) => {
  console.log(AUTH_END_POINTS.sign_up);
  console.log(name, lastname, email);
  try {
    const res = await instance.post(AUTH_END_POINTS.sign_up, {
      name: name,
      lastname: lastname,
      email: email,
    });
    console.log(res);
    return res?.data;
  } catch (err) {
    console.log(AUTH_END_POINTS.sign_up);
    console.log(err, "eeeeeee");
    return handleRequestError(err);
  }
};

export const updateUser = async (user) => {
  try {
    const res = await instance.put(AUTH_END_POINTS.sign_up, {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
    });
    console.log(res);
    return res?.data;
  } catch (err) {
    console.log(err, "eeeeeee");
    return handleRequestError(err);
  }
};
export const checkPhone = async (phone) => {
  console.log(phone, "ww");
  try {
    const res = await instance.post(AUTH_END_POINTS.verify, {
      phone: "123456789",
    });
    return res;
  } catch (err) {
    console.log(err, "eeeeeee");
    return handleRequestError(err);
  }
};
export const verify = async (phone, code) => {
  try {
    const res = await axios.post("http://localhost:4900/api/users/verify", {
      phone,
      code,
    });
    // const res = await instance.post(AUTH_END_POINTS.verify, { phone, code });
    console.log(res);

    if (res?.status === 200) {
      console.log(res, "tooooooooooooooo");
      localStorage.setItem("token", res?.data.token);
      // useCartStore.getState().mergeItems();
      localStorage.setItem("username", res?.data.name);
    }

    return res?.status == 200;
  } catch (err) {
    console.log(err, "eeeeeee");
    return handleRequestError(err);
  }
};
