import { graphql } from 'react-relay'

export const STUDENT_DASHBOARD_QUERY = graphql`
  query StudentDashboardQuery {
    mesTravaux {
      id
      titre
      typeDisplay
      dateSoumission
      statut
      statutDisplay
      motifRejet
      progression {
        pourcentage
        message
        etape
      }
      soutenance {
        id
        dateSoutenance
        heureDebut
        salle
        modeDisplay
        jurys {
          enseignantNom
          roleDisplay
        }
      }
      documents {
        id
        nomFichier
        typeDisplay
        uri
        dateDepot
      }
    }
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
      enfants {
        id
        nom
        type
        enfants {
          id
          nom
          type
          enfants {
            id
            nom
            type
          }
        }
      }
    }
  }
`