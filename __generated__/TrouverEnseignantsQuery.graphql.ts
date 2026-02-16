/**
 * @generated SignedSource<<dc662d8cf80509f2f37923bd009e2bee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TrouverEnseignantsQuery$variables = Record<PropertyKey, never>;
export type TrouverEnseignantsQuery$data = {
  readonly enseignants: ReadonlyArray<{
    readonly disponibilites: ReadonlyArray<{
      readonly heureDebut: any | null | undefined;
      readonly heureFin: any | null | undefined;
      readonly jourDisplay: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly gradeDisplay: string | null | undefined;
    readonly id: string | null | undefined;
    readonly specialite: string | null | undefined;
    readonly utilisateur: {
      readonly firstName: string | null | undefined;
      readonly lastName: string | null | undefined;
    } | null | undefined;
  } | null | undefined> | null | undefined;
};
export type TrouverEnseignantsQuery = {
  response: TrouverEnseignantsQuery$data;
  variables: TrouverEnseignantsQuery$variables;
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
  "name": "firstName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gradeDisplay",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "specialite",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "jourDisplay",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "heureDebut",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "heureFin",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TrouverEnseignantsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "EnseignantType",
        "kind": "LinkedField",
        "name": "enseignants",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CustomUserType",
            "kind": "LinkedField",
            "name": "utilisateur",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "DisponibiliteEnseignantType",
            "kind": "LinkedField",
            "name": "disponibilites",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TrouverEnseignantsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "EnseignantType",
        "kind": "LinkedField",
        "name": "enseignants",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CustomUserType",
            "kind": "LinkedField",
            "name": "utilisateur",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "DisponibiliteEnseignantType",
            "kind": "LinkedField",
            "name": "disponibilites",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d0bef282c0d8af663811137c35f56147",
    "id": null,
    "metadata": {},
    "name": "TrouverEnseignantsQuery",
    "operationKind": "query",
    "text": "query TrouverEnseignantsQuery {\n  enseignants {\n    id\n    utilisateur {\n      firstName\n      lastName\n      id\n    }\n    gradeDisplay\n    specialite\n    disponibilites {\n      jourDisplay\n      heureDebut\n      heureFin\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "46054c05cfb2d95199ebdd6561ca7ef9";

export default node;
