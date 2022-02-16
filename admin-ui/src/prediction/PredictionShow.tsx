import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PREDICTION_TITLE_FIELD } from "./PredictionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PredictionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="className" source="className" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="geometry" source="geometry" />
        <TextField label="ID" source="id" />
        <TextField label="imageName" source="imageName" />
        <TextField label="lat" source="lat" />
        <TextField label="lon" source="lon" />
        <TextField label="score" source="score" />
        <TextField label="tileName" source="tileName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="x" source="x" />
        <TextField label="xmax1" source="xmax1" />
        <TextField label="xmin1" source="xmin1" />
        <TextField label="y" source="y" />
        <TextField label="ymax" source="ymax" />
        <TextField label="ymin" source="ymin" />
        <ReferenceManyField reference="Tag" target="PredictionId" label="Tags">
          <Datagrid rowClick="show">
            <TextField label="ClassName" source="className" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Prediction"
              source="prediction.id"
              reference="Prediction"
            >
              <TextField source={PREDICTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
