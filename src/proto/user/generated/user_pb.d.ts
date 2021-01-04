// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Void extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Void.AsObject;
    static toObject(includeInstance: boolean, msg: Void): Void.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Void, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Void;
    static deserializeBinaryFromReader(message: Void, reader: jspb.BinaryReader): Void;
}

export namespace Void {
    export type AsObject = {
    }
}

export class UserIdRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UserIdRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserIdRequest): UserIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserIdRequest;
    static deserializeBinaryFromReader(message: UserIdRequest, reader: jspb.BinaryReader): UserIdRequest;
}

export namespace UserIdRequest {
    export type AsObject = {
        id: string,
    }
}

export class UserCreateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): UserCreateRequest;

    getUsername(): string;
    setUsername(value: string): UserCreateRequest;


    hasAge(): boolean;
    clearAge(): void;
    getAge(): number;
    setAge(value: number): UserCreateRequest;


    getOptionalAttrCase(): UserCreateRequest.OptionalAttrCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserCreateRequest): UserCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserCreateRequest;
    static deserializeBinaryFromReader(message: UserCreateRequest, reader: jspb.BinaryReader): UserCreateRequest;
}

export namespace UserCreateRequest {
    export type AsObject = {
        name: string,
        username: string,
        age: number,
    }

    export enum OptionalAttrCase {
        OPTIONAL_ATTR_NOT_SET = 0,
    
    AGE = 3,

    }

}

export class UserResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): UserResponse;

    getName(): string;
    setName(value: string): UserResponse;

    getUsername(): string;
    setUsername(value: string): UserResponse;


    hasAge(): boolean;
    clearAge(): void;
    getAge(): number;
    setAge(value: number): UserResponse;


    hasCountposts(): boolean;
    clearCountposts(): void;
    getCountposts(): number;
    setCountposts(value: number): UserResponse;


    getOptionalAttrCase(): UserResponse.OptionalAttrCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        id: string,
        name: string,
        username: string,
        age: number,
        countposts: number,
    }

    export enum OptionalAttrCase {
        OPTIONAL_ATTR_NOT_SET = 0,
    
    AGE = 4,

    COUNTPOSTS = 5,

    }

}

export class UserUpdate extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): UserUpdate;


    hasUsername(): boolean;
    clearUsername(): void;
    getUsername(): string;
    setUsername(value: string): UserUpdate;


    hasAge(): boolean;
    clearAge(): void;
    getAge(): number;
    setAge(value: number): UserUpdate;


    getOptionalAttrCase(): UserUpdate.OptionalAttrCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: UserUpdate): UserUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserUpdate;
    static deserializeBinaryFromReader(message: UserUpdate, reader: jspb.BinaryReader): UserUpdate;
}

export namespace UserUpdate {
    export type AsObject = {
        name: string,
        username: string,
        age: number,
    }

    export enum OptionalAttrCase {
        OPTIONAL_ATTR_NOT_SET = 0,
    
    NAME = 1,

    USERNAME = 2,

    AGE = 3,

    }

}

export class UserUpdateRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UserUpdateRequest;


    hasUserupdate(): boolean;
    clearUserupdate(): void;
    getUserupdate(): UserUpdate | undefined;
    setUserupdate(value?: UserUpdate): UserUpdateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserUpdateRequest): UserUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserUpdateRequest;
    static deserializeBinaryFromReader(message: UserUpdateRequest, reader: jspb.BinaryReader): UserUpdateRequest;
}

export namespace UserUpdateRequest {
    export type AsObject = {
        id: string,
        userupdate?: UserUpdate.AsObject,
    }
}

export class UsersResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<UserResponse>;
    setUsersList(value: Array<UserResponse>): UsersResponse;
    addUsers(value?: UserResponse, index?: number): UserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UsersResponse): UsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersResponse;
    static deserializeBinaryFromReader(message: UsersResponse, reader: jspb.BinaryReader): UsersResponse;
}

export namespace UsersResponse {
    export type AsObject = {
        usersList: Array<UserResponse.AsObject>,
    }
}
