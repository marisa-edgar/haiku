export default function Haiku(poem) {
  this.poem = poem;
}

Haiku.prototype.isThreeLines = function() {
  this.poem = this.poem.split(", ");
  if (this.poem.length === 3) {
    return true;
  }
  return false;
}

Haiku.prototype.is575 = function() {
  this.poem = this.poem.split(", ");
  if (this.poem[0].split(' ').length === 5) {
    if (this.poem[1].split(' ').length === 7) {
      if (this.poem[2].split(' ').length === 5) {
        return true;
      }
    }
  }
  return false;
}