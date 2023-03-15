//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract LinkContract {
    // A Zklinks contract represents a unique link to be tracked (identified by contract url)

    uint256 public referralReward;
    mapping(bytes32 => bool) public referrerCommitments;
    mapping(bytes32 => bool) public refereeCommitments;
    mapping(address => uint256) public referralCounts;

    address public owner;
    string private redirectUrl;

    constructor(uint256 _referralReward, string memory _redirectUrl) {
        referralReward = _referralReward;
        owner = msg.sender;
        redirectUrl = _redirectUrl;
    }

    function getRedirectUrl() external view returns (string memory) {
        return redirectUrl;
    }

    function getOwner() external view returns (address) {
        return owner;
    }

    function setReferralReward(uint256 _referralReward) external {
        require(msg.sender == owner, "Only owner can set referral reward");
        referralReward = _referralReward;
    }

    function refer(bytes32 referrerCommitment) external {
        require(
            !referrerCommitments[referrerCommitment],
            "Referrer already referred"
        );
        referrerCommitments[referrerCommitment] = true;
    }

    function signup(
        bytes32 refereeCommitment,
        bytes32 referrerCommitment
    ) external {
        require(
            !refereeCommitments[refereeCommitment],
            "Referee already signed up"
        );
        require(
            referrerCommitments[referrerCommitment],
            "Referrer doesn't exist"
        );
        refereeCommitments[refereeCommitment] = true;
        referralCounts[address(bytes20(referrerCommitment))] += 1;
    }

    function claimReward(
        bytes32 referrerSecret,
        bytes32 refereeSecret
    ) external {
        bytes32 referrerCommitment = keccak256(
            abi.encodePacked(referrerSecret, msg.sender)
        );
        bytes32 refereeCommitment = keccak256(
            abi.encodePacked(refereeSecret, msg.sender)
        );
        require(
            referrerCommitments[referrerCommitment],
            "Referrer doesn't exist"
        );
        require(refereeCommitments[refereeCommitment], "Referee doesn't exist");
        require(referrerSecret == refereeSecret, "Secrets don't match");
        referrerCommitments[referrerCommitment] = false;
        refereeCommitments[refereeCommitment] = false;
        address referrer = address(bytes20(referrerCommitment));
        payable(referrer).transfer(referralReward);
    }
}
