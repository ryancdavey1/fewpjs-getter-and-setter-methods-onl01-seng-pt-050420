// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  get area() {
    return Math.PI * (this.radius ** 2)
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2
  }

  set circumference(newCircumference) {
    this.radius = newCircumference / (2 * Math.PI)
  }

  set area( area ) {
    this.radius = Math.sqrt( area / pi )
  }
}