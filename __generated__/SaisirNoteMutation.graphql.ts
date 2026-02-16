/**
 * @generated SignedSource<<e80aa9940059da3f208fedaa55c0fa25>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SaisirNoteMutation$variables = {
  commentaire?: string | null | undefined;
  juryId: string;
  note: number;
};
export type SaisirNoteMutation$data = {
  readonly saisirNote: {
    readonly jury: {
      readonly commentaire: string | null | undefined;
      readonly id: string | null | undefined;
      readonly note: number | null | undefined;
    } | null | undefined;
    readonly message: string | null | undefined;
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type SaisirNoteMutation = {
  response: SaisirNoteMutation$data;
  variables: SaisirNoteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "commentaire"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "juryId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "note"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "commentaire",
        "variableName": "commentaire"
      },
      {
        "kind": "Variable",
        "name": "juryId",
        "variableName": "juryId"
      },
      {
        "kind": "Variable",
        "name": "note",
        "variableName": "note"
      }
    ],
    "concreteType": "SaisirNoteMutation",
    "kind": "LinkedField",
    "name": "saisirNote",
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
            "name": "note",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "commentaire",
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
    "name": "SaisirNoteMutation",
    "selections": (v3/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SaisirNoteMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "433915ac479d4dc94731c42ad02d6a8d",
    "id": null,
    "metadata": {},
    "name": "SaisirNoteMutation",
    "operationKind": "mutation",
    "text": "mutation SaisirNoteMutation(\n  $juryId: ID!\n  $note: Float!\n  $commentaire: String\n) {\n  saisirNote(juryId: $juryId, note: $note, commentaire: $commentaire) {\n    success\n    message\n    jury {\n      id\n      note\n      commentaire\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6b096ae0c169b4c91fa8af5c2623f4e8";

export default node;
