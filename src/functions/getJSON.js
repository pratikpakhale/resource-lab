export default text => {
  try {
    const jsonRegex = /{.*}/s
    const resObjParsed = JSON.parse(text.match(jsonRegex)[0])
    return resObjParsed
  } catch (e) {
    return null
  }
}
