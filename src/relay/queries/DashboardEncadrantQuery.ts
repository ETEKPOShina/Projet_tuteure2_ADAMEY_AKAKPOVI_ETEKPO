import { graphql } from 'relay-runtime'

export const DashboardEncadrantQuery = graphql`
  query DashboardEncadrantQuery {
    mesTravauxEncadres {
      id
      titre
      etudiantNom
      statut
      statutDisplay
      dateSoumission
      documents {
        id
        nomFichier
        typeDisplay
        uri
        dateDepot
      }
      soutenance {
        id
        dateSoutenance
        heureDebut
        salle
        modeDisplay
      }
    }
  }
`
