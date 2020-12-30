import "dotenv/config";
import * as grpc from "grpc";
import UserService from "./proto/user/generated/user_grpc_pb";
import {
  UserCreateRequest,
  UserResponse,
} from "./proto/user/generated/user_pb";
import { promisify } from "./utils/promisify";

const port: string | number = process.env.PORT || 50051;

const userClient = new UserService.UserClient(
  `0.0.0.0:${port}`,
  grpc.credentials.createInsecure()
);

(async () => {
  try {
    const user = new UserCreateRequest();

    user.setName("Diego Malta");
    user.setUsername("diomalta");
    user.setAge(25);

    const response = await promisify<UserCreateRequest, UserResponse>(
      userClient,
      "create"
    )(user);

    console.log("Username: ", response.getUsername());
  } catch (err) {
    console.error(err);
  }
})();
