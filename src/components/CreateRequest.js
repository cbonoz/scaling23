import React, { useState } from "react";
import { Button, Input, Row, Col, Radio, Steps, Card } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { redirectUrl, ipfsUrl, getExplorerUrl, toHexString, isValidUrl } from "../util";
import { CREATE_STEPS, EXAMPLE_FORM } from "../util/constants";
import { deployContract } from "../contract/linkContract";
import { createLink } from "../util/polybase";

function CreateRequest({ activeChain, account }) {
  const [data, setData] = useState({ reward: 0 })
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const updateData = (key, value) => {
    if (key === 'redirectUrl') {
      value = (value.indexOf('://') === -1) ? 'http://' + value : value;
    }
    setData({ ...data, [key]: value });
  };

  const isValid = (data) => {
    return (
      data.title && isValidUrl(data.redirectUrl)
    );
  };
  const isValidData = isValid(data);

  const create = async () => {
    setError(undefined);

    const currentNetwork = await window.ethereum.request({
      method: "eth_chainId",
    });

    const targetChainId = toHexString(activeChain.id)

    // Make sure current network is correct based on current metamask network.
    if (targetChainId !== currentNetwork) {
      setError(
        `Please switch to the ${activeChain.name} (${targetChainId}) network in metamask to create this zklink request.`
      );
      return;
    }


    if (!isValidData) {
      setError(
        "Please provide a zklink page title and valid redirect URL."
      );
      return;
    }

    setLoading(true);

    // Format files for upload.
    let res = { ...data };
    res["chainId"] = activeChain.id;

    try {
      // 1) deploy base contract with metadata,
      const contract = await deployContract(data.title, data.reward, data.redirectUrl);
      // res["contract"] = contract;
      res["address"] = contract.address
      res["redirectUrl"] = redirectUrl(contract.address);

      // 3) return shareable url.
      res["contractUrl"] = getExplorerUrl(activeChain, res.address);

      // Result rendered after successful doc upload + contract creation.
      setResult(res);

      const polyResult = await createLink(
        {
          id: contract.address,
          title: data.title,
          redirectUrl: data.redirectUrl,
          reward: data.reward,
          owner: account
        }
      )


    } catch (e) {
      console.error("error creating zklink", e);
      setError(e.message || e.toString())
    } finally {
      setLoading(false);
    }
  };

  const getStep = () => {
    if (!!result) {
      return 2;
    } else if (isValidData) {
      return 1;
    }
    return 0;
  };

  const setDemoData = (e) => {
    e.preventDefault();
    setData({ ...EXAMPLE_FORM });
  };


  return (
    <div>
      <Row>
        <Col span={16}>
          <Card className="create-form white boxed" title="Create a new zklink">
            <a href="#" onClick={setDemoData}>Set demo data</a>
            <br />

            <h3 className="vertical-margin">Link title:</h3>
            <Input
              placeholder="This title will be displayed on the zklink redirect page."
              value={data.title}
              prefix="Title:"
              onChange={(e) => updateData("title", e.target.value)}
            />
            <br />
            <br />
            <p>
              When the link is visited, the visited will be prompted to sign a message with their address and be redirected to the url below.

            </p>

            <Input
              placeholder="Redirect URL (e.g. https://example.com)"
              value={data.redirectUrl}
              prefix="Redirect URL:"
              onChange={(e) => updateData("redirectUrl",
                e.target.value
              )}
            />
            {/*             
            <TextArea
              aria-label="Description"
              onChange={(e) => updateData("description", e.target.value)}
              placeholder="Description of the zklink request"
              prefix="Description"
              value={data.description}
            /> */}

            <Button
              type="primary"
              className="standard-button"
              onClick={create}
              disabled={loading} // || !isValidData}
              loading={loading}
            >
              Create zklink request!
            </Button>
            {!error && !result && loading && (
              <span>&nbsp;Note this may take a few moments.</span>
            )}
            <br />
            <br />
            {error && <div>
              <div className="error-text">{error}</div>
            </div>
            }
            {result && (
              <div>
                <div className="success-text">Created zklink request!</div>
                <a href={ipfsUrl(result.cid)} target="_blank">
                  View metadata
                </a>
                <br />
                <a href={result.contractUrl} target="_blank">
                  View created contract
                </a>
                <br />
                <br />
                <p>
                  Share this url with the potential signer:
                  <br />
                  <a href={result.redirectUrl} target="_blank">
                    Open zklink url
                  </a>
                </p>

                {/* <div>{JSON.stringify(result, null, "\t")}</div> */}
              </div>
            )}
          </Card>
        </Col>
        <Col span={1}></Col>
        <Col span={7}>
          <div className="white boxed">
            <Steps
              className="standard-margin"
              direction="vertical"
              size="small"
              items={CREATE_STEPS}
              current={getStep()}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CreateRequest;
