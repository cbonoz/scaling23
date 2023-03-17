import { APP_DESC, APP_NAME } from "../util/constants";

// Create an example about component for this app
export const About = () => {

    return (
        <div>
            <p>
                {APP_NAME} is a {APP_DESC} for businesses and individuals.
            </p>

            <p>
                When on a zklink request page like this one, connect your wallet and sign the message with your address. You will be redirected to the url and your address and the owners address will be recorded on the blockchain.
            </p>

            <p>Create your own zklink:&nbsp;
                <a href="/" target={"_blank"}>here</a>
            </p>
        </div>
    );

}
