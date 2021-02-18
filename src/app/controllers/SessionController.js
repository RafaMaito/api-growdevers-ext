import apiGrowdevers from '../services/apiGrowdevers';

class SessionController {
  async store(request, response) {
    try {
      const { username, password } = request.body;
      const { data } = await apiGrowdevers.post('/login', {
        username,
        password,
      });

      return response.json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }
}

export default new SessionController();
