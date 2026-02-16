/**
 * @generated SignedSource<<c99dfca13a706311cfb1eaca9ec9b696>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SubmitTravailMutation$variables = {
  encadrantId?: string | null | undefined;
  motsCles?: string | null | undefined;
  resume?: string | null | undefined;
  titre: string;
  typeTravail: string;
};
export type SubmitTravailMutation$data = {
  readonly submitTravail: {
    readonly message: string | null | undefined;
    readonly success: boolean | null | undefined;
    readonly travail: {
      readonly id: string | null | undefined;
      readonly statut: string | null | undefined;
      readonly titre: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type SubmitTravailMutation = {
  response: SubmitTravailMutation$data;
  variables: SubmitTravailMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "encadrantId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "motsCles"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "resume"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "titre"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "typeTravail"
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "encadrantId",
        "variableName": "encadrantId"
      },
      {
        "kind": "Variable",
        "name": "motsCles",
        "variableName": "motsCles"
      },
      {
        "kind": "Variable",
        "name": "resume",
        "variableName": "resume"
      },
      {
        "kind": "Variable",
        "name": "titre",
        "variableName": "titre"
      },
      {
        "kind": "Variable",
        "name": "typeTravail",
        "variableName": "typeTravail"
      }
    ],
    "concreteType": "SubmitTravauxMutation",
    "kind": "LinkedField",
    "name": "submitTravail",
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
        "concreteType": "TravauxSoutenanceType",
        "kind": "LinkedField",
        "name": "travail",
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
            "name": "titre",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "statut",
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
    "name": "SubmitTravailMutation",
    "selections": (v5/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SubmitTravailMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "01084fe588222931929ba5ade707c49a",
    "id": null,
    "metadata": {},
    "name": "SubmitTravailMutation",
    "operationKind": "mutation",
    "text": "mutation SubmitTravailMutation(\n  $titre: String!\n  $typeTravail: String!\n  $resume: String\n  $motsCles: String\n  $encadrantId: ID\n) {\n  submitTravail(titre: $titre, typeTravail: $typeTravail, resume: $resume, motsCles: $motsCles, encadrantId: $encadrantId) {\n    success\n    message\n    travail {\n      id\n      titre\n      statut\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "599c9a5422a85b99f7caeed04f1848d4";

export default node;
