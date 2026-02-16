/**
 * @generated SignedSource<<555ae0f55503ae0036c3fa962cbf8447>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ToggleUserStatusMutation$variables = {
  actif: boolean;
  userId: string;
};
export type ToggleUserStatusMutation$data = {
  readonly validerCompte: {
    readonly message: string | null | undefined;
    readonly success: boolean | null | undefined;
    readonly user: {
      readonly actif: boolean | null | undefined;
      readonly id: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ToggleUserStatusMutation = {
  response: ToggleUserStatusMutation$data;
  variables: ToggleUserStatusMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "actif"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "actif",
        "variableName": "actif"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "ValiderCompteMutation",
    "kind": "LinkedField",
    "name": "validerCompte",
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
        "concreteType": "CustomUserType",
        "kind": "LinkedField",
        "name": "user",
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
            "name": "actif",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ToggleUserStatusMutation",
    "selections": (v2/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ToggleUserStatusMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "3767a5d4142f86e62b19dfb04b8a3405",
    "id": null,
    "metadata": {},
    "name": "ToggleUserStatusMutation",
    "operationKind": "mutation",
    "text": "mutation ToggleUserStatusMutation(\n  $userId: ID!\n  $actif: Boolean!\n) {\n  validerCompte(userId: $userId, actif: $actif) {\n    success\n    message\n    user {\n      id\n      actif\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "41174d1c14e452eb96ea7ee18dfdf83c";

export default node;
