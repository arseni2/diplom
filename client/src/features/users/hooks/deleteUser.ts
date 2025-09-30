import {useMutation} from "@apollo/client/react";
import {RemoveUserMutation, RemoveUserMutationVariables,} from "@/gql/graphql";
import {removeUserMutation} from "@/features/users/api/api";
import {IErrorApi} from "@/shared/api/types/types";


export type RemoveUserMutationTuple = useMutation.ResultTuple<
    RemoveUserMutation,
    RemoveUserMutationVariables
>;

export interface ExtendedMutationResult
    extends useMutation.Result<RemoveUserMutation> {
    typedError?: IErrorApi;
}

export interface UseRemoveUserResult {
    mutate: RemoveUserMutationTuple[0];
    result: ExtendedMutationResult;
}

export function useDeleteUser(
    baseOptions?: useMutation.Options<RemoveUserMutation, RemoveUserMutationVariables>
): UseRemoveUserResult {
    const [mutate, result] = useMutation<
        RemoveUserMutation,
        RemoveUserMutationVariables
    >(removeUserMutation, baseOptions);

    const typedError = result.error as IErrorApi | undefined;

    return {
        mutate,
        result: {
            ...result,
            typedError,
        },
    };
}