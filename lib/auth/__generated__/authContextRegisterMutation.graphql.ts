/**
 * @generated SignedSource<<91b0d57ca867ffd9e93aadd071a2efc4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type authContextRegisterMutation$variables = {
  annee?: number | null | undefined;
  departementId?: string | null | undefined;
  email: string;
  filiereId?: string | null | undefined;
  firstName?: string | null | undefined;
  grade?: string | null | undefined;
  lastName?: string | null | undefined;
  matricule?: string | null | undefined;
  password: string;
  specialite?: string | null | undefined;
  typeUtilisateur: string;
};
export type authContextRegisterMutation$data = {
  readonly signup: {
    readonly accessToken: string | null | undefined;
    readonly message: string | null | undefined;
    readonly refreshToken: string | null | undefined;
    readonly success: boolean | null | undefined;
    readonly user: {
      readonly actif: boolean | null | undefined;
      readonly email: string | null | undefined;
      readonly firstName: string | null | undefined;
      readonly id: string | null | undefined;
      readonly lastName: string | null | undefined;
      readonly typeUtilisateur: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type authContextRegisterMutation = {
  response: authContextRegisterMutation$data;
  variables: authContextRegisterMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "annee"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "departementId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "filiereId"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "firstName"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "grade"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lastName"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "matricule"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "specialite"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "typeUtilisateur"
},
v11 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "annee",
        "variableName": "annee"
      },
      {
        "kind": "Variable",
        "name": "departementId",
        "variableName": "departementId"
      },
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "filiereId",
        "variableName": "filiereId"
      },
      {
        "kind": "Variable",
        "name": "firstName",
        "variableName": "firstName"
      },
      {
        "kind": "Variable",
        "name": "grade",
        "variableName": "grade"
      },
      {
        "kind": "Variable",
        "name": "lastName",
        "variableName": "lastName"
      },
      {
        "kind": "Variable",
        "name": "matricule",
        "variableName": "matricule"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "specialite",
        "variableName": "specialite"
      },
      {
        "kind": "Variable",
        "name": "typeUtilisateur",
        "variableName": "typeUtilisateur"
      }
    ],
    "concreteType": "SignupMutation",
    "kind": "LinkedField",
    "name": "signup",
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
        "concreteType": "CustomUserType",
        "kind": "LinkedField",
        "name": "user",
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
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "typeUtilisateur",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "actif",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessToken",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "refreshToken",
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
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "authContextRegisterMutation",
    "selections": (v11/*: any*/),
    "type": "ThesisMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v8/*: any*/),
      (v4/*: any*/),
      (v6/*: any*/),
      (v10/*: any*/),
      (v7/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v9/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "authContextRegisterMutation",
    "selections": (v11/*: any*/)
  },
  "params": {
    "cacheID": "5bc36ba6bf376ed25b67461db739179c",
    "id": null,
    "metadata": {},
    "name": "authContextRegisterMutation",
    "operationKind": "mutation",
    "text": "mutation authContextRegisterMutation(\n  $email: String!\n  $password: String!\n  $firstName: String\n  $lastName: String\n  $typeUtilisateur: String!\n  $matricule: String\n  $annee: Int\n  $filiereId: ID\n  $grade: String\n  $specialite: String\n  $departementId: ID\n) {\n  signup(email: $email, password: $password, firstName: $firstName, lastName: $lastName, typeUtilisateur: $typeUtilisateur, matricule: $matricule, annee: $annee, filiereId: $filiereId, grade: $grade, specialite: $specialite, departementId: $departementId) {\n    success\n    message\n    user {\n      id\n      email\n      firstName\n      lastName\n      typeUtilisateur\n      actif\n    }\n    accessToken\n    refreshToken\n  }\n}\n"
  }
};
})();

(node as any).hash = "8e9afd8ca0ff05c33ea1a6ea130f74d9";

export default node;
