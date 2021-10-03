//file utils

/**
 * Find in list
 * @param list
 * @param argument value to compare
 * @return  an item from given list
 */
export const find = (list, argument) => list.find((item) => item.id === argument)

/**
 * Filter list by object
 * @param list
 * @param object an object to compare
 * @return list
 */
export const filterByObject = (list, object) => {
  const result = []
  let isSame = true
  for (const item of list) {
    isSame = true
    for (const key in object) {
      if (item[key] !== object[key]) {
        isSame = false
        break
      }
    }
    if (isSame) {
      result.push(item)
    }
  }
  return result
}
