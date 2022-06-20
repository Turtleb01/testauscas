function recursiveArrayExec(arr,callback) {
  arr.forEach((e)=>{
    if(Array.isArray(e)) {
      recursiveArrayExec(e,callback);
    } else {
      callback(e);
    }
  });
}

module.exports = {
  recursiveArrayExec: recursiveArrayExec
}
