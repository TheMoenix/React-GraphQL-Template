import * as Types from './schemas';

export type GetQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetQuery = { __typename?: 'Query', get: string };
