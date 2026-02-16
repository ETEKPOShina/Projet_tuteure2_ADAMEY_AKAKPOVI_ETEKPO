import { graphql } from 'react-relay'

export const MES_TRAVAUX_QUERY = graphql`
  query MesTravauxQuery {
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
  }
`
