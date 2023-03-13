import getJSON from './getJSON'

const prompt = (url, description) => `Strictly generate a JSON response.
given- URL and it's description, respond with maximum 6 relevant, lowercase, single word tags for the website, a short description & title. Also, use your knowledge of the web.
URL: ${url}
Description: ${description}
OUTPUT FORMAT: { "tags": ["tag1", ..], "description": "", "title": "", "url": "" }
`

async function fetchOpenAI(url, description) {
  const openAIKEY = localStorage.getItem('openai')

  const endpoint = 'https://api.openai.com/v1/completions'

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + openAIKEY,
  }

  const generatedPrompt = prompt(url, description)

  const body = {
    model: 'text-davinci-003',
    prompt: generatedPrompt,
    temperature: 0,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  }

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  }

  const res = await fetch(endpoint, options)
  const data = await res.json()

  console.log(data.choices[0].text)

  return getJSON(data.choices[0].text)
}

export default fetchOpenAI
