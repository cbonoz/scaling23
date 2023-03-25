import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { APP_DESC, APP_NAME } from "../util/constants";
import logo from "../assets/logo.png";

// Create an example about component for this app
export const About = () => {
    const navigate = useNavigate();

    return (
        <div className="about-content">
            {/* Centered logo */}
            <div className="centered">
            <img src={logo} className="centered" style={{width:200}} />
            </div>
            <br/>
            <br/>
            <p>
                {APP_NAME} is a {APP_DESC} for businesses and individuals. Built as a prototype for the Scaling Ethereum 2023 hackathon.
            </p>

            <p>
            Unlike traditional referral programs, where personal information such as email addresses, phone numbers, or social media profiles may be shared, zklinks allows users to keep their personal data private while still being able to participate in referral programs and earn rewards.
            </p>

            <p>
            When a user generates a referral link using zklinks, the link is hashed and encrypted using zero knowledge proofs. This means that the link can be used to track referrals and determine whether a user is eligible for a reward, without revealing any personal information about the user or their friend. The platform also allows users to view their referral statistics from the app, such as the number of clicks and successful referrals, while maintaining their privacy. 
            </p>

            <p>
            Successful referrals are represented as permanent transactions against Zklink 'LinkContract' smart contracts rather than centralized databases. L2 networks also offer some of the lowest transaction fees and highest throughput such that click tracking can be done at scale.
            </p>

            <p>Create your own zklink:&nbsp;<br/><br/>
                <Button type="primary" onClick={() => navigate("/create")}>Create link</Button>
            </p>
        </div>
    );

}
