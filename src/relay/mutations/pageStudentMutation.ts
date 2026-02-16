import { graphql } from 'react-relay'

export const UPDATE_FILIERE_MUTATION = graphql`
  mutation pageStudentMutation($filiereId: ID!) {
    updateProfile(filiereId: $filiereId) {
      success
      user {
        id
        profilEtudiant {
          filiere {
            id
            nom
          }
        }
      }
    }
  }
`
