import * as grpc from "grpc";

import * as IPost from "../proto/post/generated/post_pb";
import { PostService, IPostServer } from "../proto/post/generated/post_grpc_pb";

class PostHandler implements IPostServer {
  create = (
    call: grpc.ServerUnaryCall<IPost.PostCreateRequest>,
    callback: grpc.sendUnaryData<IPost.PostResponse>
  ): void => {
    const reply: IPost.PostResponse = new IPost.PostResponse();

    reply.setId("uuid");
    reply.setTitle(call.request.getTitle());
    reply.setContent(call.request.getContent());
    reply.setUserid(call.request.getUserid());

    callback(null, reply);
  };

  list = (
    _: grpc.ServerUnaryCall<IPost.Void>,
    callback: grpc.sendUnaryData<IPost.PostsResponse>
  ) => {
    const reply: IPost.PostsResponse = new IPost.PostsResponse();

    callback(null, reply);
  };
}

export default {
  service: PostService,
  handler: new PostHandler(),
};
