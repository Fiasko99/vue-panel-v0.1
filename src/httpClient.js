import axios from "axios";

// Объявялем URI для всех запросов из приложения
const config = {
  baseURL: process.env.VUE_APP_API_URI
}

// Класс для инструмента запросов
class HttpClient {
  constructor(queryTool) {
    this.http = queryTool.create(config)
  }
}

export default new HttpClient(axios)