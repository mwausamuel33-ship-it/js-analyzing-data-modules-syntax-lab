//importing datejs.
  var require=("datejs");


function combineUsers(...args) {
  //the return objects.
  const combinedObject = {
    users:[]
  }

  //looping all arrays and merging. 
  args.forEach(array => {
    combinedObject.users.push(...array)
  })

  //Add today's date in format M/d/yyyy.
  combinedObject.merge_date = Date.today().toString('M/d/yyyy')

  //Return the final object.
  return combinedObject
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};