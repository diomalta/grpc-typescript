import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

import {
  UserCreateRequest,
  UserResponse,
  UserUpdateRequest,
} from "../proto/user/generated/user_pb";

export class UserRepository {
  static dbLocation = path.resolve(__dirname, "../.db");

  private static collectionPath = path.resolve(
    UserRepository.dbLocation,
    "users.json"
  );

  private static users: UserResponse.AsObject[] = [];

  constructor() {
    if (!fs.existsSync(UserRepository.dbLocation)) {
      fs.mkdirSync(UserRepository.dbLocation, { recursive: true });
    }

    if (!fs.existsSync(UserRepository.collectionPath)) {
      fs.writeFileSync(UserRepository.collectionPath, "[]");
    }

    UserRepository.users = require(UserRepository.collectionPath);
  }

  private commit() {
    fs.writeFileSync(
      UserRepository.collectionPath,
      JSON.stringify(UserRepository.users)
    );
  }

  create(userInputDTO: UserCreateRequest) {
    const user = {
      id: uuid(),
      countposts: 0,
      ...userInputDTO.toObject(),
    };

    this.commit();

    UserRepository.users.push(user);

    return user;
  }

  findByOne(id: string) {
    return UserRepository.users.find((user) => user.id === id);
  }

  getAll() {
    return UserRepository.users;
  }

  update(userInputDTO: UserUpdateRequest) {
    const user = this.findByOne(userInputDTO.getId());

    const filteredData: Partial<UserUpdateRequest.AsObject> = Object.entries(
      userInputDTO
    ).reduce((acc: { [key: string]: any }, [key, value]) => {
      if (value) {
        acc[key] = value;
      }

      return acc;
    }, {});

    UserRepository.users = UserRepository.users.filter((u) => u.id === user.id);

    const updateUser: UserResponse.AsObject = {
      ...user,
      ...filteredData.userupdate,
    };

    this.commit();

    UserRepository.users.push(updateUser);
  }
}
