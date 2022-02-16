import { Prediction } from "../prediction/Prediction";
import { User } from "../user/User";

export type Tag = {
  createdAt: Date;
  id: string;
  predictionId?: Prediction | null;
  tagName?:
    | "Pylon"
    | "Tower"
    | "Tank"
    | "Building"
    | "Building_Steeple"
    | "Bridge"
    | "Sign"
    | "Windmill"
    | "Storage_Structure"
    | "Tank_WaterTower"
    | "SmokeStack"
    | "Industrial_Plant"
    | "Crane"
    | null;
  updatedAt: Date;
  user?: User;
};
