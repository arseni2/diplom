import { useQuery } from "@apollo/client/react";
import {
    GetFeaturesQuery,
    GetFeaturesQueryVariables,
} from "@/gql/graphql";
import { getFeaturesQuery } from "@/features/feature/api/api";
import { IErrorApi } from "@/shared/api/types/types";


type UseGetFeaturesResult = ReturnType<
    typeof useQuery<GetFeaturesQuery, GetFeaturesQueryVariables>
> & {
    typedError?: IErrorApi;
};

export function useGetFeatures(
    baseOptions?: useQuery.Options<GetFeaturesQuery, GetFeaturesQueryVariables>
): UseGetFeaturesResult {
    const result = useQuery<GetFeaturesQuery, GetFeaturesQueryVariables>(
        getFeaturesQuery,
        baseOptions
    );

    const typedError = result.error as IErrorApi | undefined;

    return {
        ...result,
        typedError,
    };
}