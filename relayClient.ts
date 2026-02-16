import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime'

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://thesis-manager-django.onrender.com/graphql'

function fetchGraphQL(params: any, variables: any) {
  const token =
    typeof window !== 'undefined'
      ? localStorage.getItem('accessToken')
      : null

  return fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({
      query: params.text,
      variables
    })
  }).then((response) => response.json())
}

export const relayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource())
})
