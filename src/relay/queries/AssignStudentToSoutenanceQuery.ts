import { graphql } from 'react-relay'

export const ASSIGN_STUDENT_TO_SOUTENANCE_QUERY = graphql`
  query AssignStudentToSoutenanceQuery {
    travauxAcceptes {
      id
      titre
      statut
      etudiantNom
      etudiant {
        id
        utilisateur {
          id
          firstName
          lastName
        }
      }
      soutenance {
        id
        dateSoutenance
      }
    }
    soutenancesAVenir {
      id
      dateSoutenance
      heureDebut
      heureFin
      salle
      modeDisplay
      statut
    }
  }
`
