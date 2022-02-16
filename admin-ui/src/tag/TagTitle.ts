import { Tag as TTag } from "../api/tag/Tag";

export const TAG_TITLE_FIELD = "className";

export const TagTitle = (record: TTag): string => {
  return record.className || record.id;
};
