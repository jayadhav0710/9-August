const str = 'the quick brown fox';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const caps = str.split(' ').map(capitalize).join(' ');
caps;