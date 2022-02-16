import { Prediction as TPrediction } from "../api/prediction/Prediction";

export const PREDICTION_TITLE_FIELD = "className";

export const PredictionTitle = (record: TPrediction): string => {
  return record.className || record.id;
};
