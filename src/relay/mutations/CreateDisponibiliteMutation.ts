import { graphql } from 'relay-runtime'

export const CreateDisponibiliteMutation = graphql`
  mutation CreateDisponibiliteMutation(
    $jourSemaine: String!
    $heureDebut: Time!
    $heureFin: Time!
  ) {
    createDisponibilite(
      jourSemaine: $jourSemaine
      heureDebut: $heureDebut
      heureFin: $heureFin
    ) {
      success
      message
      disponibilite {
        id
        jourDisplay
        estDisponible
      }
    }
  }
`
