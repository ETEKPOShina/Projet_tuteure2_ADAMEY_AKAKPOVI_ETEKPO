/**
 * @generated SignedSource<<a7d7b20049bf40bd54f7cc3fbd9a9f37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateSoutenanceMutation$variables = {
  capacite: number;
  dateSoutenance: any;
  heureDebut: any;
  heureFin?: any | null | undefined;
  mode: string;
  salle: string;
};
export type CreateSoutenanceMutation$data = {
  readonly createSoutenance: {
    readonly message: string | null | undefined;
    readonly soutenance: {
      readonly dateSoutenance: any | null | undefined;
      readonly heureDebut: any | null | undefined;
      readonly id: string | null | undefined;
      readonly salle: string | null | undefined;
    } | null | undefined;
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type CreateSoutenanceMutation = {
  response: CreateSoutenanceMutation$data;
  variables: CreateSoutenanceMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "capacite"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "dateSoutenance"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "heureDebut"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "heureFin"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "mode"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "salle"
},
v6 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "capacite",
        "variableName": "capacite"
      },
      {
        "kind": "Variable",
        "name": "dateSoutenance",
        "variableName": "dateSoutenance"
      },
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
        "name": "mode",
        "variableName": "mode"
      },
      {
        "kind": "Variable",
        "name": "salle",
        "variableName": "salle"
      }
    ],
    "concreteType": "CreateSoutenanceMutation",
    "kind": "LinkedField",
    "name": "createSoutenance",
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
        "concreteType": "SoutenanceType",
        "kind": "LinkedField",
        "name": "soutenance",
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
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateSoutenanceMutation",
    "selections": (v6/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateSoutenanceMutation",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "0bb8809d45156485f2fb6690e9ca889c",
    "id": null,
    "metadata": {},
    "name": "CreateSoutenanceMutation",
    "operationKind": "mutation",
    "text": "mutation CreateSoutenanceMutation(\n  $dateSoutenance: Date!\n  $heureDebut: Time!\n  $heureFin: Time\n  $salle: String!\n  $capacite: Int!\n  $mode: String!\n) {\n  createSoutenance(dateSoutenance: $dateSoutenance, heureDebut: $heureDebut, heureFin: $heureFin, salle: $salle, capacite: $capacite, mode: $mode) {\n    success\n    message\n    soutenance {\n      id\n      dateSoutenance\n      heureDebut\n      salle\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "66b4cd3828a3b2a9fab63feebafeb1ef";

export default node;
