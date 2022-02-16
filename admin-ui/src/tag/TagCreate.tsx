import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { PredictionTitle } from "../prediction/PredictionTitle";
import { UserTitle } from "../user/UserTitle";

export const TagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="className"
          label="ClassName"
          choices={[
            { label: "PYLON", value: "Pylon" },
            { label: "TOWER", value: "Tower" },
            { label: "TANK", value: "Tank" },
            { label: "BUILDING", value: "Building" },
            { label: "BUILDING_STEEPLE", value: "Building_Steeple" },
            { label: "BRIDGE", value: "Bridge" },
            { label: "SIGN", value: "Sign" },
            { label: "WINDMILL", value: "Windmill" },
            { label: "STORAGE_STRUCTURE", value: "Storage_Structure" },
            { label: "TANK_WATERTOWER", value: "Tank_WaterTower" },
            { label: "SMOKESTACK", value: "SmokeStack" },
            { label: "INDUSTRIAL_PLANT", value: "Industrial_Plant" },
            { label: "CRANE", value: "Crane" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="prediction.id"
          reference="Prediction"
          label="Prediction"
        >
          <SelectInput optionText={PredictionTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
