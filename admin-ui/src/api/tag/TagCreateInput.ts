import { PredictionWhereUniqueInput } from "../prediction/PredictionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TagCreateInput = {
  predictionId?: PredictionWhereUniqueInput | null;
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
  user: UserWhereUniqueInput;
};
