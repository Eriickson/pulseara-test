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
  query ListProcedures($filter: ModelProcedureFilterInput, $limit: Int, $nextToken: String) {
    listProcedures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        code
        claimed
        difference
        authorized
      }
      nextToken
      __typename
    }
  }
`;
