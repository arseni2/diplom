import {useMutation} from "@apollo/client/react";
import {SignUpMutation, SignUpMutationVariables} from "@/gql/graphql";
import {SignUpDocument} from "@/features/auth/api/api";

export function useSignUpMutation(
    baseOptions?: useMutation.Options<SignUpMutation, SignUpMutationVariables>
) {
    return useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
}