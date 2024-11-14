/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProcedures = /* GraphQL */ `
  subscription OnCreateProcedures(
    $filter: ModelSubscriptionProceduresFilterInput
  ) {
    onCreateProcedures(filter: $filter) {
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
export const onUpdateProcedures = /* GraphQL */ `
  subscription OnUpdateProcedures(
    $filter: ModelSubscriptionProceduresFilterInput
  ) {
    onUpdateProcedures(filter: $filter) {
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
export const onDeleteProcedures = /* GraphQL */ `
  subscription OnDeleteProcedures(
    $filter: ModelSubscriptionProceduresFilterInput
  ) {
    onDeleteProcedures(filter: $filter) {
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
