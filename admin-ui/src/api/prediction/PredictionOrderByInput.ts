import { SortOrder } from "../../util/SortOrder";

export type PredictionOrderByInput = {
  className?: SortOrder;
  createdAt?: SortOrder;
  geometry?: SortOrder;
  id?: SortOrder;
  imageName?: SortOrder;
  lat?: SortOrder;
  lon?: SortOrder;
  score?: SortOrder;
  tileName?: SortOrder;
  updatedAt?: SortOrder;
  x?: SortOrder;
  xmax1?: SortOrder;
  xmin1?: SortOrder;
  y?: SortOrder;
  ymax?: SortOrder;
  ymin?: SortOrder;
};
