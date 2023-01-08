import axios from 'axios';

class JobTracker {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/examples
  createOne = async (requestBody) => {
    return this.api.post('/job', requestBody);
  }

  // GET /api/examples
  getAll = async () => {
    return this.api.get('/job');
  }

  // GET /api/examples/:id
  getOne = async (id) => {
    return this.api.get(`/job/${id}`);
  }

  // PUT /api/examples/:id
  updateOne = async (id, requestBody) => {
    return this.api.put(`/job/${id}`, requestBody);
  }

  // DELETE /api/examples/:id
  deleteProject = async (id) => {
    return this.api.delete(`/job/${id}`);
  } 


}

// Create one instance of the service
const jobTracker = new JobTracker();

export default jobTracker;