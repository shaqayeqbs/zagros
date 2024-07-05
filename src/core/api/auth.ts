"use client";

import instance from "../constants/request";
import { handleRequestError } from "../utils/handle-req-err.js";
import { LoginFormValues } from "@/@types/auth";
import END_POINTS from "../constants/endpoinsts";

export const login = async ({ username, password }: LoginFormValues) => {
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




