function updateObjectWithKeyAndValue (obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
  }

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj;
}
