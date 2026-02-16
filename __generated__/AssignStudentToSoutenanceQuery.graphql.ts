/**
 * @generated SignedSource<<a70340e1721064ad76252c54f92c8388>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AssignStudentToSoutenanceQuery$variables = Record<PropertyKey, never>;
export type AssignStudentToSoutenanceQuery$data = {
  readonly soutenances: ReadonlyArray<{
    readonly dateSoutenance: any | null | undefined;
    readonly heureDebut: any | null | undefined;
    readonly heureFin: any | null | undefined;
    readonly id: string | null | undefined;
    readonly modeDisplay: string | null | undefined;
    readonly salle: string | null | undefined;
    readonly statut: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly travauxAcceptes: ReadonlyArray<{
    readonly etudiant: {
      readonly id: string | null | undefined;
      readonly utilisateur: {
        readonly firstName: string | null | undefined;
        readonly id: string | null | undefined;
        readonly lastName: string | null | undefined;
      } | null | undefined;
    } | null | undefined;
    readonly etudiantNom: string | null | undefined;
    readonly id: string | null | undefined;
    readonly soutenance: {
      readonly dateSoutenance: any | null | undefined;
      readonly id: string | null | undefined;
    } | null | undefined;
    readonly statut: string | null | undefined;
    readonly titre: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type AssignStudentToSoutenanceQuery = {
  response: AssignStudentToSoutenanceQuery$data;
  variables: AssignStudentToSoutenanceQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "statut",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateSoutenance",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TravauxSoutenanceType",
    "kind": "LinkedField",
    "name": "travauxAcceptes",
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
      (v1/*: any*/),
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
        "concreteType": "EtudiantType",
        "kind": "LinkedField",
        "name": "etudiant",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CustomUserType",
            "kind": "LinkedField",
            "name": "utilisateur",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "firstName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastName",
                "storageKey": null
              }
            ],
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
          (v2/*: any*/)
        ],
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
    "name": "soutenances",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      (v2/*: any*/),
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
        "name": "heureFin",
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
      (v1/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AssignStudentToSoutenanceQuery",
    "selections": (v3/*: any*/),
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AssignStudentToSoutenanceQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "3277ac90b5d5ffd5938558394997e2fa",
    "id": null,
    "metadata": {},
    "name": "AssignStudentToSoutenanceQuery",
    "operationKind": "query",
    "text": "query AssignStudentToSoutenanceQuery {\n  travauxAcceptes {\n    id\n    titre\n    statut\n    etudiantNom\n    etudiant {\n      id\n      utilisateur {\n        id\n        firstName\n        lastName\n      }\n    }\n    soutenance {\n      id\n      dateSoutenance\n    }\n  }\n  soutenances {\n    id\n    dateSoutenance\n    heureDebut\n    heureFin\n    salle\n    modeDisplay\n    statut\n  }\n}\n"
  }
};
})();

(node as any).hash = "e4c1231c0f4266e5b0b0531a9d7cdd28";

export default node;
