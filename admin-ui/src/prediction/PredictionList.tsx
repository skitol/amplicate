import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const PredictionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Predictions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="className" source="className" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="geometry" source="geometry" />
        <TextField label="ID" source="id" />
        <TextField label="imageName" source="imageName" />
        <TextField label="lat" source="lat" />
        <TextField label="lon" source="lon" />
        <TextField label="score" source="score" />
        <ReferenceField label="tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="tileName" source="tileName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="x" source="x" />
        <TextField label="xmax1" source="xmax1" />
        <TextField label="xmin1" source="xmin1" />
        <TextField label="y" source="y" />
        <TextField label="ymax" source="ymax" />
        <TextField label="ymin" source="ymin" />
      </Datagrid>
    </List>
  );
};
