import { useQuery } from "@apollo/client/react";
import { UsersQuery, UsersQueryVariables } from "@/gql/graphql";
import { getUsersQuery } from "@/features/users/api/api";
import {IErrorApi} from "@/shared/api/types/types";

// Расширяем стандартный результат Apollo useQuery
type UseGetUsersQueryResult = ReturnType<typeof useQuery<UsersQuery, UsersQueryVariables>> & {
    typedError?: IErrorApi;
};

export function useGetUsersQuery(
    baseOptions?: useQuery.Options<UsersQuery, UsersQueryVariables>
): UseGetUsersQueryResult {
    const result = useQuery<UsersQuery, UsersQueryVariables>(getUsersQuery, baseOptions);

    const typedError = result.error as IErrorApi | undefined;

    return {
        ...result,
        typedError,
    };
}