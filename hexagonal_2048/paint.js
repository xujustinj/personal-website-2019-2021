function paint_regular_hexagon_unrounded(name, x, y, r, red, green, blue) { // regular hexagon that looks like this <=>
  colorMode(RGB, 255);
  stroke(red, green, blue);
  fill(red, green, blue);

  rect(x - (r - 1) / 2, y - (r - 1) * Math.sqrt(3) / 2, r - 1, (r - 1) * Math.sqrt(3)); // r - 1 serves the purpose of making everything smaller so that the strokes overlap in the centre of the object without leaving any ugly blank lines
  triangle(x - (r - 1) / 2, y - (r - 1) * Math.sqrt(3) / 2, x - (r - 1), y, x - (r - 1) / 2, y + (r - 1) * Math.sqrt(3) / 2);
  triangle(x + (r - 1) / 2, y - (r - 1) * Math.sqrt(3) / 2, x + (r - 1), y, x + (r - 1) / 2, y + (r - 1) * Math.sqrt(3) / 2);
}
