import {useMutation} from "@apollo/client/react";
import {SignInMutation, SignInMutationVariables} from "@/gql/graphql";
import {SignInDocument} from "@/features/auth/api/api";

export function useSignInMutation(
    baseOptions?: useMutation.Options<SignInMutation, SignInMutationVariables>
) {
    return useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
}