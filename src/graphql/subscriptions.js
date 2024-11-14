/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProcedure = /* GraphQL */ `
  subscription OnCreateProcedure(
    $filter: ModelSubscriptionProcedureFilterInput
  ) {
    onCreateProcedure(filter: $filter) {
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
export const onUpdateProcedure = /* GraphQL */ `
  subscription OnUpdateProcedure(
    $filter: ModelSubscriptionProcedureFilterInput
  ) {
    onUpdateProcedure(filter: $filter) {
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
export const onDeleteProcedure = /* GraphQL */ `
  subscription OnDeleteProcedure(
    $filter: ModelSubscriptionProcedureFilterInput
  ) {
    onDeleteProcedure(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
