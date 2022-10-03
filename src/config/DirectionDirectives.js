const left = {
  1: 15,
  16: 30,
  31: 45,
  46: 60,
  61: 75,
  76: 90,
  91: 105,
  106: 120,
  121: 135,
  136: 150,
  151: 165,
  166: 180,
  181: 195,
  196: 210,
  211: 225,
};
const right = {
  15: 1,
  30: 16,
  45: 31,
  60: 46,
  75: 61,
  90: 76,
  105: 91,
  120: 106,
  135: 121,
  150: 136,
  165: 151,
  180: 166,
  195: 181,
  210: 196,
  225: 211,
};
const up = {
  1: 211,
  2: 212,
  3: 213,
  4: 214,
  5: 215,
  6: 216,
  7: 217,
  8: 218,
  9: 219,
  10: 220,
  11: 221,
  12: 222,
  13: 223,
  14: 224,
  15: 225,
};
const down = {
  211: 1,
  212: 2,
  213: 3,
  214: 4,
  215: 5,
  216: 6,
  217: 7,
  218: 8,
  219: 9,
  220: 10,
  221: 11,
  222: 12,
  223: 13,
  224: 14,
  225: 15,
};

class DirectionDirectives {
  getEdgeDirection(direction, actualIndex) {
    const directionsEdge = this.getDirectionEdgeObj(direction);
    if (directionsEdge[actualIndex]) {
      return directionsEdge[actualIndex]
    }
  }

  getDirectionEdgeObj(direction) {
    switch (direction) {
      case 'left':
        return left;

      case 'right':
        return right;
      
      case 'up':
        return up;

      case 'down':
        return down;
    }
  }
}

export default new DirectionDirectives();