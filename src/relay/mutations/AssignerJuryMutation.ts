import { graphql } from 'react-relay';

export const ASSIGNER_JURY_MUTATION = graphql`
  mutation AssignerJuryMutation($soutenanceId: ID!, $enseignantId: ID!, $role: String!) {
    assignerJury(soutenanceId: $soutenanceId, enseignantId: $enseignantId, role: $role) {
      success
      message
      jury {
        id
        roleDisplay
        enseignantNom
      }
    }
  }
`;
