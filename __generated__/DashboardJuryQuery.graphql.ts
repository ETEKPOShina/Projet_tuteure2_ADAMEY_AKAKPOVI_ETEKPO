/**
 * @generated SignedSource<<cdbddb0de9d2043e53d3e7722b960d3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DashboardJuryQuery$variables = Record<PropertyKey, never>;
export type DashboardJuryQuery$data = {
  readonly mesJurys: ReadonlyArray<{
    readonly commentaire: string | null | undefined;
    readonly id: string | null | undefined;
    readonly note: number | null | undefined;
    readonly roleDisplay: string | null | undefined;
    readonly soutenance: {
      readonly dateSoutenance: any | null | undefined;
      readonly heureDebut: any | null | undefined;
      readonly id: string | null | undefined;
      readonly modeDisplay: string | null | undefined;
      readonly salle: string | null | undefined;
      readonly travaux: ReadonlyArray<{
        readonly documents: ReadonlyArray<{
          readonly id: string | null | undefined;
          readonly nomFichier: string | null | undefined;
          readonly uri: string | null | undefined;
        } | null | undefined> | null | undefined;
        readonly etudiantNom: string | null | undefined;
        readonly id: string | null | undefined;
        readonly resume: string | null | undefined;
        readonly titre: string | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined> | null | undefined;
};
export type DashboardJuryQuery = {
  response: DashboardJuryQuery$data;
  variables: DashboardJuryQuery$variables;
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
    "concreteType": "JuryType",
    "kind": "LinkedField",
    "name": "mesJurys",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "roleDisplay",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "note",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "commentaire",
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TravauxSoutenanceType",
            "kind": "LinkedField",
            "name": "travaux",
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
                "name": "resume",
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
                    "name": "uri",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nomFichier",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
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
    "name": "DashboardJuryQuery",
    "selections": (v1/*: any*/),
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardJuryQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9703e66f55096cb9e618b1ebd039f5c1",
    "id": null,
    "metadata": {},
    "name": "DashboardJuryQuery",
    "operationKind": "query",
    "text": "query DashboardJuryQuery {\n  mesJurys {\n    id\n    roleDisplay\n    note\n    commentaire\n    soutenance {\n      id\n      dateSoutenance\n      heureDebut\n      salle\n      modeDisplay\n      travaux {\n        id\n        titre\n        etudiantNom\n        resume\n        documents {\n          id\n          uri\n          nomFichier\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4a84cbc531a82e8986805977b05abb7b";

export default node;
