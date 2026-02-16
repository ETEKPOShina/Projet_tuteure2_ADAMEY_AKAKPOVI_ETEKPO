/**
 * @generated SignedSource<<537e5602982fabfa40f961ee0b6f4eb1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type authContextLoginMutation$variables = {
  email: string;
  password: string;
};
export type authContextLoginMutation$data = {
  readonly login: {
    readonly accessToken: string | null | undefined;
    readonly message: string | null | undefined;
    readonly refreshToken: string | null | undefined;
    readonly success: boolean | null | undefined;
    readonly user: {
      readonly actif: boolean | null | undefined;
      readonly email: string | null | undefined;
      readonly firstName: string | null | undefined;
      readonly id: string | null | undefined;
      readonly lastName: string | null | undefined;
      readonly typeUtilisateur: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type authContextLoginMutation = {
  response: authContextLoginMutation$data;
  variables: authContextLoginMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "LoginMutation",
    "kind": "LinkedField",
    "name": "login",
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
            "name": "email",
            "storageKey": null
          },
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "typeUtilisateur",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessToken",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "refreshToken",
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
    "name": "authContextLoginMutation",
    "selections": (v1/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "authContextLoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "682e929e9f90feefe242ef417f411612",
    "id": null,
    "metadata": {},
    "name": "authContextLoginMutation",
    "operationKind": "mutation",
    "text": "mutation authContextLoginMutation(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password) {\n    success\n    message\n    user {\n      id\n      email\n      firstName\n      lastName\n      typeUtilisateur\n      actif\n    }\n    accessToken\n    refreshToken\n  }\n}\n"
  }
};
})();

(node as any).hash = "a03981abf5811b0db7624c21e114f128";

export default node;
