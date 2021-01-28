import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../libs/constant';
import { ApolloError, Error } from 'apollo-server-express';
import errorMessage from '../../libs/errMessage';

export default {
  createTrainee: (parent, args) => {
    const { user } = args;
    const addedUser = userInstance.createUser(user);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addedUser });
    return addedUser;
  },
  updateTrainee: (parent, args) => {
   try { 
    const {
      id, role, name, email
    } = args;
    const updatedUser = userInstance.updateUser(id, role, name, email);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedUser });
    if (!updatedUser.id) {
      throw new Error('error');

    }
    return updatedUser;
    } 
    catch (err) {
      throw new ApolloError(errorMessage);
    }
  },
  deleteTrainee: (parent, args) => {
    try{
      const { id } = args;
      const deletedId = userInstance.deleteUser(id);
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