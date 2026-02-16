/**
 * @generated SignedSource<<a2f08ec918265f688b4a0fb2a8a7d62a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type StudentDashboardUpdateFiliereMutation$variables = {
  filiereId: string;
};
export type StudentDashboardUpdateFiliereMutation$data = {
  readonly updateProfile: {
    readonly success: boolean | null | undefined;
    readonly user: {
      readonly id: string | null | undefined;
      readonly profilEtudiant: {
        readonly filiere: {
          readonly id: string | null | undefined;
          readonly nom: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type StudentDashboardUpdateFiliereMutation = {
  response: StudentDashboardUpdateFiliereMutation$data;
  variables: StudentDashboardUpdateFiliereMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filiereId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filiereId",
    "variableName": "filiereId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "StructureAcademiqueType",
  "kind": "LinkedField",
  "name": "filiere",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nom",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "StudentDashboardUpdateFiliereMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateProfileMutation",
        "kind": "LinkedField",
        "name": "updateProfile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CustomUserType",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EtudiantType",
                "kind": "LinkedField",
                "name": "profilEtudiant",
                "plural": false,
                "selections": [
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StudentDashboardUpdateFiliereMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateProfileMutation",
        "kind": "LinkedField",
        "name": "updateProfile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CustomUserType",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EtudiantType",
                "kind": "LinkedField",
                "name": "profilEtudiant",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a2fb0a2991c9863640ad0b4026e58d5d",
    "id": null,
    "metadata": {},
    "name": "StudentDashboardUpdateFiliereMutation",
    "operationKind": "mutation",
    "text": "mutation StudentDashboardUpdateFiliereMutation(\n  $filiereId: ID!\n) {\n  updateProfile(filiereId: $filiereId) {\n    success\n    user {\n      id\n      profilEtudiant {\n        filiere {\n          id\n          nom\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dbfc79accc7920ecaa8afae67c95adaa";

export default node;
