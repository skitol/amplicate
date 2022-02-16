import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TagTitle } from "../tag/TagTitle";

export const PredictionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="className" source="className" />
        <TextInput label="geometry" source="geometry" />
        <TextInput label="imageName" source="imageName" />
        <NumberInput label="lat" source="lat" />
        <NumberInput label="lon" source="lon" />
        <NumberInput label="score" source="score" />
        <ReferenceInput source="tag.id" reference="Tag" label="tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
        <TextInput label="tileName" source="tileName" />
        <NumberInput label="x" source="x" />
        <NumberInput label="xmax1" source="xmax1" />
        <NumberInput label="xmin1" source="xmin1" />
        <NumberInput label="y" source="y" />
        <NumberInput label="ymax" source="ymax" />
        <NumberInput label="ymin" source="ymin" />
      </SimpleForm>
    </Edit>
  );
};
