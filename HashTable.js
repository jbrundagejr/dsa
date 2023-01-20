// re-inventing the wheel - just use an object but this is the theory behind it
class Hash {
  // default size is a prime number
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  // function that accepts a string and returns its position in the hash
  _hash = (string) => {
    let total = 0
    // primes reduce collisions
    const weirdPrime = 31
    // loop over the length of the string or the first 100 characters, which ever is shorter
    for (let i = 0; i < Math.min(string.length, 100); i++) {
      // grab each letter
      let char = string[i]
      // get the numerical character code minus 96
      let value = char.charCodeAt(0) - 96
      // update the total by multipling the value plus the prime and then
      // modulo by the array length to get a valid index in the length entered
      total = (total * weirdPrime + value) % this.keyMap.length
    }
    // return the total for the string
    return total
  }

  // sets a key value in the hash, handles colisions with separate chaining like obj.key = value
  // doesn't overwrite a repeat key's value, which it usually will in native hashes
  set(key, value) {
    // grab the index where the key will go
    let keyIndex = this._hash(key)
    // if there's no value at the index, create an empty array
    if (!this.keyMap[keyIndex]) {
      this.keyMap[keyIndex] = []
    }
    // then push the key value to the empty spot or add on to existing data
    this.keyMap[keyIndex].push([key, value])
  }

  // returns the value at a given key like calling obj[key]
  get(key) {
    // grab the index of the key we want
    let keyIndex = this._hash(key)
    // if there is a value at that index
    if (this.keyMap[keyIndex]) {
      // loop over the values at that index
      for (let i = 0; i < this.keyMap[keyIndex].length; i++) {
        // if the first element of the looped value is the key
        if (this.keyMap[keyIndex][i][0] === key) {
          // give back the value of the element
          return this.keyMap[keyIndex][i][1]
        }
      }
    }
    // otherwise return undefined
    return undefined
  }

  // returns array of keys in a hash like Object.keys()
  keys() {
    let results = []
    // loop over entire hash
    for (let i = 0; i < this.keyMap.length; i++) {
      // if there is data at the looped element
      if (this.keyMap[i]) {
        // map over the data stored there
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // check if the key is already in our results array
          if (!results.includes(this.keyMap[i][j][0])) {
            // if not, add it in
            results.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    // return the results
    return results
  }

  // returns an array the unique values in a hash like Object.values()
  values() {
    let results = []
    // loop over entire hash
    for (let i = 0; i < this.keyMap.length; i++) {
      // if there is data at the looped value
      if (this.keyMap[i]) {
        // map over all the data stored there
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // check if the value is already in our results array
          if (!results.includes(this.keyMap[i][j][1])) {
            // if not, add it in
            results.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    // return the results
    return results
  }
}
