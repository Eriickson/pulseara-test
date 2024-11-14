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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
