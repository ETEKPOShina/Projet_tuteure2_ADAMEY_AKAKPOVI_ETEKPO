import { graphql } from 'relay-runtime'

export const SaisirNoteMutation = graphql`
  mutation SaisirNoteMutation(
    $juryId: ID!
    $note: Float!
    $commentaire: String
  ) {
    saisirNote(
      juryId: $juryId
      note: $note
      commentaire: $commentaire
    ) {
      success
      message
      jury {
        id
        note
        commentaire
      }
    }
  }
`
