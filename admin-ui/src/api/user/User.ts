import { Tag } from "../tag/Tag";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  tags?: Array<Tag>;
  updatedAt: Date;
  username: string;
};
