/**
 * @generated SignedSource<<e9afd5a30898039fa011880a8d9ecfcb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DetailsTravailQuery$variables = {
  id: string;
};
export type DetailsTravailQuery$data = {
  readonly travail: {
    readonly documents: ReadonlyArray<{
      readonly id: string | null | undefined;
      readonly nomFichier: string | null | undefined;
      readonly typeDisplay: string | null | undefined;
      readonly uri: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly etudiantNom: string | null | undefined;
    readonly id: string | null | undefined;
    readonly resume: string | null | undefined;
    readonly titre: string | null | undefined;
    readonly typeDisplay: string | null | undefined;
  } | null | undefined;
};
export type DetailsTravailQuery = {
  response: DetailsTravailQuery$data;
  variables: DetailsTravailQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "typeDisplay",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "TravauxSoutenanceType",
    "kind": "LinkedField",
    "name": "travail",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "titre",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "resume",
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "etudiantNom",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "DocumentType",
        "kind": "LinkedField",
        "name": "documents",
        "plural": true,
        "selections": [
          (v1/*: any*/),
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
            "name": "uri",
            "storageKey": null
          },
          (v2/*: any*/)
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
    "name": "DetailsTravailQuery",
    "selections": (v3/*: any*/),
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DetailsTravailQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "8549f464bc4befc910abd964adde55aa",
    "id": null,
    "metadata": {},
    "name": "DetailsTravailQuery",
    "operationKind": "query",
    "text": "query DetailsTravailQuery(\n  $id: ID!\n) {\n  travail(id: $id) {\n    id\n    titre\n    resume\n    typeDisplay\n    etudiantNom\n    documents {\n      id\n      nomFichier\n      uri\n      typeDisplay\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f87eebbadfc5241bb8c31259bcc2b5c5";

export default node;
