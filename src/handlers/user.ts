import * as grpc from "grpc";

import * as IUser from "../proto/user/generated/user_pb";
import { UserService, IUserServer } from "../proto/user/generated/user_grpc_pb";
import { UserRepository } from "../repositories/user";

class UserHandler implements IUserServer {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  create = (
    call: grpc.ServerUnaryCall<IUser.UserCreateRequest>,
    callback: grpc.sendUnaryData<IUser.UserResponse>
  ): void => {
    const reply: IUser.UserResponse = new IUser.UserResponse();
    const createdUser = this.userRepository.create(call.request);

    reply.setId(createdUser.id);
    reply.setName(createdUser.name);
    reply.setUsername(createdUser.username);
    reply.setAge(createdUser.age);

    callback(null, reply);
  };

  update = (
    call: grpc.ServerUnaryCall<IUser.UserUpdateRequest>,
    callback: grpc.sendUnaryData<IUser.UserResponse>
  ) => {
    const reply: IUser.UserResponse = new IUser.UserResponse();
    const updatedUser = this.userRepository.update(call.request);

    reply.setId(updatedUser.id);
    reply.setName(updatedUser.name);
    reply.setUsername(updatedUser.username);
    reply.setAge(updatedUser.age);

    callback(null, reply);
  };

  findByOne = (
    call: grpc.ServerUnaryCall<IUser.UserIdRequest>,
    callback: grpc.sendUnaryData<IUser.UserResponse>
  ) => {
    const reply: IUser.UserResponse = new IUser.UserResponse();
    const findedUser = this.userRepository.findByOne(call.request.getId());

    reply.setId(findedUser.id);
    reply.setName(findedUser.name);
    reply.setUsername(findedUser.username);
    reply.setAge(findedUser.age);

    callback(null, reply);
  };

  list = (
    _: grpc.ServerUnaryCall<IUser.Void>,
    callback: grpc.sendUnaryData<IUser.UsersResponse>
  ) => {
    const reply: IUser.UsersResponse = new IUser.UsersResponse();
    const allUsers = this.userRepository.getAll();

    for (const user of allUsers) {
      const userResponse: IUser.UserResponse = new IUser.UserResponse();

      userResponse.setId(user.id);
      userResponse.setName(user.name);
      userResponse.setUsername(user.username);
      userResponse.setAge(user.age);

      reply.addUsers(userResponse);
    }

    callback(null, reply);
  };
}

export default {
  service: UserService,
  handler: new UserHandler(),
};
