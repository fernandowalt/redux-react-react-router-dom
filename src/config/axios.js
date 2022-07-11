/** @format */

import axios from "axios";
const clientAxios = axios.create({ baseURL:"http://localhost:3004" });

export default clientAxios;
