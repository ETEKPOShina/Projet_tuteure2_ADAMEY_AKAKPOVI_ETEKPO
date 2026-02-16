/**
 * @generated SignedSource<<9c453e3c006dc49a7801c100936de399>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type authContextVerifyQuery$variables = Record<PropertyKey, never>;
export type authContextVerifyQuery$data = {
  readonly me: {
    readonly actif: boolean | null | undefined;
    readonly email: string | null | undefined;
    readonly firstName: string | null | undefined;
    readonly id: string | null | undefined;
    readonly lastName: string | null | undefined;
    readonly typeUtilisateur: string | null | undefined;
  } | null | undefined;
};
export type authContextVerifyQuery = {
  response: authContextVerifyQuery$data;
  variables: authContextVerifyQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CustomUserType",
    "kind": "LinkedField",
    "name": "me",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "authContextVerifyQuery",
    "selections": (v0/*: any*/),
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "authContextVerifyQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "90ab6236f39a2346bd26f95a697d02ef",
    "id": null,
    "metadata": {},
    "name": "authContextVerifyQuery",
    "operationKind": "query",
    "text": "query authContextVerifyQuery {\n  me {\n    id\n    email\n    firstName\n    lastName\n    typeUtilisateur\n    actif\n  }\n}\n"
  }
};
})();

(node as any).hash = "6ba7a994ab8b3128cf8de2c79badaa94";

export default node;
