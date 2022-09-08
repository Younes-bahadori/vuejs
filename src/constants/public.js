import cookie from "../services/cookie/index.js";

export const BASE_URL = "http://192.168.100.240:8000";
export const AUTH = JSON.parse(cookie.Get("userDetails"));
