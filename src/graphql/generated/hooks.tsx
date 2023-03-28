import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetDocument = gql`
    query get {
  get
}
    `;

/**
 * __useGetQuery__
 *
 * To run a query within a React component, call `useGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetQuery, Types.GetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetQuery, Types.GetQueryVariables>(GetDocument, options);
      }
export function useGetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetQuery, Types.GetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetQuery, Types.GetQueryVariables>(GetDocument, options);
        }
export type GetQueryHookResult = ReturnType<typeof useGetQuery>;
export type GetLazyQueryHookResult = ReturnType<typeof useGetLazyQuery>;
export type GetQueryResult = Apollo.QueryResult<Types.GetQuery, Types.GetQueryVariables>;