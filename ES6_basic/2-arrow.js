export default function getNeighborhoddList() {
  this.sanFransicoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFransiscoNeighborhoods.push(newNeighborhood);
    return self.sanFransiscoNeightborhoods;
  };
}
