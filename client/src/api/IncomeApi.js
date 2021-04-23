import Api from "./Api";

const data = {
  async allIncome(url) {
    return Api.get(url);
  },
  async storeIncome(url, formData) {
    return Api.post(url, formData);
  },
  async destroyIncome(url) {
    return Api.delete(url);
  },
};

export default data;
