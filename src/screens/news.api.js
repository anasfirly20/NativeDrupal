import api from '../api';

export default class newsApi {
  // Login
  static async SignIn(body) {
    return await api.post('/auth/sign_in', body);
  }

  // Get all news
  static async getAllNews(headers) {
    return await api.get('/news', {}, {headers});
  }
}
