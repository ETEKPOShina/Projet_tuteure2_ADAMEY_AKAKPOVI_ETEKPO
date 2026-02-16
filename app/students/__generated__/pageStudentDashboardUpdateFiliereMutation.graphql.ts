/**
 * @generated SignedSource<<61b989793613ee760ae0ea061c5b4436>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type pageStudentDashboardUpdateFiliereMutation$variables = {
  filiereId: string;
};
export type pageStudentDashboardUpdateFiliereMutation$data = {
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
export type pageStudentDashboardUpdateFiliereMutation = {
  response: pageStudentDashboardUpdateFiliereMutation$data;
  variables: pageStudentDashboardUpdateFiliereMutation$variables;
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
    "name": "pageStudentDashboardUpdateFiliereMutation",
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
    "name": "pageStudentDashboardUpdateFiliereMutation",
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
    "cacheID": "17eb9d0df9dfcacb1bd699f50dd3cc6d",
    "id": null,
    "metadata": {},
    "name": "pageStudentDashboardUpdateFiliereMutation",
    "operationKind": "mutation",
    "text": "mutation pageStudentDashboardUpdateFiliereMutation(\n  $filiereId: ID!\n) {\n  updateProfile(filiereId: $filiereId) {\n    success\n    user {\n      id\n      profilEtudiant {\n        filiere {\n          id\n          nom\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "614b953644f9d6b380a16511b57e3624";

export default node;
