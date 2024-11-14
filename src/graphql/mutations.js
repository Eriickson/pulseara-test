/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProcedure = /* GraphQL */ `
  mutation CreateProcedure(
    $input: CreateProcedureInput!
    $condition: ModelProcedureConditionInput
  ) {
    createProcedure(input: $input, condition: $condition) {
      id
      name
      code
      claimed
      difference
      authorized
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProcedure = /* GraphQL */ `
  mutation UpdateProcedure(
    $input: UpdateProcedureInput!
    $condition: ModelProcedureConditionInput
  ) {
    updateProcedure(input: $input, condition: $condition) {
      id
      name
      code
      claimed
      difference
      authorized
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProcedure = /* GraphQL */ `
  mutation DeleteProcedure(
    $input: DeleteProcedureInput!
    $condition: ModelProcedureConditionInput
  ) {
    deleteProcedure(input: $input, condition: $condition) {
      id
      name
      code
      claimed
      difference
      authorized
      createdAt
      updatedAt
      __typename
    }
  }
`;
