import { graphql } from 'react-relay'

export const DETAILS_TRAVAIL_QUERY = graphql`
  query DetailsTravailQuery($id: ID!) {
    travail(id: $id) {
      id
      titre
      resume
      typeDisplay
      etudiantNom
      documents {
        id
        nomFichier
        uri
        typeDisplay
      }
    }
  }
`
