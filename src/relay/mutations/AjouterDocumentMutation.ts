import { graphql } from 'react-relay'

export const AJOUTER_DOCUMENT_MUTATION = graphql`
  mutation AjouterDocumentMutation(
    $travailId: ID!
    $nomFichier: String!
    $typeDocument: String!
    $url: String!
    $tailleOctets: Int
  ) {
    ajouterDocument(
      travailId: $travailId
      nomFichier: $nomFichier
      typeDocument: $typeDocument
      url: $url
      tailleOctets: $tailleOctets
    ) {
      success
      message
      document {
        id
        nomFichier
        typeDocument
        uri
      }
    }
  }
`
