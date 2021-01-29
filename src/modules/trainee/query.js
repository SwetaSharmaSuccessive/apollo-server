import user from '../../service/user';
import { ApolloError, Error } from 'apollo-server-express';
import errorMessage from '../../libs/errMessage';

export default {
  getAllTrainees: () => user.getAllUsers(),
  getTrainee: (parent, args) => {
    try {
      const { id } = args;
      if (user.getUser(id) === undefined) {
        throw new Error('error');
      }
      return user.getUser(id);
    }
    catch (err) {
      throw new ApolloError(errorMessage);
    }
  }
};