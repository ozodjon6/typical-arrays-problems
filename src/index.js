
exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0 ) {
    return 0;
  } else {
    return Math.min(...array);
  }
}

exports.max = function max (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  } else {
    return Math.max(...array);
  }
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  } else {
    const total = array.reduce(function(acc, current) {
      return acc + current
    })

    const avg = total / array.length

    return avg;
  }
}
