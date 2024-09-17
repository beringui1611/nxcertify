// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract NxCertify {

    address owner;
    uint256 public codeStart = 10000;

    event NewCertify(string name, uint256 code);

    struct Certificate {
        string name;
        bool isValid;
    }

    mapping (uint256 => Certificate) validate;

    constructor(){
        owner = msg.sender;
    }
   
   function gen(string memory name) external onlyOwner returns(uint256){
        codeStart ++;
        validate[codeStart].isValid = true;
        validate[codeStart].name = name;      

        emit NewCertify(name, codeStart);

        return codeStart;
   }

   function check(uint256 code) external view returns(Certificate memory) {
        return validate[code];
   }

   modifier onlyOwner {
        require(msg.sender == owner, "ONLY_OWNER_PERMISSION");

        _;
   }
    
}
