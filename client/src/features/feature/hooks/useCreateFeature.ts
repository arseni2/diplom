import { useMutation } from "@apollo/client/react";
import {
    CreateFeatureMutationMutation,
    CreateFeatureMutationMutationVariables,
} from "@/gql/graphql";
import { createFeature } from "@/features/feature/api/api";
import { IErrorApi } from "@/shared/api/types/types";


export type CreateFeatureMutationTuple = useMutation.ResultTuple<
    CreateFeatureMutationMutation,
    CreateFeatureMutationMutationVariables
>;

export interface ExtendedCreateFeatureResult
    extends useMutation.Result<CreateFeatureMutationMutation> {
    typedError?: IErrorApi;
}

export interface UseCreateFeatureResult {
    mutate: CreateFeatureMutationTuple[0];
    result: ExtendedCreateFeatureResult;
}


export function useCreateFeature(
    baseOptions?: useMutation.Options<
        CreateFeatureMutationMutation,
        CreateFeatureMutationMutationVariables
    >
): UseCreateFeatureResult {
    const [mutate, result] = useMutation<
        CreateFeatureMutationMutation,
        CreateFeatureMutationMutationVariables
    >(createFeature, baseOptions);

    const typedError = result.error as IErrorApi | undefined;

    return {
        mutate,
        result: {
            ...result,
            typedError,
        },
    };
}