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
    string private title;

    constructor(string memory _title, uint256 _referralReward, string memory _redirectUrl) {
        referralReward = _referralReward;
        redirectUrl = _redirectUrl;
        title = _title;
        owner = msg.sender;
    }

    function refer(
        bytes32 _referrerCommitment,
        bytes32 _refereeCommitment
    ) external {
        require(
            !referrerCommitments[_referrerCommitment],
            "Referrer already referred"
        );
        require(
            !refereeCommitments[_refereeCommitment],
            "Referee already referred"
        );
        referrerCommitments[_referrerCommitment] = true;
        refereeCommitments[_refereeCommitment] = true;
        referralCounts[msg.sender] += 1;
    }

    // Setters/Getters below

    function getReferralCount(
        address _referrer
    ) external view returns (uint256) {
        return referralCounts[_referrer];
    }

    function getReferralReward() external view returns (uint256) {
        return referralReward;
    }

    function setRedirectUrl(string memory _redirectUrl) external {
        require(msg.sender == owner, "Only owner can set redirect url");
        redirectUrl = _redirectUrl;
    }

    function setReferralReward(uint256 _referralReward) external {
        require(msg.sender == owner, "Only owner can set referral reward");
        referralReward = _referralReward;
    }

    function setTitle(string memory _title) external {
        require(msg.sender == owner, "Only owner can set title");
        title = _title;
    }

    function getTitle() external view returns (string memory) {
        return title;
    }

    function getRedirectUrl() external view returns (string memory) {
        return redirectUrl;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}
