/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProcedures = /* GraphQL */ `
  mutation CreateProcedures(
    $input: CreateProceduresInput!
    $condition: ModelProceduresConditionInput
  ) {
    createProcedures(input: $input, condition: $condition) {
      procedures {
        id
        name
        code
        claimed
        difference
        authorized
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProcedures = /* GraphQL */ `
  mutation UpdateProcedures(
    $input: UpdateProceduresInput!
    $condition: ModelProceduresConditionInput
  ) {
    updateProcedures(input: $input, condition: $condition) {
      procedures {
        id
        name
        code
        claimed
        difference
        authorized
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProcedures = /* GraphQL */ `
  mutation DeleteProcedures(
    $input: DeleteProceduresInput!
    $condition: ModelProceduresConditionInput
  ) {
    deleteProcedures(input: $input, condition: $condition) {
      procedures {
        id
        name
        code
        claimed
        difference
        authorized
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
