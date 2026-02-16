/**
 * @generated SignedSource<<017c39274522c27a3f13821fb441f76a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type RejeterTravailMutation$variables = {
  id: string;
  motif: string;
};
export type RejeterTravailMutation$data = {
  readonly rejeterTravail: {
    readonly message: string | null | undefined;
    readonly success: boolean | null | undefined;
    readonly travail: {
      readonly id: string | null | undefined;
      readonly motifRejet: string | null | undefined;
      readonly statut: string | null | undefined;
      readonly statutDisplay: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type RejeterTravailMutation = {
  response: RejeterTravailMutation$data;
  variables: RejeterTravailMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "motif"
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
      },
      {
        "kind": "Variable",
        "name": "motif",
        "variableName": "motif"
      }
    ],
    "concreteType": "RejeterTravailMutation",
    "kind": "LinkedField",
    "name": "rejeterTravail",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "motifRejet",
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
    "name": "RejeterTravailMutation",
    "selections": (v1/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RejeterTravailMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3c411b3e91fe7911068d8bddff5c9383",
    "id": null,
    "metadata": {},
    "name": "RejeterTravailMutation",
    "operationKind": "mutation",
    "text": "mutation RejeterTravailMutation(\n  $id: ID!\n  $motif: String!\n) {\n  rejeterTravail(id: $id, motif: $motif) {\n    success\n    message\n    travail {\n      id\n      statut\n      statutDisplay\n      motifRejet\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "341267171fb6b2affdb4ed7ceb067f75";

export default node;
