import user from '../../service/user';
import userInstance from '../../service/user';

export default {
  createTrainee: (_, args) => {
    const { user } = args;
    return userInstance.createUser(user);
  },
  updateTrainee: (_, args) => {
    try {
      const {
        id, role, name, email
      } = args;
      return userInstance.updateUser(id, role, name, email);
    }
    catch (err) {
      return 
    }
    
  },
  deleteTrainee: (_, args) => {
    const { id } = args;
    return userInstance.deleteUser(id);

  }
    
};