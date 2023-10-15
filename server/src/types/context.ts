import { Session, SessionData } from "express-session";
import { IncomingMessage, ServerResponse } from "http";

export type Context = {
  req: IncomingMessage & {
    session: Session & Partial<SessionData> & { userId?: number };
  };
  res: ServerResponse;
};
