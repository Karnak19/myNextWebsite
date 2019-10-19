export function jadenCase(input) {
  var words = input.split(' ');

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
  }

  return words.join(' ');
}
