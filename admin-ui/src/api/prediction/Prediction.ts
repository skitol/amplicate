import { Tag } from "../tag/Tag";

export type Prediction = {
  className: string | null;
  createdAt: Date;
  geometry: string | null;
  id: string;
  imageName: string | null;
  lat: number | null;
  lon: number | null;
  score: number | null;
  tag?: Tag | null;
  tileName: string | null;
  updatedAt: Date;
  x: number | null;
  xmax1: number | null;
  xmin1: number | null;
  y: number | null;
  ymax: number | null;
  ymin: number | null;
};
