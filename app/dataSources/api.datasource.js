import { RESTDataSource } from "@apollo/datasource-rest";

class API extends RESTDataSource {
  baseURL = "";

  async base() {
    const data = await this.get("");
    return data;
  }
}

export default API;
