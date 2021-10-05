const { Blockchain, Transaction } = require('./blockchain');

let azulAmazCoin = new Blockchain();

//------ Previous testings 2 ------
// azulAmazCoin.createTransaction(new Transaction('add1', 'add2', 100));
// azulAmazCoin.createTransaction(new Transaction('add2', 'add1', 50));
// console.log('\n Starting mining ...');
// azulAmazCoin.minePendingTransactions('miner-address');
// console.log(
//   '\n Balance of miner-address is',
//   azulAmazCoin.getBalanceOfAddress('miner-address')
// );
// console.log('\n Starting mining again...');
// azulAmazCoin.minePendingTransactions('miner-address');
// console.log(
//   '\n Balance of miner-address is',
//   azulAmazCoin.getBalanceOfAddress('miner-address')
// );
// console.log('\n Starting mining again...');
// azulAmazCoin.minePendingTransactions('miner-address');
// console.log(
//   '\n Balance of miner-address is',
//   azulAmazCoin.getBalanceOfAddress('miner-address')
// );

//------ Previous testings ------
// console.log('Mining block 1...');
// azulAmazCoin.addBlock(new Block(1, '30/09/2021', { amount: 4 }));
// console.log('Mining block 2...');
// azulAmazCoin.addBlock(new Block(2, '31/09/2021', { amount: 11 }));
