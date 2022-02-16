import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PredictionWhereInput = {
  className?: StringNullableFilter;
  geometry?: StringNullableFilter;
  id?: StringFilter;
  imageName?: StringNullableFilter;
  lat?: FloatNullableFilter;
  lon?: FloatNullableFilter;
  score?: FloatNullableFilter;
  tileName?: StringNullableFilter;
  x?: FloatNullableFilter;
  xmax1?: FloatNullableFilter;
  xmin1?: FloatNullableFilter;
  y?: FloatNullableFilter;
  ymax?: FloatNullableFilter;
  ymin?: FloatNullableFilter;
};
