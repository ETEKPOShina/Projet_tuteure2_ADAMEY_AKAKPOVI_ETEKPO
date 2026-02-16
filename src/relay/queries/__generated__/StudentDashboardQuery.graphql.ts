/**
 * @generated SignedSource<<cba55c00ad9ac7a4e2230d49174d081c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type StudentDashboardQuery$variables = Record<PropertyKey, never>;
export type StudentDashboardQuery$data = {
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
export type StudentDashboardQuery = {
  response: StudentDashboardQuery$data;
  variables: StudentDashboardQuery$variables;
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
    "name": "StudentDashboardQuery",
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
    "name": "StudentDashboardQuery",
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
    "cacheID": "124851f21a186787e41d3bab2ce2dfe5",
    "id": null,
    "metadata": {},
    "name": "StudentDashboardQuery",
    "operationKind": "query",
    "text": "query StudentDashboardQuery {\n  me {\n    id\n    profilEtudiant {\n      filiere {\n        id\n        nom\n      }\n      id\n    }\n  }\n  premiereUniversite {\n    id\n    nom\n    type\n    enfants {\n      id\n      nom\n      type\n      enfants {\n        id\n        nom\n        type\n        enfants {\n          id\n          nom\n          type\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "43d48681e306906043d654b31d177c8b";

export default node;
