/**
 * @generated SignedSource<<24766e4cafa82d3ae301cb13e05d0634>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccepterTravailMutation$variables = {
  id: string;
};
export type AccepterTravailMutation$data = {
  readonly accepterTravail: {
    readonly message: string | null | undefined;
    readonly success: boolean | null | undefined;
    readonly travail: {
      readonly id: string | null | undefined;
      readonly statut: string | null | undefined;
      readonly statutDisplay: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type AccepterTravailMutation = {
  response: AccepterTravailMutation$data;
  variables: AccepterTravailMutation$variables;
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
    "concreteType": "AccepterTravailMutation",
    "kind": "LinkedField",
    "name": "accepterTravail",
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
            "name": "statut",
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
    "name": "AccepterTravailMutation",
    "selections": (v1/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AccepterTravailMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0a0ee8cb5a61adff6aeef4d39b3477af",
    "id": null,
    "metadata": {},
    "name": "AccepterTravailMutation",
    "operationKind": "mutation",
    "text": "mutation AccepterTravailMutation(\n  $id: ID!\n) {\n  accepterTravail(id: $id) {\n    success\n    message\n    travail {\n      id\n      statut\n      statutDisplay\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b593b5bd5bcea06f9abb20b6d4419514";

export default node;
