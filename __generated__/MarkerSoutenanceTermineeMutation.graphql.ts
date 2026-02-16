/**
 * @generated SignedSource<<36e3c0eec3d77bc3049452e10e29cf21>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type MarkerSoutenanceTermineeMutation$variables = {
  id: string;
};
export type MarkerSoutenanceTermineeMutation$data = {
  readonly marquerSoutenanceTerminee: {
    readonly message: string | null | undefined;
    readonly soutenance: {
      readonly id: string | null | undefined;
      readonly statutDisplay: string | null | undefined;
    } | null | undefined;
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type MarkerSoutenanceTermineeMutation = {
  response: MarkerSoutenanceTermineeMutation$data;
  variables: MarkerSoutenanceTermineeMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "MarquerSoutenanceTermineeMutation",
    "kind": "LinkedField",
    "name": "marquerSoutenanceTerminee",
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
            "name": "statutDisplay",
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
    "name": "MarkerSoutenanceTermineeMutation",
    "selections": (v1/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarkerSoutenanceTermineeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cc4dd113a37b5afad5ebe54c45770bd5",
    "id": null,
    "metadata": {},
    "name": "MarkerSoutenanceTermineeMutation",
    "operationKind": "mutation",
    "text": "mutation MarkerSoutenanceTermineeMutation(\n  $id: ID!\n) {\n  marquerSoutenanceTerminee(id: $id) {\n    success\n    message\n    soutenance {\n      id\n      statutDisplay\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "48fcd778b996786de5db62fa3c40ca47";

export default node;
