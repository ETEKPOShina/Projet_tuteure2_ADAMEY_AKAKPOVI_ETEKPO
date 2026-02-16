import { graphql } from 'react-relay'

export const SUBMIT_TRAVAIL_MUTATION = graphql`
  mutation SubmitTravailMutation(
    $titre: String!
    $typeTravail: String!
    $resume: String
    $motsCles: String
    $encadrantId: ID
  ) {
    submitTravail(
      titre: $titre
      typeTravail: $typeTravail
      resume: $resume
      motsCles: $motsCles
      encadrantId: $encadrantId
    ) {
      success
      message
      travail {
        id
        titre
        statut
      }
    }
  }
`
