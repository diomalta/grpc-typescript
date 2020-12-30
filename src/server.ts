import "dotenv/config";
import * as grpc from "grpc";

import { protoIndex } from "./proto";

import UserHandler from "./handlers/user";
import PostHandler from "./handlers/post";

protoIndex();

const port: string | number = process.env.PORT || 50051;

type StartServerType = () => void;

export const startServer: StartServerType = (): void => {
  const server: grpc.Server = new grpc.Server();

  server.addService(UserHandler.service, UserHandler.handler);
  server.addService(PostHandler.service, PostHandler.handler);

  server.bindAsync(
    `0.0.0.0:${port}`,
    grpc.ServerCredentials.createInsecure(),
    (err: Error, port: number) => {
      if (err != null) {
        return console.error(err);
      }
      console.log(`gRPC listening on ${port}`);
    }
  );

  server.start();
};

startServer();
