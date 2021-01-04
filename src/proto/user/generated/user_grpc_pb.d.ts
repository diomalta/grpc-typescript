// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IUserService_Icreate;
    update: IUserService_Iupdate;
    findByOne: IUserService_IfindByOne;
    list: IUserService_Ilist;
}

interface IUserService_Icreate extends grpc.MethodDefinition<user_pb.UserCreateRequest, user_pb.UserResponse> {
    path: "/user.User/create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserCreateRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserCreateRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUserService_Iupdate extends grpc.MethodDefinition<user_pb.UserUpdateRequest, user_pb.UserResponse> {
    path: "/user.User/update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserUpdateRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserUpdateRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUserService_IfindByOne extends grpc.MethodDefinition<user_pb.UserIdRequest, user_pb.UserResponse> {
    path: "/user.User/findByOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserIdRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserIdRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUserService_Ilist extends grpc.MethodDefinition<user_pb.Void, user_pb.UsersResponse> {
    path: "/user.User/list";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Void>;
    requestDeserialize: grpc.deserialize<user_pb.Void>;
    responseSerialize: grpc.serialize<user_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UsersResponse>;
}

export const UserService: IUserService;

export interface IUserServer {
    create: grpc.handleUnaryCall<user_pb.UserCreateRequest, user_pb.UserResponse>;
    update: grpc.handleUnaryCall<user_pb.UserUpdateRequest, user_pb.UserResponse>;
    findByOne: grpc.handleUnaryCall<user_pb.UserIdRequest, user_pb.UserResponse>;
    list: grpc.handleUnaryCall<user_pb.Void, user_pb.UsersResponse>;
}

export interface IUserClient {
    create(request: user_pb.UserCreateRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    create(request: user_pb.UserCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    create(request: user_pb.UserCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.UserUpdateRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.UserUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    update(request: user_pb.UserUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    findByOne(request: user_pb.UserIdRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    findByOne(request: user_pb.UserIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    findByOne(request: user_pb.UserIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    list(request: user_pb.Void, callback: (error: grpc.ServiceError | null, response: user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    list(request: user_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    list(request: user_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: user_pb.UserCreateRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.UserCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.UserCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.UserUpdateRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.UserUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.UserUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public findByOne(request: user_pb.UserIdRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public findByOne(request: user_pb.UserIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public findByOne(request: user_pb.UserIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public list(request: user_pb.Void, callback: (error: grpc.ServiceError | null, response: user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public list(request: user_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public list(request: user_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
}
