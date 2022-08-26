class Bottle {
  constructor(name, color, capacity, lidColor, IsLidOpen, heightA, widthA) {
    // define properties
    this.name = name;
    this.color = color;
    this.capacity = capacity;
    this.lidColor = lidColor;
    this.IsLidOpen = IsLidOpen;
    this.dimension = {
      height: heightA,
      width: widthA,
    };
  }
  //   define methods like normal functions
  toggleLid(status) {
    this.IsLidOpen = status;
  }
}

export default Bottle;
