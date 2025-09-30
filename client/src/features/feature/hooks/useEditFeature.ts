import { useMutation } from "@apollo/client/react";
import {
    EditFeatureMutationMutation,
    EditFeatureMutationMutationVariables,
} from "@/gql/graphql";
import { editFeature } from "@/features/feature/api/api";
import { IErrorApi } from "@/shared/api/types/types";

export type EditFeatureMutationTuple = useMutation.ResultTuple<
    EditFeatureMutationMutation,
    EditFeatureMutationMutationVariables
>;

export interface ExtendedEditFeatureResult
    extends useMutation.Result<EditFeatureMutationMutation> {
    typedError?: IErrorApi;
}

export interface UseEditFeatureResult {
    mutate: EditFeatureMutationTuple[0];
    result: ExtendedEditFeatureResult;
}

export function useEditFeature(
    baseOptions?: useMutation.Options<
        EditFeatureMutationMutation,
        EditFeatureMutationMutationVariables
    >
): UseEditFeatureResult {
    const [mutate, result] = useMutation<
        EditFeatureMutationMutation,
        EditFeatureMutationMutationVariables
    >(editFeature, baseOptions);

    const typedError = result.error as IErrorApi | undefined;

    return {
        mutate,
        result: {
            ...result,
            typedError,
        },
    };
}