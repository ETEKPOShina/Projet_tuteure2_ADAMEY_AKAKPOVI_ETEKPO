/**
 * @generated SignedSource<<7493a0e52dcd5ee2e75cb2eff70ebde6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateDisponibiliteMutation$variables = {
  heureDebut: any;
  heureFin: any;
  jourSemaine: string;
};
export type CreateDisponibiliteMutation$data = {
  readonly createDisponibilite: {
    readonly disponibilite: {
      readonly estDisponible: boolean | null | undefined;
      readonly id: string | null | undefined;
      readonly jourDisplay: string | null | undefined;
    } | null | undefined;
    readonly message: string | null | undefined;
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type CreateDisponibiliteMutation = {
  response: CreateDisponibiliteMutation$data;
  variables: CreateDisponibiliteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "heureDebut"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "heureFin"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "jourSemaine"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "heureDebut",
        "variableName": "heureDebut"
      },
      {
        "kind": "Variable",
        "name": "heureFin",
        "variableName": "heureFin"
      },
      {
        "kind": "Variable",
        "name": "jourSemaine",
        "variableName": "jourSemaine"
      }
    ],
    "concreteType": "CreateDisponibiliteMutation",
    "kind": "LinkedField",
    "name": "createDisponibilite",
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
        "concreteType": "DisponibiliteEnseignantType",
        "kind": "LinkedField",
        "name": "disponibilite",
        "plural": false,
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
            "name": "jourDisplay",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "estDisponible",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateDisponibiliteMutation",
    "selections": (v3/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateDisponibiliteMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "fe9d8dab3c2407d6adf70e18de254312",
    "id": null,
    "metadata": {},
    "name": "CreateDisponibiliteMutation",
    "operationKind": "mutation",
    "text": "mutation CreateDisponibiliteMutation(\n  $jourSemaine: String!\n  $heureDebut: Time!\n  $heureFin: Time!\n) {\n  createDisponibilite(jourSemaine: $jourSemaine, heureDebut: $heureDebut, heureFin: $heureFin) {\n    success\n    message\n    disponibilite {\n      id\n      jourDisplay\n      estDisponible\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "83f7d520ebe8e496f28a354bb2b16eea";

export default node;
