import { graphql } from 'react-relay'

export const STUDENT_DASHBOARD_QUERY = graphql`
  query pageStudentQuery {
    me {
      id
      profilEtudiant {
        filiere {
          id
          nom
        }
      }
    }
    premiereUniversite {
      id
      nom
      type
      enfants { # Niveau Facultés / Écoles
        id
        nom
        type
        enfants { # Niveau Départements
          id
          nom
          type
          enfants { # Niveau Filières
            id
            nom
            type
          }
        }
      }
    }
  }
`
