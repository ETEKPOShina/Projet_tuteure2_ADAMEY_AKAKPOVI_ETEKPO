/**
 * @generated SignedSource<<e0f3a19f8c411aedd19301f42c2070fa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type authContextFetchCurrentUserQuery$variables = Record<PropertyKey, never>;
export type authContextFetchCurrentUserQuery$data = {
  readonly me: {
    readonly actif: boolean | null | undefined;
    readonly email: string | null | undefined;
    readonly firstName: string | null | undefined;
    readonly id: string | null | undefined;
    readonly lastName: string | null | undefined;
    readonly typeUtilisateur: string | null | undefined;
  } | null | undefined;
};
export type authContextFetchCurrentUserQuery = {
  response: authContextFetchCurrentUserQuery$data;
  variables: authContextFetchCurrentUserQuery$variables;
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
    "name": "authContextFetchCurrentUserQuery",
    "selections": (v0/*: any*/),
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "authContextFetchCurrentUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c3da4bb6b927d43f0a892eb43b767c9a",
    "id": null,
    "metadata": {},
    "name": "authContextFetchCurrentUserQuery",
    "operationKind": "query",
    "text": "query authContextFetchCurrentUserQuery {\n  me {\n    id\n    email\n    firstName\n    lastName\n    typeUtilisateur\n    actif\n  }\n}\n"
  }
};
})();

(node as any).hash = "ac9573d34cb0d5664019eaa3829ab922";

export default node;
