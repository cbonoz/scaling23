<p align='center'>
    <img src="./img/logo.png" width=400 />
</p>


zklinks
---

zklinks is a link tracking platform that leverages zero knowledge proofs to provide users with a more secure and private way to refer friends and earn rewards. 

Built for the Scaling Ethereum 2023 hackathon.

### Background

Unlike traditional referral programs, where personal information such as email addresses, phone numbers, or social media profiles may be shared, zklinks allows users to keep their personal data private while still being able to participate in referral programs and earn rewards.

When a user generates a referral link using zklinks, the link is hashed and encrypted using zero knowledge proofs. This means that the link can be used to track referrals and determine whether a user is eligible for a reward, without revealing any personal information about the user or their friend. The platform also allows users to view their referral statistics, such as the number of clicks and successful referrals, while maintaining their privacy.

Moreover, zklinks provides additional security features to prevent fraud and abuse. For example, the platform can set limits on the number of referrals that a user can make per day, or the number of rewards that can be earned in a given time period. This can help prevent users from spamming referral links or engaging in other fraudulent behavior to earn rewards.

Overall, zklinks is a powerful tool for users who want to participate in referral programs while maintaining their privacy and security. By leveraging the power of zero knowledge proofs, the platform ensures that users can refer friends and earn rewards without risking their personal information.



### A Zero-knowledge linking platform backed by smart contracts

To make the above contract zero knowledge, we use a technique called hash commitment. Instead of storing the referrer and referee addresses in the contract directly, we could store their commitments, which are the hash values of their addresses.

The referrer would generate a random secret number, hash it with their address, and submit the hash value as their commitment. When a referee signs up with the referral link, they would also generate a random secret number, hash it with their address, and submit the hash value as their commitment.

To prove that the referrer referred the referee, the referrer would reveal their secret number to the contract, which would allow the contract to verify that the hash of the referrer's address matches the referrer's commitment. The contract would then ask the referee to reveal their secret number, which would allow the contract to verify that the hash of the referee's address matches the referee's commitment. If both commitments match, the contract would credit the referrer with the referral reward.

### Advantages over apps like bit.ly

Enhanced Privacy: One of the main advantages of using a zero-knowledge proof system like zklinks is the enhanced privacy it provides. Unlike traditional referral link tracking systems, which often require users to share personal information such as their email address or social media accounts, zklinks allows users to prove their referral without revealing any personal information. This means that users can refer friends and family without having to worry about their privacy being compromised.

Improved Security: Another benefit of using a zero-knowledge proof system like zklinks is the improved security it provides. Traditional referral link tracking systems are often vulnerable to hacking and other security breaches, which can compromise the personal information of both users and their referrals. By using a zero-knowledge proof system, zklinks can ensure that all referral data is kept secure and cannot be accessed by unauthorized parties.

Fair Rewards: Finally, a zero-knowledge referral link tracking app like zklinks can help ensure that rewards are distributed fairly and transparently. Traditional referral link tracking systems often have complex reward structures that can be difficult for users to understand, and can sometimes be manipulated by unscrupulous actors. By using a transparent and secure system like zklinks, users can be confident that their referrals will be tracked accurately and that rewards will be distributed fairly based on their referral activity.


### Useful links
Event page: https://ethglobal.com/events/scaling2023
Sponsors: https://ethglobal.com/events/scaling2023/prizes



<!-- 

Demo flow:
Introduction (30 seconds): Introduce the problem of current referral link tracking apps being centralized and requiring users to reveal personal information. Introduce zklinks as a zero-knowledge alternative that protects users' privacy while still enabling them to participate in referral programs. Show existing apps like bit.ly

Creating a referral link (1 minute): Demonstrate how easy it is to create a referral link using zklinks. Show how users can enter the relevant information, such as the name of the company and the reward for successful referrals, and generate a unique link that they can share with their friends.

Clicking a referral link (1 minute): Demonstrate how the act of clicking a referral link can be turned into a Metamask blockchain request. Show how this protects the user's privacy by not revealing their identity or personal information to the company. Also, show how the user can earn the referral reward if their friend successfully completes the referral. Redirect to original location

Dashboard and analytics (30 seconds): Demonstrate the dashboard where users can track their referral link activity and analytics. Show how users can see how many clicks their link has received, how many referrals have been successful, and how much reward they have earned.

Conclusion (30 seconds): Summarize the benefits of zklinks, including protecting user privacy, enabling participation in referral programs, and providing analytics to track progress. Encourage users to try Stealthlink for themselves and share it with their friends.


Sponsors:
Scroll: EVM compatible base chain (Dapp challenge)
Gnosis Chain: EVM compatible base chain (Dapp challenge)
Connext: Call contracts across different L2 chains
Polybase: Web3 Firebase
Fuel labs:
Graph: Data indexing of referrals
Push protocol: notifications when a link is clicked


-->