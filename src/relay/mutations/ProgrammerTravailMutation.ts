import { graphql } from 'react-relay'

export const PROGRAMMER_TRAVAIL_MUTATION = graphql`
  mutation ProgrammerTravailMutation($soutenanceId: ID!, $travailId: ID!) {
    programmerTravail(soutenanceId: $soutenanceId, travailId: $travailId) {
      success
      message
      travail {
        id
        titre
        etudiantNom
        statut
        soutenance {
          id
          dateSoutenance
          heureDebut
          heureFin
          salle
          modeDisplay
        }
      }
    }
  }
`
