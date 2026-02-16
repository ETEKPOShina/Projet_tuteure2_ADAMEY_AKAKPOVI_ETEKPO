/**
 * @generated SignedSource<<3c3bdc90be98717a8b6970a92c914ae6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ProgrammerTravailMutation$variables = {
  soutenanceId: string;
  travailId: string;
};
export type ProgrammerTravailMutation$data = {
  readonly programmerTravail: {
    readonly message: string | null | undefined;
    readonly success: boolean | null | undefined;
    readonly travail: {
      readonly etudiantNom: string | null | undefined;
      readonly id: string | null | undefined;
      readonly soutenance: {
        readonly dateSoutenance: any | null | undefined;
        readonly heureDebut: any | null | undefined;
        readonly heureFin: any | null | undefined;
        readonly id: string | null | undefined;
        readonly modeDisplay: string | null | undefined;
        readonly salle: string | null | undefined;
      } | null | undefined;
      readonly statut: string | null | undefined;
      readonly titre: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ProgrammerTravailMutation = {
  response: ProgrammerTravailMutation$data;
  variables: ProgrammerTravailMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "soutenanceId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "travailId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "soutenanceId",
        "variableName": "soutenanceId"
      },
      {
        "kind": "Variable",
        "name": "travailId",
        "variableName": "travailId"
      }
    ],
    "concreteType": "ProgrammerTravailMutation",
    "kind": "LinkedField",
    "name": "programmerTravail",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "message",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TravauxSoutenanceType",
        "kind": "LinkedField",
        "name": "travail",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "concreteType": "SoutenanceType",
            "kind": "LinkedField",
            "name": "soutenance",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProgrammerTravailMutation",
    "selections": (v2/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProgrammerTravailMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "34e4348b4aca280c1254df0a8033e18b",
    "id": null,
    "metadata": {},
    "name": "ProgrammerTravailMutation",
    "operationKind": "mutation",
    "text": "mutation ProgrammerTravailMutation(\n  $soutenanceId: ID!\n  $travailId: ID!\n) {\n  programmerTravail(soutenanceId: $soutenanceId, travailId: $travailId) {\n    success\n    message\n    travail {\n      id\n      titre\n      etudiantNom\n      statut\n      soutenance {\n        id\n        dateSoutenance\n        heureDebut\n        heureFin\n        salle\n        modeDisplay\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "11f0ddb68a03177cc3e7a371d9941361";

export default node;
