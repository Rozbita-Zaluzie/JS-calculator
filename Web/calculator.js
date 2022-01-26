function addToInput(char) {
    document.getElementById("calculate").value += char ;
  }

function deleteOne() {
    puvodni = document.getElementById("calculate").value
    document.getElementById("calculate").value = puvodni.slice(0,-1)
}

function deleteAll() {
    document.getElementById("calculate").value = null
}

function calculate() {
    raw = document.getElementById("calculate").value
    
    raw = raw.replaceAll('-', ' - ')
    raw = raw.replaceAll('+', ' + ')
    raw = raw.replaceAll('×', ' × ')
    raw = raw.replaceAll('÷', ' ÷ ')

    example = raw.split(' ');

    while (example.includes('×')) {
      example = doMulti(example)
    }

    while (example.includes('÷')) {
      example = doDivi(example)
    }
    
    while (example.includes('+')) {
      example = doAdd(example)
    }

    while (example.includes('-')) {
      example = doSub(example)
    }

    document.getElementById("help").innerHTML = example
}

function doAdd(raw) {
  index = raw.indexOf('+')
  number = parseFloat(raw[index-1])+parseFloat(raw[index+1])
  raw[index] = number
  raw.splice(index-1, 1);
  raw.splice(index, 1);

return raw
}

function doSub(raw) {
  index = raw.indexOf('-')
  number = parseFloat(raw[index-1])-parseFloat(raw[index+1])
  raw[index] = number
  raw.splice(index-1, 1);
  raw.splice(index, 1);

return raw
}

function doMulti(raw) {
    index = raw.indexOf('×')
    number = raw[index-1]*raw[index+1]
    raw[index] = number
    raw.splice(index-1, 1);
    raw.splice(index, 1);

  return raw
}

function doDivi(raw) {
  index = raw.indexOf('÷')
  number = raw[index-1]/raw[index+1]
  raw[index] = number
  raw.splice(index-1, 1);
  raw.splice(index, 1);

return raw
}