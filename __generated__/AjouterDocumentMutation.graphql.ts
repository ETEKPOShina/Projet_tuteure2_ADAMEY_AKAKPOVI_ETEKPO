/**
 * @generated SignedSource<<acead3147d13ccffb8e95f5db66cbc1d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AjouterDocumentMutation$variables = {
  nomFichier: string;
  tailleOctets?: number | null | undefined;
  travailId: string;
  typeDocument: string;
  url: string;
};
export type AjouterDocumentMutation$data = {
  readonly ajouterDocument: {
    readonly document: {
      readonly id: string | null | undefined;
      readonly nomFichier: string | null | undefined;
      readonly typeDocument: string | null | undefined;
      readonly uri: string | null | undefined;
    } | null | undefined;
    readonly message: string | null | undefined;
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type AjouterDocumentMutation = {
  response: AjouterDocumentMutation$data;
  variables: AjouterDocumentMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "nomFichier"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tailleOctets"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "travailId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "typeDocument"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "url"
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "nomFichier",
        "variableName": "nomFichier"
      },
      {
        "kind": "Variable",
        "name": "tailleOctets",
        "variableName": "tailleOctets"
      },
      {
        "kind": "Variable",
        "name": "travailId",
        "variableName": "travailId"
      },
      {
        "kind": "Variable",
        "name": "typeDocument",
        "variableName": "typeDocument"
      },
      {
        "kind": "Variable",
        "name": "url",
        "variableName": "url"
      }
    ],
    "concreteType": "AjouterDocumentMutation",
    "kind": "LinkedField",
    "name": "ajouterDocument",
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
        "concreteType": "DocumentType",
        "kind": "LinkedField",
        "name": "document",
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
            "name": "nomFichier",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "typeDocument",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "uri",
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
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AjouterDocumentMutation",
    "selections": (v5/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "AjouterDocumentMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "f3d6b7e817a630a5501346fa533f7ae9",
    "id": null,
    "metadata": {},
    "name": "AjouterDocumentMutation",
    "operationKind": "mutation",
    "text": "mutation AjouterDocumentMutation(\n  $travailId: ID!\n  $nomFichier: String!\n  $typeDocument: String!\n  $url: String!\n  $tailleOctets: Int\n) {\n  ajouterDocument(travailId: $travailId, nomFichier: $nomFichier, typeDocument: $typeDocument, url: $url, tailleOctets: $tailleOctets) {\n    success\n    message\n    document {\n      id\n      nomFichier\n      typeDocument\n      uri\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3417cd2569789711cafabf2f55e8b422";

export default node;
