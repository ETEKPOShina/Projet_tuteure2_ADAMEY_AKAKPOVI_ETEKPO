/**
 * @generated SignedSource<<5e8b9f97c4509c670a1f96e050ea7f3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AssignerJuryMutation$variables = {
  enseignantId: string;
  role: string;
  soutenanceId: string;
};
export type AssignerJuryMutation$data = {
  readonly assignerJury: {
    readonly jury: {
      readonly enseignantNom: string | null | undefined;
      readonly id: string | null | undefined;
      readonly roleDisplay: string | null | undefined;
    } | null | undefined;
    readonly message: string | null | undefined;
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type AssignerJuryMutation = {
  response: AssignerJuryMutation$data;
  variables: AssignerJuryMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "enseignantId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "role"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "soutenanceId"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "enseignantId",
        "variableName": "enseignantId"
      },
      {
        "kind": "Variable",
        "name": "role",
        "variableName": "role"
      },
      {
        "kind": "Variable",
        "name": "soutenanceId",
        "variableName": "soutenanceId"
      }
    ],
    "concreteType": "AssignerJuryMutation",
    "kind": "LinkedField",
    "name": "assignerJury",
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
        "concreteType": "JuryType",
        "kind": "LinkedField",
        "name": "jury",
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
            "name": "roleDisplay",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "enseignantNom",
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
    "name": "AssignerJuryMutation",
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
    "name": "AssignerJuryMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "be952462506a2c96dc8af016c54ba046",
    "id": null,
    "metadata": {},
    "name": "AssignerJuryMutation",
    "operationKind": "mutation",
    "text": "mutation AssignerJuryMutation(\n  $soutenanceId: ID!\n  $enseignantId: ID!\n  $role: String!\n) {\n  assignerJury(soutenanceId: $soutenanceId, enseignantId: $enseignantId, role: $role) {\n    success\n    message\n    jury {\n      id\n      roleDisplay\n      enseignantNom\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "08eb76bfdab9ace8483c3b841b8266d4";

export default node;
