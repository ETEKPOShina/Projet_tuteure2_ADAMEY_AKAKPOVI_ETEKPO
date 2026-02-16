import { graphql } from 'react-relay';

export const TROUVER_ENSEIGNANTS_QUERY = graphql`
  query TrouverEnseignantsQuery {
    enseignants {
      id
      utilisateur {
        firstName
        lastName
      }
      gradeDisplay
      specialite
      disponibilites {
        jourDisplay
        heureDebut
        heureFin
      }
    }
  }
`;
