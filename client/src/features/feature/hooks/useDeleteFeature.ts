import { useMutation } from "@apollo/client/react";
import {
    MutationRemoveFeatureArgs,
    DeleteFeatureMutationMutationVariables,
} from "@/gql/graphql";
import { deleteFeature } from "@/features/feature/api/api";
import { IErrorApi } from "@/shared/api/types/types";


export type DeleteFeatureMutationTuple = useMutation.ResultTuple<
    MutationRemoveFeatureArgs,
    DeleteFeatureMutationMutationVariables
>;

export interface ExtendedDeleteFeatureResult
    extends useMutation.Result<MutationRemoveFeatureArgs> {
    typedError?: IErrorApi;
}

export interface UseDeleteFeatureResult {
    mutate: DeleteFeatureMutationTuple[0];
    result: ExtendedDeleteFeatureResult;
}

export function useDeleteFeature(
    baseOptions?: useMutation.Options<
        MutationRemoveFeatureArgs,
        DeleteFeatureMutationMutationVariables
    >
): UseDeleteFeatureResult {
    const [mutate, result] = useMutation<
        MutationRemoveFeatureArgs,
        DeleteFeatureMutationMutationVariables
    >(deleteFeature, baseOptions);

    const typedError = result.error as IErrorApi | undefined;

    return {
        mutate,
        result: {
            ...result,
            typedError,
        },
    };
}