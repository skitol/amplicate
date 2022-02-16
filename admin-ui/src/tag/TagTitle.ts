import { Tag as TTag } from "../api/tag/Tag";

export const TAG_TITLE_FIELD = "tagName";

export const TagTitle = (record: TTag): string => {
  return record.tagName || record.id;
};
