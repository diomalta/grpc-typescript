import * as grpc from "grpc";

import * as IUser from "../proto/user/generated/user_pb";
import { UserService, IUserServer } from "../proto/user/generated/user_grpc_pb";

class UserHandler implements IUserServer {
  create = (
    call: grpc.ServerUnaryCall<IUser.UserCreateRequest>,
    callback: grpc.sendUnaryData<IUser.UserResponse>
  ): void => {
    const reply: IUser.UserResponse = new IUser.UserResponse();

    reply.setId("uuid");
    reply.setName(call.request.getName());
    reply.setUsername(call.request.getUsername());
    reply.setAge(call.request.getAge());

    callback(null, reply);
  };

  update = (
    call: grpc.ServerUnaryCall<IUser.UserUpdateRequest>,
    callback: grpc.sendUnaryData<IUser.UserResponse>
  ) => {
    const reply: IUser.UserResponse = new IUser.UserResponse();
    const userForUpdate: IUser.UserUpdate = call.request.getUserupdate();

    reply.setId("uuid");
    reply.setName(userForUpdate.getName());
    reply.setUsername(userForUpdate.getUsername());
    reply.setAge(userForUpdate.getAge());

    callback(null, reply);
  };

  findByOne = (
    call: grpc.ServerUnaryCall<IUser.UserIdRequest>,
    callback: grpc.sendUnaryData<IUser.UserResponse>
  ) => {
    const reply: IUser.UserResponse = new IUser.UserResponse();

    reply.setId("uuid");
    reply.setName("call.request.getName()");
    reply.setUsername("call.request.getUsername()");
    reply.setAge(0);

    callback(null, reply);
  };

  list = (
    _: grpc.ServerUnaryCall<IUser.Void>,
    callback: grpc.sendUnaryData<IUser.UsersResponse>
  ) => {
    const reply: IUser.UsersResponse = new IUser.UsersResponse();

    callback(null, reply);
  };
}

export default {
  service: UserService,
  handler: new UserHandler(),
};
