const SHA256 = require('crypto-js/sha256');

//9:18
//the template of every block in our chain that will contain infos of each current block and his previous block
//calculateHash() ::: calculate and return hash of this block with the constructor property
//mineBlock() ::: avoid hash changes to keep chain valid (security), and put some difficulty to mine
class Block {
  constructor(index, timestamp, data, prevHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.currentHash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.prevHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  mineBlock(difficulty) {
    while (
      this.currentHash.substring(0, difficulty) !==
      Array(difficulty + 1).join('0')
    ) {
      this.nonce++;
      this.currentHash = this.calculateHash();
    }
    console.log('Block mined: ' + this.currentHash);
  }
}

//this.chain ::: an array that contain genesis block at index 0
//ischainvalid() bool if there are changes in chain like data (not detect hash changes)
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 5;
  }

  createGenesisBlock() {
    return new Block(0, '29/09/2021', 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.prevHash = this.getLatestBlock().currentHash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const prevBlock = this.chain[i - 1];

      if (currentBlock.currentHash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.prevHash !== prevBlock.currentHash) {
        return false;
      }
    }
    return true;
  }
}

let azulAmazCoin = new Blockchain();

console.log('Mining block 1...');
azulAmazCoin.addBlock(new Block(1, '30/09/2021', { amount: 4 }));
console.log('Mining block 2...');
azulAmazCoin.addBlock(new Block(2, '31/09/2021', { amount: 11 }));
