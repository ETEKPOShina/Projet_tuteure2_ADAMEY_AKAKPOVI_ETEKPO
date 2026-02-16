/**
 * @generated SignedSource<<74efc999ea556bf4bbc01c233cedaae5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type VoirDispoEnseignantQuery$variables = {
  enseignantId: string;
};
export type VoirDispoEnseignantQuery$data = {
  readonly disponibilitesEnseignant: ReadonlyArray<{
    readonly estDisponible: boolean | null | undefined;
    readonly heureDebut: any | null | undefined;
    readonly heureFin: any | null | undefined;
    readonly jourDisplay: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type VoirDispoEnseignantQuery = {
  response: VoirDispoEnseignantQuery$data;
  variables: VoirDispoEnseignantQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "enseignantId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "enseignantId",
    "variableName": "enseignantId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "jourDisplay",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "heureDebut",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "heureFin",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "estDisponible",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "VoirDispoEnseignantQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DisponibiliteEnseignantType",
        "kind": "LinkedField",
        "name": "disponibilitesEnseignant",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "ThesisQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VoirDispoEnseignantQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DisponibiliteEnseignantType",
        "kind": "LinkedField",
        "name": "disponibilitesEnseignant",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a8bfea780c2dbccda7ac6c215e59f39f",
    "id": null,
    "metadata": {},
    "name": "VoirDispoEnseignantQuery",
    "operationKind": "query",
    "text": "query VoirDispoEnseignantQuery(\n  $enseignantId: ID!\n) {\n  disponibilitesEnseignant(enseignantId: $enseignantId) {\n    jourDisplay\n    heureDebut\n    heureFin\n    estDisponible\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4bd24401d35c66a9789c6631867b44b4";

export default node;
