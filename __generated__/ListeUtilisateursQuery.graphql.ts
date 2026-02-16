/**
 * @generated SignedSource<<f9e6014ad248c1db8a4130190cc6c502>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ListeUtilisateursQuery$variables = {
  search?: string | null | undefined;
};
export type ListeUtilisateursQuery$data = {
  readonly users: ReadonlyArray<{
    readonly actif: boolean | null | undefined;
    readonly dateCreation: any | null | undefined;
    readonly email: string | null | undefined;
    readonly firstName: string | null | undefined;
    readonly id: string | null | undefined;
    readonly lastName: string | null | undefined;
    readonly typeUtilisateurDisplay: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type ListeUtilisateursQuery = {
  response: ListeUtilisateursQuery$data;
  variables: ListeUtilisateursQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "search",
        "variableName": "search"
      }
    ],
    "concreteType": "CustomUserType",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
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
        "name": "typeUtilisateurDisplay",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "actif",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dateCreation",
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
    "name": "ListeUtilisateursQuery",
    "selections": (v1/*: any*/),
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListeUtilisateursQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1d604817387c498a9de8c15e6501adb4",
    "id": null,
    "metadata": {},
    "name": "ListeUtilisateursQuery",
    "operationKind": "query",
    "text": "query ListeUtilisateursQuery(\n  $search: String\n) {\n  users(search: $search) {\n    id\n    email\n    firstName\n    lastName\n    typeUtilisateurDisplay\n    actif\n    dateCreation\n  }\n}\n"
  }
};
})();

(node as any).hash = "457a1c41ec9468abf928398ef5199b8f";

export default node;
