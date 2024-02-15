import { Server, WebSocketHandler } from "bun";

export const server: {
  ws?: WebSocketHandler<{ url: string }>;
  http: (arg: {
    url: URL;
    req: Request;
    server: Server;
    handle: (req: Request) => Promise<Response>;
  }) => Promise<Response>;
} = {
  async http({ req, handle, url, server }) {
    return await handle(req);
  },
};
