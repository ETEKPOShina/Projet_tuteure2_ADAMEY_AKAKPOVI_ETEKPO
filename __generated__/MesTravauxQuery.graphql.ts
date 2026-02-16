/**
 * @generated SignedSource<<c5ccbad358a6a83209464802739929a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type MesTravauxQuery$variables = Record<PropertyKey, never>;
export type MesTravauxQuery$data = {
  readonly mesTravaux: ReadonlyArray<{
    readonly dateSoumission: any | null | undefined;
    readonly documents: ReadonlyArray<{
      readonly dateDepot: any | null | undefined;
      readonly id: string | null | undefined;
      readonly nomFichier: string | null | undefined;
      readonly typeDisplay: string | null | undefined;
      readonly uri: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly id: string | null | undefined;
    readonly motifRejet: string | null | undefined;
    readonly progression: {
      readonly etape: string | null | undefined;
      readonly message: string | null | undefined;
      readonly pourcentage: number | null | undefined;
    } | null | undefined;
    readonly soutenance: {
      readonly dateSoutenance: any | null | undefined;
      readonly heureDebut: any | null | undefined;
      readonly id: string | null | undefined;
      readonly jurys: ReadonlyArray<{
        readonly enseignantNom: string | null | undefined;
        readonly roleDisplay: string | null | undefined;
      } | null | undefined> | null | undefined;
      readonly modeDisplay: string | null | undefined;
      readonly salle: string | null | undefined;
    } | null | undefined;
    readonly statut: string | null | undefined;
    readonly statutDisplay: string | null | undefined;
    readonly titre: string | null | undefined;
    readonly typeDisplay: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type MesTravauxQuery = {
  response: MesTravauxQuery$data;
  variables: MesTravauxQuery$variables;
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
  "name": "titre",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "typeDisplay",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateSoumission",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "statut",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "statutDisplay",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "motifRejet",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "ProgressionType",
  "kind": "LinkedField",
  "name": "progression",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pourcentage",
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
      "kind": "ScalarField",
      "name": "etape",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateSoutenance",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "heureDebut",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "salle",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modeDisplay",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "enseignantNom",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "roleDisplay",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "DocumentType",
  "kind": "LinkedField",
  "name": "documents",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nomFichier",
      "storageKey": null
    },
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "uri",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dateDepot",
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
    "name": "MesTravauxQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TravauxSoutenanceType",
        "kind": "LinkedField",
        "name": "mesTravaux",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "SoutenanceType",
            "kind": "LinkedField",
            "name": "soutenance",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "JuryType",
                "kind": "LinkedField",
                "name": "jurys",
                "plural": true,
                "selections": [
                  (v12/*: any*/),
                  (v13/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v14/*: any*/)
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
    "name": "MesTravauxQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TravauxSoutenanceType",
        "kind": "LinkedField",
        "name": "mesTravaux",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "SoutenanceType",
            "kind": "LinkedField",
            "name": "soutenance",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "JuryType",
                "kind": "LinkedField",
                "name": "jurys",
                "plural": true,
                "selections": [
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v14/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "53d6ab556b495008fd16417c88f959d6",
    "id": null,
    "metadata": {},
    "name": "MesTravauxQuery",
    "operationKind": "query",
    "text": "query MesTravauxQuery {\n  mesTravaux {\n    id\n    titre\n    typeDisplay\n    dateSoumission\n    statut\n    statutDisplay\n    motifRejet\n    progression {\n      pourcentage\n      message\n      etape\n    }\n    soutenance {\n      id\n      dateSoutenance\n      heureDebut\n      salle\n      modeDisplay\n      jurys {\n        enseignantNom\n        roleDisplay\n        id\n      }\n    }\n    documents {\n      id\n      nomFichier\n      typeDisplay\n      uri\n      dateDepot\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0474ee181dd109a6fadc4da7a9ad337a";

export default node;
