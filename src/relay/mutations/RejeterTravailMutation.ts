import { graphql } from 'react-relay';

export const REJETER_TRAVAIL_MUTATION = graphql`
  mutation RejeterTravailMutation($id: ID!, $motif: String!) {
    rejeterTravail(id: $id, motif: $motif) {
      success
      message
      travail {
        id
        statut
        statutDisplay
        motifRejet
      }
    }
  }
`;
