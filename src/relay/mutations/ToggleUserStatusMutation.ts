import { graphql } from 'react-relay';

export const TOGGLE_USER_STATUS_MUTATION = graphql`
  mutation ToggleUserStatusMutation($userId: ID!, $actif: Boolean!) {
    validerCompte(userId: $userId, actif: $actif) {
      success
      message
      user {
        id
        actif
      }
    }
  }
`;
