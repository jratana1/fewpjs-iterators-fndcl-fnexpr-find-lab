const testVar = {}

function testFunc() {
  
  return "hi"
}

function superbowlWin(array) {
    let find = array.find(function(object) {return object.result === "W"})

    if (find) {
      return find.year
    }
    else {
      undefined
    }
}
