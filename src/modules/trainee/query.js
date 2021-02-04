import user from '../../service/user';
import { ApolloError, Error } from 'apollo-server-express';
import errorMessage from '../../libs/errMessage';

export default {
  getAllTrainees: async (parent, args, context) => {
    console.log('inside getAllTrainees');
    const { dataSources: { traineeAPI } } = context;
    const { payload: { skip, limit } } = args;
    const response = await traineeAPI.getAllTrainee({ skip, limit });
    console.log('all data : ', response);
    return response;
  },
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