// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var post_pb = require('./post_pb.js');

function serialize_post_PostCreateRequest(arg) {
  if (!(arg instanceof post_pb.PostCreateRequest)) {
    throw new Error('Expected argument of type post.PostCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_PostCreateRequest(buffer_arg) {
  return post_pb.PostCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_PostResponse(arg) {
  if (!(arg instanceof post_pb.PostResponse)) {
    throw new Error('Expected argument of type post.PostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_PostResponse(buffer_arg) {
  return post_pb.PostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_PostsResponse(arg) {
  if (!(arg instanceof post_pb.PostsResponse)) {
    throw new Error('Expected argument of type post.PostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_PostsResponse(buffer_arg) {
  return post_pb.PostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_Void(arg) {
  if (!(arg instanceof post_pb.Void)) {
    throw new Error('Expected argument of type post.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_Void(buffer_arg) {
  return post_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostService = exports.PostService = {
  create: {
    path: '/post.Post/create',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.PostCreateRequest,
    responseType: post_pb.PostResponse,
    requestSerialize: serialize_post_PostCreateRequest,
    requestDeserialize: deserialize_post_PostCreateRequest,
    responseSerialize: serialize_post_PostResponse,
    responseDeserialize: deserialize_post_PostResponse,
  },
  list: {
    path: '/post.Post/list',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.Void,
    responseType: post_pb.PostsResponse,
    requestSerialize: serialize_post_Void,
    requestDeserialize: deserialize_post_Void,
    responseSerialize: serialize_post_PostsResponse,
    responseDeserialize: deserialize_post_PostsResponse,
  },
};

exports.PostClient = grpc.makeGenericClientConstructor(PostService);
