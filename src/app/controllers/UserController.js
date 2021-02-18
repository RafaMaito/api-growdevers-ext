import apiGrowdevers from '../services/apiGrowdevers';

class UserController {
  async index(request, response) {
    try {
      const authHeader = request.headers.authorization;
      // const options = {
      //   headers: {
      //     Authorization: authHeader,
      //   },
      // };
      // const { data } = await apiGrowdevers.get('/users', options);
      const { data } = await apiGrowdevers.get('/users', {
        headers: {
          Authorization: authHeader,
        },
      });

      return response.json(data);
    } catch (error) {
      return response
        .status(error.response.status || 400)
        .json({ Error: error.response.data.message });
    }
  }

  async store(request, response) {
    try {
      const { name, password, type, username } = request.body;

      const { data } = await apiGrowdevers.post('/users', {
        name,
        password,
        type,
        username,
      });
      return response.json(data);
    } catch (error) {
      return response
        .status(error.response.status || 400)
        .json({ Error: error.response.data.message });
    }
  }

  async show(request, response) {
    try {
      const authHeader = request.headers.authorization;
      const { uid } = request.params;
      const { data } = await apiGrowdevers.get(`/users/${uid}`, {
        headers: {
          Authorization: authHeader,
        },
      });
      return response.json(data);
    } catch (error) {
      return response
        .status(error.response.status || 400)
        .json({ Error: error.response.data.message });
    }
  }

  async update(request, response) {
    try {
      const authHeader = request.headers.authorization;
      const { uid } = request.params;
      const { name, password, type, username } = request.body;

      const { data } = await apiGrowdevers.put(`/users/${uid}`, {
        headers: {
          Authorization: authHeader,
        },
        body: {
          name,
          password,
          type,
          username,
        },
      });
      return response.json(data.name);
    } catch (error) {
      return response
        .status(error.response.status || 400)
        .json({ Error: error.response.data.message });
    }
  }

  // For delete a user, just work with a admin's token
  async delete(request, response) {
    try {
      const authHeader = request.headers.authorization;
      const { uid } = request.params;
      const { data } = await apiGrowdevers.delete(`/users/${uid}`, {
        headers: {
          Authorization: authHeader,
        },
      });
      return response.json(data);
    } catch (error) {
      return response
        .status(error.response.status || 400)
        .json({ Error: error.response.data.message });
    }
  }
}

export default new UserController();
