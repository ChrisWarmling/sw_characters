export const getNumberUrl = (url: string) => {
  const numberUrl = url.match(/\d/g)?.join('')
  return numberUrl
}