/**
 * @generated SignedSource<<641f37e564e2011449cf025d4b6e1d2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DashboardEncadrantQuery$variables = Record<PropertyKey, never>;
export type DashboardEncadrantQuery$data = {
  readonly mesTravauxEncadres: ReadonlyArray<{
    readonly dateSoumission: any | null | undefined;
    readonly documents: ReadonlyArray<{
      readonly dateDepot: any | null | undefined;
      readonly id: string | null | undefined;
      readonly nomFichier: string | null | undefined;
      readonly typeDisplay: string | null | undefined;
      readonly uri: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly etudiantNom: string | null | undefined;
    readonly id: string | null | undefined;
    readonly soutenance: {
      readonly dateSoutenance: any | null | undefined;
      readonly heureDebut: any | null | undefined;
      readonly id: string | null | undefined;
      readonly modeDisplay: string | null | undefined;
      readonly salle: string | null | undefined;
    } | null | undefined;
    readonly statut: string | null | undefined;
    readonly statutDisplay: string | null | undefined;
    readonly titre: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type DashboardEncadrantQuery = {
  response: DashboardEncadrantQuery$data;
  variables: DashboardEncadrantQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TravauxSoutenanceType",
    "kind": "LinkedField",
    "name": "mesTravauxEncadres",
    "plural": true,
    "selections": [
      (v0/*: any*/),
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
        "name": "statut",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "statutDisplay",
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
        "concreteType": "DocumentType",
        "kind": "LinkedField",
        "name": "documents",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nomFichier",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "typeDisplay",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "uri",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dateDepot",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "SoutenanceType",
        "kind": "LinkedField",
        "name": "soutenance",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dateSoutenance",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "heureDebut",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "salle",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "modeDisplay",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardEncadrantQuery",
    "selections": (v1/*: any*/),
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardEncadrantQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "772e5aefc59d7548c37fad785c94549d",
    "id": null,
    "metadata": {},
    "name": "DashboardEncadrantQuery",
    "operationKind": "query",
    "text": "query DashboardEncadrantQuery {\n  mesTravauxEncadres {\n    id\n    titre\n    etudiantNom\n    statut\n    statutDisplay\n    dateSoumission\n    documents {\n      id\n      nomFichier\n      typeDisplay\n      uri\n      dateDepot\n    }\n    soutenance {\n      id\n      dateSoutenance\n      heureDebut\n      salle\n      modeDisplay\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0c19e22e96a07eb7856d3407ba7ebdf4";

export default node;
