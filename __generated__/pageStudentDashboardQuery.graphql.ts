/**
 * @generated SignedSource<<05e6a1586b9b91e1c2444a09bed04512>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type pageStudentDashboardQuery$variables = Record<PropertyKey, never>;
export type pageStudentDashboardQuery$data = {
  readonly me: {
    readonly id: string | null | undefined;
    readonly profilEtudiant: {
      readonly filiere: {
        readonly id: string | null | undefined;
        readonly nom: string | null | undefined;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly premiereUniversite: {
    readonly enfants: ReadonlyArray<{
      readonly enfants: ReadonlyArray<{
        readonly enfants: ReadonlyArray<{
          readonly id: string | null | undefined;
          readonly nom: string | null | undefined;
          readonly type: string | null | undefined;
        } | null | undefined> | null | undefined;
        readonly id: string | null | undefined;
        readonly nom: string | null | undefined;
        readonly type: string | null | undefined;
      } | null | undefined> | null | undefined;
      readonly id: string | null | undefined;
      readonly nom: string | null | undefined;
      readonly type: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly id: string | null | undefined;
    readonly nom: string | null | undefined;
    readonly type: string | null | undefined;
  } | null | undefined;
};
export type pageStudentDashboardQuery = {
  response: pageStudentDashboardQuery$data;
  variables: pageStudentDashboardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nom",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "StructureAcademiqueType",
  "kind": "LinkedField",
  "name": "filiere",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/)
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "StructureAcademiqueType",
  "kind": "LinkedField",
  "name": "premiereUniversite",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "StructureAcademiqueType",
      "kind": "LinkedField",
      "name": "enfants",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "StructureAcademiqueType",
          "kind": "LinkedField",
          "name": "enfants",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "StructureAcademiqueType",
              "kind": "LinkedField",
              "name": "enfants",
              "plural": true,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
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
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageStudentDashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CustomUserType",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EtudiantType",
            "kind": "LinkedField",
            "name": "profilEtudiant",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v4/*: any*/)
    ],
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pageStudentDashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CustomUserType",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EtudiantType",
            "kind": "LinkedField",
            "name": "profilEtudiant",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v4/*: any*/)
    ]
  },
  "params": {
    "cacheID": "88b158e66f23db5a3a7d3d51aad5176c",
    "id": null,
    "metadata": {},
    "name": "pageStudentDashboardQuery",
    "operationKind": "query",
    "text": "query pageStudentDashboardQuery {\n  me {\n    id\n    profilEtudiant {\n      filiere {\n        id\n        nom\n      }\n      id\n    }\n  }\n  premiereUniversite {\n    id\n    nom\n    type\n    enfants {\n      id\n      nom\n      type\n      enfants {\n        id\n        nom\n        type\n        enfants {\n          id\n          nom\n          type\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a7c849b8c1958153dc0f8d041855d75a";

export default node;
