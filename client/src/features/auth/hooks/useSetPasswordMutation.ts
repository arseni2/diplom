import { useMutation } from "@apollo/client/react";
import { SetPasswordMutation, SetPasswordMutationVariables, SetPasswordDocument as SetPasswordDocumentGql } from "@/gql/graphql";
import { SetPasswordDocument } from "@/features/auth/api/api";

export function useSetPasswordMutation(
    baseOptions?: useMutation.Options<SetPasswordMutation, SetPasswordMutationVariables>
) {
    return useMutation<SetPasswordMutation, SetPasswordMutationVariables>(SetPasswordDocumentGql, baseOptions);
}
