import { User, UserModel } from "../models/user.model";

export class UserService {
  async getUserTesting() {
    return "user service route working";
  }

  async createUser(user: User): Promise<User> {
    const createdUser = await UserModel.create(user);
    return createdUser.toObject();
  }
}
