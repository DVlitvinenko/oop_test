import { Repository } from "../Interfaces";
import User from "./User";

class UserRepo implements Repository<User> {
  create(obj: User): User {
    //тут данные из бд или еще что-то
    return {} as User;
  }
  get(): User {
    return {} as User;
  }
  delete(obj: User): User {
    return {} as User;
  }
  update(obj: User): User {
    return {} as User;
  }
}

export default UserRepo;
