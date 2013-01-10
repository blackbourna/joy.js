(function(J){
  /**
   * @class Vector2d
   * @constructor
   * @param {Number} x
   * @param {Number} y
   */
  var Vector2d = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  };

  /**
   * @method set
   * @param {Number} x
   * @param {Number} y
   */
  Vector2d.prototype.set = function (x, y) {
    this.x = x;
    this.y = y;
  };

  /**
   * @method toString
   * @return {String}
   */
  Vector2d.prototype.toString = function () {
    return "#<Vector2d @x=" + this.x + ", @y=" + this.y + ">";
  };

  Vector2d.LEFT = new Vector2d(-1, 0);
  Vector2d.RIGHT = new Vector2d(1, 0);
  Vector2d.TOP = new Vector2d(0, -1);
  Vector2d.BOTTOM = new Vector2d(0, 1);

  J.Vector2d = Vector2d;
})(Joy);