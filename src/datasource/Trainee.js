import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configuration';

class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/api/`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  getAllTrainee({ skip, limit }) {
    return this.get('trainee', { skip, limit });
  }

  createdTrainee(data) {
    return this.post('trainee', data);
  }

  updatedTrainee(data) {
    return this.put('trainee', data);
  }

  deletedTrainee(id) {
    return this.delete(`trainee/${id}`);
  }
}

export default TraineeAPI;