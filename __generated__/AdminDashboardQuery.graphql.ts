/**
 * @generated SignedSource<<3abce71d81f9bf9880fa6a2421a61342>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AdminDashboardQuery$variables = Record<PropertyKey, never>;
export type AdminDashboardQuery$data = {
  readonly dashboardStats: {
    readonly comptesInactifs: number | null | undefined;
    readonly soutenancesPlanifiees: number | null | undefined;
    readonly soutenancesTerminees: number | null | undefined;
    readonly totalEnseignants: number | null | undefined;
    readonly totalEtudiants: number | null | undefined;
    readonly travauxAcceptes: number | null | undefined;
    readonly travauxEnAttente: number | null | undefined;
  } | null | undefined;
  readonly travaux: ReadonlyArray<{
    readonly dateSoumission: any | null | undefined;
    readonly etudiantNom: string | null | undefined;
    readonly id: string | null | undefined;
    readonly statut: string | null | undefined;
    readonly titre: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type AdminDashboardQuery = {
  response: AdminDashboardQuery$data;
  variables: AdminDashboardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "DashboardStatsType",
    "kind": "LinkedField",
    "name": "dashboardStats",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalEtudiants",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalEnseignants",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "travauxEnAttente",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "travauxAcceptes",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "soutenancesPlanifiees",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "soutenancesTerminees",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "comptesInactifs",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "statut",
        "value": "SOUMIS"
      }
    ],
    "concreteType": "TravauxSoutenanceType",
    "kind": "LinkedField",
    "name": "travaux",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "titre",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "etudiantNom",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dateSoumission",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "statut",
        "storageKey": null
      }
    ],
    "storageKey": "travaux(statut:\"SOUMIS\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AdminDashboardQuery",
    "selections": (v0/*: any*/),
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AdminDashboardQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7ff864d812197ca7c57877e0768d9579",
    "id": null,
    "metadata": {},
    "name": "AdminDashboardQuery",
    "operationKind": "query",
    "text": "query AdminDashboardQuery {\n  dashboardStats {\n    totalEtudiants\n    totalEnseignants\n    travauxEnAttente\n    travauxAcceptes\n    soutenancesPlanifiees\n    soutenancesTerminees\n    comptesInactifs\n  }\n  travaux(statut: \"SOUMIS\") {\n    id\n    titre\n    etudiantNom\n    dateSoumission\n    statut\n  }\n}\n"
  }
};
})();

(node as any).hash = "783b396c317cfd804b9aafc67fb5ae29";

export default node;
