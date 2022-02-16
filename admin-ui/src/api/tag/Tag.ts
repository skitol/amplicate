import { Prediction } from "../prediction/Prediction";
import { User } from "../user/User";

export type Tag = {
  className?:
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
    | "Crane";
  createdAt: Date;
  id: string;
  prediction?: Prediction;
  updatedAt: Date;
  user?: User | null;
};
