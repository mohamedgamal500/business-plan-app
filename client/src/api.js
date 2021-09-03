import axios from "axios";

const url = "https://6132538dab7b1e001799b460.mockapi.io/business/plans";

export const addPlan = (result) => axios.post(url, result);
