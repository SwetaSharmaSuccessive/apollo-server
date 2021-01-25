class User {
    constructor() {
      this.users = new Map();
      this.id = 0;
    }
  
    getAllUsers() {
      return this.users.values();
    }
  
    createUser(user) {
      this.id += 1;
      this.users.set(this.id, { ...user, id: this.id });
      return this.users.get(this.id);
    }
  
    updateUser(id, role, name, email) {
      if (this.getUser(id)){
        const user = this.users.get(Number(id));
        const  message = 'Successfully Updated';

        this.users.set(Number(id), {
          ...user, role, name, email, message
        });
        return this.users.get(Number(id));
      }
      else{
        const  message = 'Failed Updated';
        const id = -1
        const data = { id, message };

        return data;
      }
    }
    deleteUser(id) {
      if (this.getUser(id)){
        this.users.delete(Number(id));
        const message = ' Successfully Deleted';
        const data = { id, message };
        return data;
      }
      else{
        const message = 'Id Not Found!';
        const data = { id, message };
        return data;
      }
    }
  
    getUser(id) {
      return this.users.get(Number(id));
    }
  }
  export default new User();