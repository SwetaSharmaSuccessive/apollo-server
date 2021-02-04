import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configuration';

class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/api/trainee`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  getAllTrainee({ skip, limit }) {
    return this.get('/get', { skip, limit });
  }

  createdTrainee(data) {
    return this.post('/', data);
  }

  updatedTrainee(data) {
    return this.put('/', data);
  }

  deletedTrainee(originalId) {
    return this.delete(`/delete?originalId=${originalId}`);
  }
}

export default TraineeAPI;