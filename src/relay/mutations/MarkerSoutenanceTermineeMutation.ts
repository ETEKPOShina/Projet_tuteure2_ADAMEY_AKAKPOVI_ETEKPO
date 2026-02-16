import { graphql } from 'react-relay';

export const MARKER_SOUTENANCE_TERMINEE_MUTATION = graphql`
  mutation MarkerSoutenanceTermineeMutation($id: ID!) {
    marquerSoutenanceTerminee(id: $id) {
      success
      message
      soutenance {
        id
        statutDisplay
      }
    }
  }
`;
