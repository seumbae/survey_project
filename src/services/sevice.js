import axios from "axios";

/* GET Questions */
export const getPersonalQuestions = async (formType) => await axios.get(`/api/v1/Form/${formType}`)

/* Send Info or answer */
export const postPersonalInfo = async (data) => await axios.post("/api/v1/Form/user/add", data)
export const postAnswer = async (data) => await axios.post("/api/v1/Form/answer/addList", data)