// package: post
// file: post.proto

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

export class PostCreateRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): PostCreateRequest;

    getContent(): string;
    setContent(value: string): PostCreateRequest;

    getUserid(): string;
    setUserid(value: string): PostCreateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCreateRequest): PostCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCreateRequest;
    static deserializeBinaryFromReader(message: PostCreateRequest, reader: jspb.BinaryReader): PostCreateRequest;
}

export namespace PostCreateRequest {
    export type AsObject = {
        title: string,
        content: string,
        userid: string,
    }
}

export class PostResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): PostResponse;

    getTitle(): string;
    setTitle(value: string): PostResponse;

    getContent(): string;
    setContent(value: string): PostResponse;

    getUserid(): string;
    setUserid(value: string): PostResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostResponse): PostResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostResponse;
    static deserializeBinaryFromReader(message: PostResponse, reader: jspb.BinaryReader): PostResponse;
}

export namespace PostResponse {
    export type AsObject = {
        id: string,
        title: string,
        content: string,
        userid: string,
    }
}

export class PostsResponse extends jspb.Message { 
    clearPostsList(): void;
    getPostsList(): Array<PostResponse>;
    setPostsList(value: Array<PostResponse>): PostsResponse;
    addPosts(value?: PostResponse, index?: number): PostResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostsResponse): PostsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostsResponse;
    static deserializeBinaryFromReader(message: PostsResponse, reader: jspb.BinaryReader): PostsResponse;
}

export namespace PostsResponse {
    export type AsObject = {
        postsList: Array<PostResponse.AsObject>,
    }
}
