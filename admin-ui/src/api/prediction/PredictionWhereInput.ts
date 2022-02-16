import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type PredictionWhereInput = {
  className?: StringNullableFilter;
  geometry?: StringNullableFilter;
  id?: StringFilter;
  imageName?: StringNullableFilter;
  lat?: FloatNullableFilter;
  lon?: FloatNullableFilter;
  score?: FloatNullableFilter;
  tag?: TagWhereUniqueInput;
  tileName?: StringNullableFilter;
  x?: FloatNullableFilter;
  xmax1?: FloatNullableFilter;
  xmin1?: FloatNullableFilter;
  y?: FloatNullableFilter;
  ymax?: FloatNullableFilter;
  ymin?: FloatNullableFilter;
};
