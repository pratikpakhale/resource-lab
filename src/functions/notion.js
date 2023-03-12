const bodyGenerator = (title, tags, url, description, notionDatabaseID) => {
  const multi_select = tags.map(tag => {
    return {
      name: tag,
    }
  })

  return {
    parent: {
      database_id: notionDatabaseID,
    },
    properties: {
      title: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      Link: {
        type: 'url',
        url: url,
      },
      Tags: {
        multi_select,
      },
      Description: {
        rich_text: [
          {
            type: 'text',
            text: {
              content: description,
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: description,
            href: null,
          },
        ],
      },
    },
  }
}

async function pushData(title, tags, url, description) {
  const notionAPIKey = localStorage.getItem('notion')
  const notionDatabaseID = localStorage.getItem('db')

  const endpoint = 'https://api.notion.com/v1/pages'

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + notionAPIKey,
    'Notion-Version': '2021-08-16',
  }

  const body = bodyGenerator(title, tags, url, description, notionDatabaseID)

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  const data = await response.json()

  console.log(data)

  if (response.status !== 200) {
    throw new Error(data.message)
  }

  return true
}

export default pushData
