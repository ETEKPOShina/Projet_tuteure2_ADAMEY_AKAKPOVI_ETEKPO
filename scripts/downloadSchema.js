const { getIntrospectionQuery, buildClientSchema, printSchema } = require('graphql');
const fs = require('fs');

async function downloadSchema() {
  const introspectionQuery = getIntrospectionQuery();

  const response = await fetch('https://thesis-manager-django.onrender.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Ajoutez vos headers d'authentification si nécessaire
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
    body: JSON.stringify({
      query: introspectionQuery,
    }),
  });

  const { data } = await response.json();
  const schema = buildClientSchema(data);
  const sdl = printSchema(schema);

  fs.writeFileSync('./schema.graphql', sdl);
  console.log('✅ Schéma téléchargé avec succès !');
}

downloadSchema().catch(console.error);