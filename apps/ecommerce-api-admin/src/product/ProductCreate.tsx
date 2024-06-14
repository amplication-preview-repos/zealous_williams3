import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SubcategoryTitle } from "../subcategory/SubcategoryTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <ReferenceInput
          source="subcategory.id"
          reference="Subcategory"
          label="Subcategory"
        >
          <SelectInput optionText={SubcategoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
