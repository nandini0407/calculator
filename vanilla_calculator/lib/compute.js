class Compute {
  constructor() {
    this.first = 0;
    this.second = 0;
  }

  grabValues() {
    this.first = document.getElementById("first").value;
    this.second = document.getElementById("second").value;
  }

  compute(e) {
    console.log("yes");
    console.log(e);
  }

  add() {
    console.log(this.first);
    return this.first + this.second;
  }

  subtract() {
    return this.first - this.second;
  }

  multiply() {
    return this.first * this.second;
  }

  divide() {
    if (this.second === 0) {
      return "Invalid division attempted";
    } else {
      return this.first / this.second;
    }
  }

}

export default Compute;
