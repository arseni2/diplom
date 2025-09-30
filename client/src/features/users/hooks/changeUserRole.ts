import {useMutation} from "@apollo/client/react";
import {ChangeUserRoleMutation, ChangeUserRoleMutationVariables,} from "@/gql/graphql";
import {changeUserRole} from "@/features/users/api/api";
import {IErrorApi} from "@/shared/api/types/types";


export type ChangeUserRoleMutationResult = useMutation.ResultTuple<
    ChangeUserRoleMutation,
    ChangeUserRoleMutationVariables
>;

export interface UseChangeUserRoleResult {
    mutate: ChangeUserRoleMutationResult[0];
    result: useMutation.Result<ChangeUserRoleMutation> & {
        typedError?: IErrorApi;
    };
}

export function useChangeUserRole(
    baseOptions?: useMutation.Options<ChangeUserRoleMutation, ChangeUserRoleMutationVariables>
): UseChangeUserRoleResult {
    const [mutate, result] = useMutation<ChangeUserRoleMutation, ChangeUserRoleMutationVariables>(
        changeUserRole,
        baseOptions
    );

    const typedError = result.error as IErrorApi | undefined;

    return {
        mutate,
        result: {
            ...result,
            typedError,
        },
    };
}