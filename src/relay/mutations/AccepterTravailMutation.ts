import { graphql } from 'react-relay';

export const ACCEPTER_TRAVAIL_MUTATION = graphql`
  mutation AccepterTravailMutation($id: ID!) {
    accepterTravail(id: $id) {
      success
      message
      travail {
        id
        statut
        statutDisplay
      }
    }
  }
`;
