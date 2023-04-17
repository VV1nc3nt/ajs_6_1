/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
export default function orderByProps(obj, keys) {
  const objectsArray = [];
  for (let i = 0; i < keys.length; i++) {
    objectsArray.push({ key: keys[i], value: obj[keys[i]] });
    delete obj[keys[i]];
  }
  const objSorted = Object.keys(obj).sort();
  for (let i = 0; i < objSorted.length; i++) {
    objectsArray.push({ key: objSorted[i], value: obj[objSorted[i]] });
  }
  return objectsArray;
}
