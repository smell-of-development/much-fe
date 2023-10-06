import apiClient from "@/service/config";

class ApiService {
  static instance;
  axios;

  constructor() {
    this.axios = apiClient;
  }

  static get shared() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ApiService();
    return this.instance;
  }

  install(app) {
    this.axios = app.config.globalProperties.$axios;
  }

  async getData(path) {
    const result = await this.get(path);
    if (result.code === 403) {
      alert(result.message);
      window.history.back();
    }

    return result.data || {};
  }

  async getFile(path, isNeedAuth = true) {
    const config = { isNeedAuth, responseType: "arraybuffer" };

    const result = await this.get(path, config);

    return result.data || {};
  }

  async postFile(path, file) {
    const config = {
      contentType: "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("file", file);

    const result = await this.postFile(path, formData, config);

    return result.data || {};
  }

  async postData(path, obj) {
    const result = await this.postData(path, obj || {});
    return result.data || {};
  }

  async postFiles(path, files) {
    const formData = new FormData();

    for (let i = 0; i < files.length; i += 1) {
      formData.append("files", files[i]);
    }

    const config = {
      contentType: "multipart/form-data",
    };
    const result = await this.post(path, formData, config);

    return result || {};
  }

  async putData(path, obj) {
    const result = await this.put(path, obj);

    return result.data || {};
  }

  async deleteData(path, isNeedAuth = true) {
    const config = { isNeedAuth };

    const result = await this.delete(path, config);
    return result.data || {};
  }
}

export default ApiService;
