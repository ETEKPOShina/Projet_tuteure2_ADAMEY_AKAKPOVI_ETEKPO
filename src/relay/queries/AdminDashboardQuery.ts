import { graphql } from 'react-relay'

export const ADMIN_DASHBOARD_QUERY = graphql`
  query AdminDashboardQuery {
    dashboardStats {
      totalEtudiants
      totalEnseignants
      travauxEnAttente
      travauxAcceptes
      soutenancesPlanifiees
      soutenancesTerminees
      comptesInactifs
    }
    
    travaux(statut: "SOUMIS") {
      id
      titre
      etudiantNom
      dateSoumission
      statut
    }
  }
`
