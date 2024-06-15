import { gql } from "@apollo/client";
import client from "./apolloClient";

export async function fetchHeroData() {
    const {data} = await client.query({
        query: gql`
        query MyQuery {
            heroSections {
            id
            sellButton
            title
            buyButton
            description
        }
     }`
  })
   return await data.heroSections;
}