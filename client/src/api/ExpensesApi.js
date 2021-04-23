import Api from "./Api";

const data = {
  async allExpenses(url) {
    return Api.get(url);
  },
  async storeExpenses(url, formData) {
    return Api.post(url, formData);
  },
  async destroyExpenses(url) {
    return Api.delete(url);
  },
};

export default data;
