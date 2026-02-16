import { graphql } from 'react-relay';

export const VOIR_DISPO_ENSEIGNANT_QUERY = graphql`
  query VoirDispoEnseignantQuery($enseignantId: ID!) {
    disponibilitesEnseignant(enseignantId: $enseignantId) {
      jourDisplay
      heureDebut
      heureFin
      estDisponible
    }
  }
`;
