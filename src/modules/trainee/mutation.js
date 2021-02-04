import user from '../../service/user';
import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../libs/constant';
import { ApolloError, Error } from 'apollo-server-express';
import errorMessage from '../../libs/errMessage';

export default {
  createTrainee: async (parent, args, context) => {
    const {
      user: {
        name, email, role, password,
      },
    } = args;
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.createdTrainee({
      name, email, password, role,
    });
    console.log('Create Response--', response.data);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: response.data });
    return response.data;
  },
  updateTrainee: async (parent, args, context) => {
    try { 
      const {
        payload: {
          role, name, email, id,
        },
      } = args;
      const { dataSources: { traineeAPI } } = context;
      const updatedUser = {
        id, role, name, email,
      };
      const response = await traineeAPI.updatedTrainee({ ...updatedUser });
      console.log('Update responeeee--', response);
      // const updatedUser = userInstance.updateUser(id, role, name, email);
      pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: response.data });
      if (!updatedUser.id) {
        throw new Error('error'); 
      }
      return updatedUser;
    } 
    catch (err) {
      throw new ApolloError(errorMessage);
    }
  },
  deleteTrainee: async (parent, args, context) => {
    try{
      const { payload: { originalId } } = args;
      const { dataSources: { traineeAPI } } = context;
      const deletedId = await traineeAPI.deletedTrainee(originalId);
      console.log('delete--', deletedId);
      // const deletedId = userInstance.deleteUser(id);
      pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedId });
      if ( deletedId === undefined) {
        throw new Error('error');
      }
      return deletedId;  
    }
    catch (err) {
      throw new ApolloError(errorMessage);
    }
  } 
};