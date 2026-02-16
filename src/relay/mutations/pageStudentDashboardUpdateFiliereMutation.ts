import { graphql } from 'react-relay'

export const UPDATE_FILIERE_MUTATION = graphql`
  mutation pageStudentDashboardUpdateFiliereMutation($filiereId: ID!) {
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
