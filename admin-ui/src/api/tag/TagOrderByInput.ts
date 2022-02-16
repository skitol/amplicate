import { SortOrder } from "../../util/SortOrder";

export type TagOrderByInput = {
  className?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  predictionId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
