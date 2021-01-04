// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_user_UserCreateRequest(arg) {
  if (!(arg instanceof user_pb.UserCreateRequest)) {
    throw new Error('Expected argument of type user.UserCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserCreateRequest(buffer_arg) {
  return user_pb.UserCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserIdRequest(arg) {
  if (!(arg instanceof user_pb.UserIdRequest)) {
    throw new Error('Expected argument of type user.UserIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserIdRequest(buffer_arg) {
  return user_pb.UserIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserResponse(arg) {
  if (!(arg instanceof user_pb.UserResponse)) {
    throw new Error('Expected argument of type user.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserResponse(buffer_arg) {
  return user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserUpdateRequest(arg) {
  if (!(arg instanceof user_pb.UserUpdateRequest)) {
    throw new Error('Expected argument of type user.UserUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserUpdateRequest(buffer_arg) {
  return user_pb.UserUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UsersResponse(arg) {
  if (!(arg instanceof user_pb.UsersResponse)) {
    throw new Error('Expected argument of type user.UsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UsersResponse(buffer_arg) {
  return user_pb.UsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_Void(arg) {
  if (!(arg instanceof user_pb.Void)) {
    throw new Error('Expected argument of type user.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_Void(buffer_arg) {
  return user_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  create: {
    path: '/user.User/create',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserCreateRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_user_UserCreateRequest,
    requestDeserialize: deserialize_user_UserCreateRequest,
    responseSerialize: serialize_user_UserResponse,
    responseDeserialize: deserialize_user_UserResponse,
  },
  update: {
    path: '/user.User/update',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserUpdateRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_user_UserUpdateRequest,
    requestDeserialize: deserialize_user_UserUpdateRequest,
    responseSerialize: serialize_user_UserResponse,
    responseDeserialize: deserialize_user_UserResponse,
  },
  findByOne: {
    path: '/user.User/findByOne',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserIdRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_user_UserIdRequest,
    requestDeserialize: deserialize_user_UserIdRequest,
    responseSerialize: serialize_user_UserResponse,
    responseDeserialize: deserialize_user_UserResponse,
  },
  list: {
    path: '/user.User/list',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Void,
    responseType: user_pb.UsersResponse,
    requestSerialize: serialize_user_Void,
    requestDeserialize: deserialize_user_Void,
    responseSerialize: serialize_user_UsersResponse,
    responseDeserialize: deserialize_user_UsersResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
