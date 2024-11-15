/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProcedure = /* GraphQL */ `
  query GetProcedure($id: ID!) {
    getProcedure(id: $id) {
      id
      name
      code
      procedureNumber
      claimed
      difference
      authorized
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
        procedureNumber
        claimed
        difference
        authorized
      }
      nextToken
      __typename
    }
  }
`;
