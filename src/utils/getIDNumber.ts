export const getIDNumber = (url: string) => {
  const idNumber = url.match(/\d/g)?.join('')
  return idNumber
}