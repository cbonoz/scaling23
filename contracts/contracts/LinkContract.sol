//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract LinkContract {
    // A Zklinks contract represents a unique link to be tracked (identified by contract url)

    uint256 public referralCount;
    mapping(address => bool) public referred;

    struct LinkMetadata {
        string title;
        string redirectUrl;
        address owner;
        uint256 referralReward;
    }

    LinkMetadata public linkMetadata;

    event RefferalSuccess(address indexed referrer, address indexed referral, string indexed redirectUrl);

    constructor(
        string memory _title,
        uint256 _referralReward,
        string memory _redirectUrl
    ) {
        referralCount = 0;
        linkMetadata = LinkMetadata(
            _title,
            _redirectUrl,
            msg.sender,
            _referralReward
        );
    }
 
    function refer() external {
        require(!referred[msg.sender], "User already referred");
        referred[msg.sender] = true;
        referralCount += 1;
        uint256 referralReward = linkMetadata.referralReward;
        if (referralReward > 0) {
            // Ensure balance is sufficient
            require(
                address(this).balance >= referralReward,
                "Reward balance is empty on contract"
            );
            // Transfer reward to sender.
            payable(msg.sender).transfer(referralReward);
        }

        emit RefferalSuccess(linkMetadata.owner, msg.sender, linkMetadata.redirectUrl);
    }

    function getMetadata() external view returns (LinkMetadata memory) {
        return linkMetadata;
    }

    function isReffered(address _address) external view returns (bool) {
        return referred[_address];
    }

    function checkOwner() private view {
        require(
            msg.sender == linkMetadata.owner,
            "Only the link owner can call this method"
        );
    }

    function setRedirectUrl(string memory _redirectUrl) external {
        checkOwner();
        linkMetadata.redirectUrl = _redirectUrl;
    }

    function setReferralReward(uint256 _referralReward) external {
        checkOwner();
        linkMetadata.referralReward = _referralReward;
    }

    function setTitle(string memory _title) external {
        checkOwner();
        linkMetadata.title = _title;
    }

    function getTitle() external view returns (string memory) {
        return linkMetadata.title;
    }

    function getRedirectUrl() external view returns (string memory) {
        return linkMetadata.redirectUrl;
    }

    function getOwner() external view returns (address) {
        return linkMetadata.owner;
    }

    function getReferralCount() external view returns (uint256) {
        return referralCount;
    }

    function getReferralReward() external view returns (uint256) {
        return linkMetadata.referralReward;
    }
}
