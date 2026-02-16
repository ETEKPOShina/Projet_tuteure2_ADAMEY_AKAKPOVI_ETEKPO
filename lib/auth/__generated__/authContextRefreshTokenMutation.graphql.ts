/**
 * @generated SignedSource<<ddec0d18b250378022133914bc339f08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type authContextRefreshTokenMutation$variables = {
  refreshToken: string;
};
export type authContextRefreshTokenMutation$data = {
  readonly refreshToken: {
    readonly refreshToken: string;
    readonly token: string;
  } | null | undefined;
};
export type authContextRefreshTokenMutation = {
  response: authContextRefreshTokenMutation$data;
  variables: authContextRefreshTokenMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "refreshToken"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "refreshToken",
        "variableName": "refreshToken"
      }
    ],
    "concreteType": "Refresh",
    "kind": "LinkedField",
    "name": "refreshToken",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
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
    "name": "authContextRefreshTokenMutation",
    "selections": (v1/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "authContextRefreshTokenMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0435694e92b8838bffac20167606dad4",
    "id": null,
    "metadata": {},
    "name": "authContextRefreshTokenMutation",
    "operationKind": "mutation",
    "text": "mutation authContextRefreshTokenMutation(\n  $refreshToken: String!\n) {\n  refreshToken(refreshToken: $refreshToken) {\n    token\n    refreshToken\n  }\n}\n"
  }
};
})();

(node as any).hash = "a1f7ab3b1823c9b372809563b38b79ed";

export default node;
