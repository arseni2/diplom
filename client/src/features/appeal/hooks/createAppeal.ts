import { useMutation } from "@apollo/client/react";
import {
    CreateAppealMutation,
    CreateAppealMutationVariables,
} from "@/gql/graphql";
import { createAppealMutation } from "@/features/appeal/api/api";
import { IErrorApi } from "@/shared/api/types/types";

const defaultOnError = (error: IErrorApi | null) => {
    if (error) {
        console.error("Ошибка при создании заявки:", error);
    }
};


export function useCreateAppeal(
    baseOptions?: Parameters<
        typeof useMutation<CreateAppealMutation, CreateAppealMutationVariables>
    >[1]
) {
    const originalOnError = baseOptions?.onError;

    const [mutate, result] = useMutation<
        CreateAppealMutation,
        CreateAppealMutationVariables
    >(createAppealMutation, {
        ...baseOptions,
        onError: (error) => {
            const typedError = error as unknown as IErrorApi;
            originalOnError?.(error);
            defaultOnError(typedError);
        },
    });

    const typedError = result.error as IErrorApi | undefined;

    return {
        mutate,
        result: {
            ...result,
            typedError,
        },
    };
}