import { graphql } from 'react-relay';

export const CREATE_SOUTENANCE_MUTATION = graphql`
  mutation CreateSoutenanceMutation(
    $dateSoutenance: Date!
    $heureDebut: Time!
    $heureFin: Time
    $salle: String!
    $capacite: Int!
    $mode: String!
  ) {
    createSoutenance(
      dateSoutenance: $dateSoutenance
      heureDebut: $heureDebut
      heureFin: $heureFin
      salle: $salle
      capacite: $capacite
      mode: $mode
    ) {
      success
      message
      soutenance {
        id
        dateSoutenance
        heureDebut
        salle
      }
    }
  }
`;
