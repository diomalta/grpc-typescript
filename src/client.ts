import "dotenv/config";
import * as grpc from "grpc";
import * as faker from "faker";
import UserService from "./proto/user/generated/user_grpc_pb";
import {
  UserCreateRequest,
  UserResponse,
  UsersResponse,
  UserUpdate,
  UserUpdateRequest,
  Void,
} from "./proto/user/generated/user_pb";
import { promisify } from "./utils/promisify";

const port: string | number = process.env.PORT || 50051;

const userClient = new UserService.UserClient(
  `0.0.0.0:${port}`,
  grpc.credentials.createInsecure()
);

(async () => {
  try {
    const items = [...Array(faker.random.number({ min: 5, max: 20 })).keys()];

    for (const _ of items) {
      const user = new UserCreateRequest();

      user.setName(faker.name.findName());
      user.setUsername(faker.internet.userName());
      user.setAge(faker.random.number());

      await promisify<UserCreateRequest, UserResponse>(
        userClient,
        "create"
      )(user);
    }

    const allUsers = await promisify<Void, UsersResponse>(
      userClient,
      "list"
    )(new Void());

    const {
      usersList: [, secondUser],
    } = allUsers.toObject();

    const userUpdateRequest = new UserUpdateRequest();
    const userUpdate = new UserUpdate();

    userUpdateRequest.setId(secondUser.id);
    userUpdate.setName(faker.name.findName());
    userUpdateRequest.setUserupdate(userUpdate);

    await promisify<UserUpdateRequest, UserResponse>(
      userClient,
      "update"
    )(userUpdateRequest);
  } catch (err) {
    console.error(err);
  }
})();
