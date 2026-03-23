import { useMutation } from "@apollo/client/react";
import { ForgotPasswordMutation, ForgotPasswordMutationVariables, ForgotPasswordDocument as ForgotPasswordDocumentGql } from "@/gql/graphql";
import { ForgotPasswordDocument } from "@/features/auth/api/api";

export function useForgotPasswordMutation(
    baseOptions?: useMutation.Options<ForgotPasswordMutation, ForgotPasswordMutationVariables>
) {
    return useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocumentGql, baseOptions);
}
