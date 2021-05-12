require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strong rice noble equip include arctic army gate'; 
let testAccounts = [
"0x3f2dcbf26d857af119adb6da7ad0fb45fef216023ae1207df087dba080a3b365",
"0xc70340290775a68465afbde1d14ade68aed0ba5787343d1e725af6e9f0031043",
"0xd949d1baccb40f9b7ffec51872701e40d7439646aa3e9db24f893a2613c30108",
"0xad06654b3de73bceaa998c26cd5c6be169abb84aa67da3e54713d68ad7036474",
"0xc03f7e7c777d367fe9d5053082b6772033c241c6918377219ff2396fb79b9979",
"0x73b6f235af6b9e3fcf44bf7805ec905ecd401a917d1c778eb1d2cbe5cf979976",
"0x633800bb03ba54a96285ba6072b74246431c7c648a7e0b16f139aedd346eb76d",
"0x0eb442ff59d2e2803b38b7d40f115638d3dfd98e7096abdb8c7cc1cc39a8a9c0",
"0x2b131378ce1052320464c191da8041d03162efff89ddbdb354df17dc71ccca57",
"0xc82e1751c20aa4d1c93f163d4d63630f9a24a9510832a1f671a389cb19fd55d8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
