//the template of every block in our chain that will contain infos of each current block and his previous block
//calculateHash() ::: calculate and return hash of this block with the constructor property
class Block {
  constructor(index, timestamp, data, prevHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.currentHash = '';
  }

  calculateHash() {}
}
