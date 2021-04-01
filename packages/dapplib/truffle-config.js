require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remind million include kiwi breeze that'; 
let testAccounts = [
"0x1199775873da0f3a13b626bde1b404bfcffc5f9fbf8d872823999cb0abd69d51",
"0xf47f24e5685a5e570154452113da4e6ddccb01b07d1bd2199d77d3b04fefb748",
"0xf7fe40f9926ddfcf82c354cc0b2d8914f80edef2b38e27d437ab332c704cbaeb",
"0x4e78171460794d9060622b0a9d663292d183e97497fc2f4f6c13cce84ce02b17",
"0xa09bb757b985b9e26c86251bb9227b12084d503b0c837c34399f01c3934b4a7b",
"0x32cd4f27b4e0ff581262d819747f92e54f738a856d0bbc388963e0450b9aa2fd",
"0xf036a11b2f1a47becc0a30b3bdb624c4c9a7ce2a9d320f03974123662902dd97",
"0xbf3916453182736cd71343fd1f0d0b25e731f08f29afad335ece9437b13629b1",
"0xc6c87393ef9559e7ae18508ae8c8a9751cb1629b6cb9fc421ab021170a3601e3",
"0xda8ff4dfd3c74f65b22774c576545a57ff6932a28b19e4fcac328cc4c58b5386"
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
