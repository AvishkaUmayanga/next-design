import { gql } from '@apollo/client';
import client from './apolloClient';

export async function fetchTestimonials() {
    const { data } = await client.query({
        query: gql`
        query Testimonials {
            testimonials {
            id
            title
            userThoughts
            userImage {
                url
            }
          }
        }
        `
    });
    return data.testimonials;
}