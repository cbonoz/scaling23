export const ZKLINKS_CONTRACT = {
  "_format": "hh-sol-artifact-1",
  "contractName": "LinkContract",
  "sourceName": "contracts/LinkContract.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_referralReward",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_redirectUrl",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRedirectUrl",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_referrer",
          "type": "address"
        }
      ],
      "name": "getReferralCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getReferralReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTitle",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_referrerCommitment",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_refereeCommitment",
          "type": "bytes32"
        }
      ],
      "name": "refer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "refereeCommitments",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "referralCounts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "referralReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "referrerCommitments",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_redirectUrl",
          "type": "string"
        }
      ],
      "name": "setRedirectUrl",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_referralReward",
          "type": "uint256"
        }
      ],
      "name": "setReferralReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        }
      ],
      "name": "setTitle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620014ad380380620014ad8339818101604052810190620000379190620001f3565b81600081905550806005908051906020019062000056929190620000ba565b5082600690805190602001906200006f929190620000ba565b5033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200040f565b828054620000c8906200031a565b90600052602060002090601f016020900481019282620000ec576000855562000138565b82601f106200010757805160ff191683800117855562000138565b8280016001018555821562000138579182015b82811115620001375782518255916020019190600101906200011a565b5b5090506200014791906200014b565b5090565b5b80821115620001665760008160009055506001016200014c565b5090565b6000620001816200017b84620002a4565b6200027b565b9050828152602081018484840111156200019a57600080fd5b620001a7848285620002e4565b509392505050565b600082601f830112620001c157600080fd5b8151620001d38482602086016200016a565b91505092915050565b600081519050620001ed81620003f5565b92915050565b6000806000606084860312156200020957600080fd5b600084015167ffffffffffffffff8111156200022457600080fd5b6200023286828701620001af565b93505060206200024586828701620001dc565b925050604084015167ffffffffffffffff8111156200026357600080fd5b6200027186828701620001af565b9150509250925092565b6000620002876200029a565b905062000295828262000350565b919050565b6000604051905090565b600067ffffffffffffffff821115620002c257620002c1620003b5565b5b620002cd82620003e4565b9050602081019050919050565b6000819050919050565b60005b8381101562000304578082015181840152602081019050620002e7565b8381111562000314576000848401525b50505050565b600060028204905060018216806200033357607f821691505b602082108114156200034a576200034962000386565b5b50919050565b6200035b82620003e4565b810181811067ffffffffffffffff821117156200037d576200037c620003b5565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200040081620002da565b81146200040c57600080fd5b50565b61108e806200041f6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063893d20e81161008c578063c555d64e11610066578063c555d64e1461024b578063cec297a014610267578063d94040d514610297578063ff3c1a8f146102b5576100ea565b8063893d20e8146101f35780638da5cb5b146102115780638fb6c6f61461022f576100ea565b806324acbd69116100c857806324acbd69146101595780634d6836741461018957806359ddd5ba146101a757806372910be0146101d7576100ea565b80630183bfee146100ef57806302a6dd1a1461010b5780631048fbf81461013b575b600080fd5b610109600480360381019061010491906109f5565b6102d3565b005b610125600480360381019061012091906109cc565b610447565b6040516101329190610bcb565b60405180910390f35b610143610467565b6040516101509190610ca8565b60405180910390f35b610173600480360381019061016e91906109a3565b610470565b6040516101809190610ca8565b60405180910390f35b6101916104b9565b60405161019e9190610ca8565b60405180910390f35b6101c160048036038101906101bc91906109cc565b6104bf565b6040516101ce9190610bcb565b60405180910390f35b6101f160048036038101906101ec9190610a31565b6104df565b005b6101fb610589565b6040516102089190610bb0565b60405180910390f35b6102196105b3565b6040516102269190610bb0565b60405180910390f35b61024960048036038101906102449190610a72565b6105d9565b005b61026560048036038101906102609190610a31565b610673565b005b610281600480360381019061027c91906109a3565b61071d565b60405161028e9190610ca8565b60405180910390f35b61029f610735565b6040516102ac9190610be6565b60405180910390f35b6102bd6107c7565b6040516102ca9190610be6565b60405180910390f35b6001600083815260200190815260200160002060009054906101000a900460ff1615610334576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032b90610c08565b60405180910390fd5b6002600082815260200190815260200160002060009054906101000a900460ff1615610395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038c90610c88565b60405180910390fd5b600180600084815260200190815260200160002060006101000a81548160ff02191690831515021790555060016002600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461043c9190610d35565b925050819055505050565b60026020528060005260406000206000915054906101000a900460ff1681565b60008054905090565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60005481565b60016020528060005260406000206000915054906101000a900460ff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461056f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056690610c68565b60405180910390fd5b8060069080519060200190610585929190610859565b5050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610669576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066090610c48565b60405180910390fd5b8060008190555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610703576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fa90610c28565b60405180910390fd5b8060059080519060200190610719929190610859565b5050565b60036020528060005260406000206000915090505481565b60606005805461074490610e1f565b80601f016020809104026020016040519081016040528092919081815260200182805461077090610e1f565b80156107bd5780601f10610792576101008083540402835291602001916107bd565b820191906000526020600020905b8154815290600101906020018083116107a057829003601f168201915b5050505050905090565b6060600680546107d690610e1f565b80601f016020809104026020016040519081016040528092919081815260200182805461080290610e1f565b801561084f5780601f106108245761010080835404028352916020019161084f565b820191906000526020600020905b81548152906001019060200180831161083257829003601f168201915b5050505050905090565b82805461086590610e1f565b90600052602060002090601f01602090048101928261088757600085556108ce565b82601f106108a057805160ff19168380011785556108ce565b828001600101855582156108ce579182015b828111156108cd5782518255916020019190600101906108b2565b5b5090506108db91906108df565b5090565b5b808211156108f85760008160009055506001016108e0565b5090565b600061090f61090a84610ce8565b610cc3565b90508281526020810184848401111561092757600080fd5b610932848285610ddd565b509392505050565b60008135905061094981611013565b92915050565b60008135905061095e8161102a565b92915050565b600082601f83011261097557600080fd5b81356109858482602086016108fc565b91505092915050565b60008135905061099d81611041565b92915050565b6000602082840312156109b557600080fd5b60006109c38482850161093a565b91505092915050565b6000602082840312156109de57600080fd5b60006109ec8482850161094f565b91505092915050565b60008060408385031215610a0857600080fd5b6000610a168582860161094f565b9250506020610a278582860161094f565b9150509250929050565b600060208284031215610a4357600080fd5b600082013567ffffffffffffffff811115610a5d57600080fd5b610a6984828501610964565b91505092915050565b600060208284031215610a8457600080fd5b6000610a928482850161098e565b91505092915050565b610aa481610d8b565b82525050565b610ab381610d9d565b82525050565b6000610ac482610d19565b610ace8185610d24565b9350610ade818560208601610dec565b610ae781610f0f565b840191505092915050565b6000610aff601983610d24565b9150610b0a82610f20565b602082019050919050565b6000610b22601f83610d24565b9150610b2d82610f49565b602082019050919050565b6000610b45602283610d24565b9150610b5082610f72565b604082019050919050565b6000610b68601883610d24565b9150610b7382610fc1565b602082019050919050565b6000610b8b601883610d24565b9150610b9682610fea565b602082019050919050565b610baa81610dd3565b82525050565b6000602082019050610bc56000830184610a9b565b92915050565b6000602082019050610be06000830184610aaa565b92915050565b60006020820190508181036000830152610c008184610ab9565b905092915050565b60006020820190508181036000830152610c2181610af2565b9050919050565b60006020820190508181036000830152610c4181610b15565b9050919050565b60006020820190508181036000830152610c6181610b38565b9050919050565b60006020820190508181036000830152610c8181610b5b565b9050919050565b60006020820190508181036000830152610ca181610b7e565b9050919050565b6000602082019050610cbd6000830184610ba1565b92915050565b6000610ccd610cde565b9050610cd98282610e51565b919050565b6000604051905090565b600067ffffffffffffffff821115610d0357610d02610ee0565b5b610d0c82610f0f565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610d4082610dd3565b9150610d4b83610dd3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d8057610d7f610e82565b5b828201905092915050565b6000610d9682610db3565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610e0a578082015181840152602081019050610def565b83811115610e19576000848401525b50505050565b60006002820490506001821680610e3757607f821691505b60208210811415610e4b57610e4a610eb1565b5b50919050565b610e5a82610f0f565b810181811067ffffffffffffffff82111715610e7957610e78610ee0565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f526566657272657220616c726561647920726566657272656400000000000000600082015250565b7f4f6e6c79206f776e65722063616e207365742072656469726563742075726c00600082015250565b7f4f6e6c79206f776e65722063616e2073657420726566657272616c207265776160008201527f7264000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c79206f776e65722063616e20736574207469746c650000000000000000600082015250565b7f5265666572656520616c72656164792072656665727265640000000000000000600082015250565b61101c81610d8b565b811461102757600080fd5b50565b61103381610da9565b811461103e57600080fd5b50565b61104a81610dd3565b811461105557600080fd5b5056fea26469706673582212209604eb5e93f92b028080897b95324765422f2d6d18643823febb4177fe0ceef264736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063893d20e81161008c578063c555d64e11610066578063c555d64e1461024b578063cec297a014610267578063d94040d514610297578063ff3c1a8f146102b5576100ea565b8063893d20e8146101f35780638da5cb5b146102115780638fb6c6f61461022f576100ea565b806324acbd69116100c857806324acbd69146101595780634d6836741461018957806359ddd5ba146101a757806372910be0146101d7576100ea565b80630183bfee146100ef57806302a6dd1a1461010b5780631048fbf81461013b575b600080fd5b610109600480360381019061010491906109f5565b6102d3565b005b610125600480360381019061012091906109cc565b610447565b6040516101329190610bcb565b60405180910390f35b610143610467565b6040516101509190610ca8565b60405180910390f35b610173600480360381019061016e91906109a3565b610470565b6040516101809190610ca8565b60405180910390f35b6101916104b9565b60405161019e9190610ca8565b60405180910390f35b6101c160048036038101906101bc91906109cc565b6104bf565b6040516101ce9190610bcb565b60405180910390f35b6101f160048036038101906101ec9190610a31565b6104df565b005b6101fb610589565b6040516102089190610bb0565b60405180910390f35b6102196105b3565b6040516102269190610bb0565b60405180910390f35b61024960048036038101906102449190610a72565b6105d9565b005b61026560048036038101906102609190610a31565b610673565b005b610281600480360381019061027c91906109a3565b61071d565b60405161028e9190610ca8565b60405180910390f35b61029f610735565b6040516102ac9190610be6565b60405180910390f35b6102bd6107c7565b6040516102ca9190610be6565b60405180910390f35b6001600083815260200190815260200160002060009054906101000a900460ff1615610334576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032b90610c08565b60405180910390fd5b6002600082815260200190815260200160002060009054906101000a900460ff1615610395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038c90610c88565b60405180910390fd5b600180600084815260200190815260200160002060006101000a81548160ff02191690831515021790555060016002600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461043c9190610d35565b925050819055505050565b60026020528060005260406000206000915054906101000a900460ff1681565b60008054905090565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60005481565b60016020528060005260406000206000915054906101000a900460ff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461056f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056690610c68565b60405180910390fd5b8060069080519060200190610585929190610859565b5050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610669576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066090610c48565b60405180910390fd5b8060008190555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610703576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fa90610c28565b60405180910390fd5b8060059080519060200190610719929190610859565b5050565b60036020528060005260406000206000915090505481565b60606005805461074490610e1f565b80601f016020809104026020016040519081016040528092919081815260200182805461077090610e1f565b80156107bd5780601f10610792576101008083540402835291602001916107bd565b820191906000526020600020905b8154815290600101906020018083116107a057829003601f168201915b5050505050905090565b6060600680546107d690610e1f565b80601f016020809104026020016040519081016040528092919081815260200182805461080290610e1f565b801561084f5780601f106108245761010080835404028352916020019161084f565b820191906000526020600020905b81548152906001019060200180831161083257829003601f168201915b5050505050905090565b82805461086590610e1f565b90600052602060002090601f01602090048101928261088757600085556108ce565b82601f106108a057805160ff19168380011785556108ce565b828001600101855582156108ce579182015b828111156108cd5782518255916020019190600101906108b2565b5b5090506108db91906108df565b5090565b5b808211156108f85760008160009055506001016108e0565b5090565b600061090f61090a84610ce8565b610cc3565b90508281526020810184848401111561092757600080fd5b610932848285610ddd565b509392505050565b60008135905061094981611013565b92915050565b60008135905061095e8161102a565b92915050565b600082601f83011261097557600080fd5b81356109858482602086016108fc565b91505092915050565b60008135905061099d81611041565b92915050565b6000602082840312156109b557600080fd5b60006109c38482850161093a565b91505092915050565b6000602082840312156109de57600080fd5b60006109ec8482850161094f565b91505092915050565b60008060408385031215610a0857600080fd5b6000610a168582860161094f565b9250506020610a278582860161094f565b9150509250929050565b600060208284031215610a4357600080fd5b600082013567ffffffffffffffff811115610a5d57600080fd5b610a6984828501610964565b91505092915050565b600060208284031215610a8457600080fd5b6000610a928482850161098e565b91505092915050565b610aa481610d8b565b82525050565b610ab381610d9d565b82525050565b6000610ac482610d19565b610ace8185610d24565b9350610ade818560208601610dec565b610ae781610f0f565b840191505092915050565b6000610aff601983610d24565b9150610b0a82610f20565b602082019050919050565b6000610b22601f83610d24565b9150610b2d82610f49565b602082019050919050565b6000610b45602283610d24565b9150610b5082610f72565b604082019050919050565b6000610b68601883610d24565b9150610b7382610fc1565b602082019050919050565b6000610b8b601883610d24565b9150610b9682610fea565b602082019050919050565b610baa81610dd3565b82525050565b6000602082019050610bc56000830184610a9b565b92915050565b6000602082019050610be06000830184610aaa565b92915050565b60006020820190508181036000830152610c008184610ab9565b905092915050565b60006020820190508181036000830152610c2181610af2565b9050919050565b60006020820190508181036000830152610c4181610b15565b9050919050565b60006020820190508181036000830152610c6181610b38565b9050919050565b60006020820190508181036000830152610c8181610b5b565b9050919050565b60006020820190508181036000830152610ca181610b7e565b9050919050565b6000602082019050610cbd6000830184610ba1565b92915050565b6000610ccd610cde565b9050610cd98282610e51565b919050565b6000604051905090565b600067ffffffffffffffff821115610d0357610d02610ee0565b5b610d0c82610f0f565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610d4082610dd3565b9150610d4b83610dd3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d8057610d7f610e82565b5b828201905092915050565b6000610d9682610db3565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610e0a578082015181840152602081019050610def565b83811115610e19576000848401525b50505050565b60006002820490506001821680610e3757607f821691505b60208210811415610e4b57610e4a610eb1565b5b50919050565b610e5a82610f0f565b810181811067ffffffffffffffff82111715610e7957610e78610ee0565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f526566657272657220616c726561647920726566657272656400000000000000600082015250565b7f4f6e6c79206f776e65722063616e207365742072656469726563742075726c00600082015250565b7f4f6e6c79206f776e65722063616e2073657420726566657272616c207265776160008201527f7264000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c79206f776e65722063616e20736574207469746c650000000000000000600082015250565b7f5265666572656520616c72656164792072656665727265640000000000000000600082015250565b61101c81610d8b565b811461102757600080fd5b50565b61103381610da9565b811461103e57600080fd5b50565b61104a81610dd3565b811461105557600080fd5b5056fea26469706673582212209604eb5e93f92b028080897b95324765422f2d6d18643823febb4177fe0ceef264736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
