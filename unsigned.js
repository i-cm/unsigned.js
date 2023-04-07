class unsigned {
  constructor(n) {
    this.n = n < 0 ? -n : n
  }
  add(n) {
    let a = this.n + n
    this.n = a < 0 ? -a : a
    
  }
  subtract(n) {
    let a = this.n - n
    this.n = a < 0 ? -a : a
    
  }
  multiply(n) {
    let a = this.n * n
    this.n = a < 0 ? -a : a
    
  }
  divide(n) {
    let a = this.n / n
    this.n = a < 0 ? -a : a
    
  }
  power(n) {
    let a = this.n ** n
    this.n = a < 0 ? -a : a
    
  }
  toString() {
    return this.n.toString()
  }
}
