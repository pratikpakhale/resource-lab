const axios = require('axios')

const data = JSON.stringify({
  parent: {
    database_id: '7b5c22d43e4e45f1a8c4ff89e92bce64',
  },
  properties: {
    title: {
      title: [
        {
          text: {
            content: 'Monkeytype - Improve Your Typing Speed and Accuracy',
          },
        },
      ],
    },
    Link: { type: 'url', url: 'https://monkeytype.com/' },
    Tags: {
      multi_select: [
        { name: 'typing' },
        { name: 'keyboard' },
        { name: 'speed' },
        { name: 'accuracy' },
        { name: 'practice' },
        { name: 'game' },
      ],
    },
    Description: {
      rich_text: [
        {
          type: 'text',
          text: {
            content:
              'Monkeytype is a typing game that helps you improve your typing speed and accuracy.',
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
          plain_text:
            'Monkeytype is a typing game that helps you improve your typing speed and accuracy.',
          href: null,
        },
      ],
    },
  },
})
const config = {
  method: 'post',
  url: 'https://api.notion.com/v1/pages',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer secret_GlWBWkkWIRSvnf0Jyq0CIGU33Ivves74dOUGq9QsNAG',
    'Notion-Version': '2021-08-16',
  },
  data,
}

axios(config).then(function (response) {
  console.log(JSON.stringify(response.data))
})
