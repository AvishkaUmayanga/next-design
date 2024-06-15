import { gql } from "@apollo/client";
import client from "./apolloClient";

export async function fetchAnalyticsData(){
    const {data} = await client.query({
        query: gql`
        query Analytics {
            analytics {
            id
            title
            heading
            description
            buttonText
        }
      }`
    })
    return data.analytics
}