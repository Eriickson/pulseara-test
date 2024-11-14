/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProcedures = /* GraphQL */ `
  query GetProcedures($id: ID!) {
    getProcedures(id: $id) {
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
export const listProcedures = /* GraphQL */ `
  query ListProcedures($filter: ModelProceduresFilterInput, $limit: Int, $nextToken: String) {
    listProcedures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        procedures {
          id
          name
          code
          claimed
          difference
          authorized
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
