/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProcedure = /* GraphQL */ `
  query GetProcedure($id: ID!) {
    getProcedure(id: $id) {
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
export const listProcedures = /* GraphQL */ `
  query ListProcedures(
    $filter: ModelProcedureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProcedures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
