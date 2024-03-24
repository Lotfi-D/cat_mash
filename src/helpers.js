export const sortByScores = (data, type = 'asc') => {
  if (type === 'desc') {
    return data.sort((a, b) => {
      if (a.score < b.score) return 1
      if (a.score > b.score) return -1
      return 0
    })
  } else {
    return data.sort((a, b) => {
      if (a.score > b.score) return 1
      if (a.score < b.score) return -1
      return 0
    })
  }
}
