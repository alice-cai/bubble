// Imports the Google Cloud client library
const language = require('@google-cloud/language');
const GoogleAuth = require('google-auth-library');

//google auth
function authorize() {
    return new Promise(resolve => {
        const authFactory = new GoogleAuth();
        const jwtClient = new authFactory.JWT(
            process.env.GOOGLE_CLIENT_EMAIL, // defined in Heroku
            null,
            process.env.GOOGLE_PRIVATE_KEY, // defined in Heroku
            ['https://www.googleapis.com/auth/calendar']
        );

        jwtClient.authorize(() => resolve(jwtClient));
    });
}

// Creates a client
const client = new language.LanguageServiceClient();

async function getResponse (document) {
  // Detects entities in the document
  const [result] = await client.analyzeEntities({document});
  const entities = result.entities;

  return entities;
}

async function analyzeText(str) {
  let document = {
    content: str,
    type: 'PLAIN_TEXT',
  };
  let test = await getResponse(document);
  return test;
}

module.exports = {
  analyzeText
};