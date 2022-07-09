const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment
let Multiplier3Content = fs.readFileSync("contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let Multiplier3Bumped = Multiplier3Content.replace(solidityRegex, 'pragma solidity ^0.8.0');
Multiplier3Bumped = Multiplier3Bumped.replace(verifierRegex, 'contract Multiplier3Verifier');
fs.writeFileSync("./contracts/Multiplier3Verifier.sol", Multiplier3Bumped);

const plonkVerifierRegex = /contract PlonkVerifier/
let Multiplier3_plonkContent = fs.readFileSync("contracts/Multiplier3Verifier_plonk.sol", { encoding: 'utf-8' });
let Multiplier3_plonkBumped = Multiplier3_plonkContent.replace(solidityRegex, 'pragma solidity ^0.8.0');
Multiplier3_plonkBumped = Multiplier3_plonkBumped.replace(plonkVerifierRegex, 'contract Multiplier3Verifier_plonk');
fs.writeFileSync("./contracts/Multiplier3Verifier_plonk.sol", Multiplier3_plonkBumped);