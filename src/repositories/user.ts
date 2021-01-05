import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

import {
  UserCreateRequest,
  UserResponse,
  UserUpdate,
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

    UserRepository.users.push(user);
    this.commit();

    return user;
  }

  findByOne(id: string) {
    return UserRepository.users.find((user) => {
      return user.id === id;
    });
  }

  getAll() {
    return UserRepository.users;
  }

  update(userInputDTO: UserUpdateRequest) {
    const user = this.findByOne(userInputDTO.getId());

    const filteredData = Object.entries(
      userInputDTO.getUserupdate().toObject()
    ).reduce((acc: { [key: string]: any }, [key, value]) => {
      if (value) {
        acc[key] = value;
      }

      return acc;
    }, {});

    UserRepository.users = UserRepository.users.filter((u) => u.id !== user.id);

    const updateUser: UserResponse.AsObject = {
      ...user,
      ...filteredData,
    };

    UserRepository.users.push(updateUser);
    this.commit();

    return updateUser;
  }
}
