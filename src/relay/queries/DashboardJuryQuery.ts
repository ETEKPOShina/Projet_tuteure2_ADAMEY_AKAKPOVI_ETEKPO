import { graphql } from 'relay-runtime'

export const DashboardJuryQuery = graphql`
  query DashboardJuryQuery {
    mesJurys {
      id
      roleDisplay
      note
      commentaire
      soutenance {
        id
        dateSoutenance
        heureDebut
        salle
        modeDisplay
        travaux {
          id
          titre
          etudiantNom
          resume
          documents {
            id
            uri
            nomFichier
          }
        }
      }
    }
  }
`
