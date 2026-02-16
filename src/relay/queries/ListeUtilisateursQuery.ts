import { graphql } from 'react-relay'

export const LISTE_UTILISATEURS_QUERY = graphql`
  query ListeUtilisateursQuery($search: String) {
    users(search: $search) {
      id
      email
      firstName
      lastName
      typeUtilisateurDisplay
      actif
      dateCreation
    }
  }
`
