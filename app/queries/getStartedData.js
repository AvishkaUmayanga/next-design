import { gql } from "@apollo/client";
import client from "./apolloClient";

export async function fetchGetStartedData(){
    const {data} = await client.query({
        query: gql`
        query Started {
          getStarteds {
            id
            heading
            title
            buttonText
        }
    }
    `
  })
  return data.getStarteds
}