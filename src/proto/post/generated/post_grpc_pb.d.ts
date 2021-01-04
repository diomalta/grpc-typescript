// package: post
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as post_pb from "./post_pb";

interface IPostService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IPostService_Icreate;
    list: IPostService_Ilist;
}

interface IPostService_Icreate extends grpc.MethodDefinition<post_pb.PostCreateRequest, post_pb.PostResponse> {
    path: "/post.Post/create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.PostCreateRequest>;
    requestDeserialize: grpc.deserialize<post_pb.PostCreateRequest>;
    responseSerialize: grpc.serialize<post_pb.PostResponse>;
    responseDeserialize: grpc.deserialize<post_pb.PostResponse>;
}
interface IPostService_Ilist extends grpc.MethodDefinition<post_pb.Void, post_pb.PostsResponse> {
    path: "/post.Post/list";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.Void>;
    requestDeserialize: grpc.deserialize<post_pb.Void>;
    responseSerialize: grpc.serialize<post_pb.PostsResponse>;
    responseDeserialize: grpc.deserialize<post_pb.PostsResponse>;
}

export const PostService: IPostService;

export interface IPostServer {
    create: grpc.handleUnaryCall<post_pb.PostCreateRequest, post_pb.PostResponse>;
    list: grpc.handleUnaryCall<post_pb.Void, post_pb.PostsResponse>;
}

export interface IPostClient {
    create(request: post_pb.PostCreateRequest, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    create(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    create(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    list(request: post_pb.Void, callback: (error: grpc.ServiceError | null, response: post_pb.PostsResponse) => void): grpc.ClientUnaryCall;
    list(request: post_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostsResponse) => void): grpc.ClientUnaryCall;
    list(request: post_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostsResponse) => void): grpc.ClientUnaryCall;
}

export class PostClient extends grpc.Client implements IPostClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: post_pb.PostCreateRequest, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public create(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public create(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public list(request: post_pb.Void, callback: (error: grpc.ServiceError | null, response: post_pb.PostsResponse) => void): grpc.ClientUnaryCall;
    public list(request: post_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostsResponse) => void): grpc.ClientUnaryCall;
    public list(request: post_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostsResponse) => void): grpc.ClientUnaryCall;
}
