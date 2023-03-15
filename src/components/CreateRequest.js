import React, { useState } from "react";
import { Button, Input, Row, Col, Radio, Steps } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { signatureUrl, ipfsUrl, getExplorerUrl, toHexString } from "../util";
import { CREATE_STEPS, EXAMPLE_FORM } from "../util/constants";
import { FileDrop } from "./FileDrop/FileDrop";
import { storeFiles } from "../util/stor";
import { deployContract, validAddress } from "../contract/linkContract";

const { Step } = Steps;

function CreateRequest({ activeChain }) {
  const [data, setData] = useState({ files: [] });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const updateData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const isValid = (data) => {
    return (
      data.title &&
      data.description &&
      data.files?.length > 0 &&
      validAddress(data.signerAddress)
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
        "Please provide a title, description, valid address, and at least one file."
      );
      return;
    }

    setLoading(true);

    // Format files for upload.
    const files = data.files;

    let res = { ...data };
    res["chainId"] = activeChain.id;

    try {
      // 1) deploy base contract with metadata,
      const contract = await deployContract(data.title, data.signerAddress);
      // res["contract"] = contract;
      res["address"] = contract.address
      res["files"] = files.map(f => f.path)

      const blob = new Blob([JSON.stringify(res)], { type: 'application/json' })
      const metadataFile = new File([blob], 'metadata.json')
      const allFiles = [...files, metadataFile]

      // 2) Upload files to ipfs,
      const cid = await storeFiles(allFiles);
      res['cid'] = cid

      // 3) return shareable url.
      res["signatureUrl"] = signatureUrl(cid);
      res["contractUrl"] = getExplorerUrl(activeChain, res.address);

      // Result rendered after successful doc upload + contract creation.
      setResult(res);
      try {
        // await postPacket(res.zklink request);
      } catch (e) {
        console.error("error posting zklink request", e);
      }
    } catch (e) {
      console.error("error creating zklink request", e);
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
          <div className="create-form white boxed">
            <h2>Create new zklink request</h2>
            <a href="#" onClick={setDemoData}>Set demo data</a>
            <br />

            <h3 className="vertical-margin">Zklink request title:</h3>
            <Input
              placeholder="Title of the zklink request"
              value={data.title}
              prefix="Title:"
              onChange={(e) => updateData("title", e.target.value)}
            />
            <TextArea
              aria-label="Description"
              onChange={(e) => updateData("description", e.target.value)}
              placeholder="Description of the zklink request"
              prefix="Description"
              value={data.description}
            />

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
            {error && <div className="error-text">{error}</div>}
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
                  <a href={result.signatureUrl} target="_blank">
                    Open zklink url
                  </a>
                </p>

                {/* <div>{JSON.stringify(result, null, "\t")}</div> */}
              </div>
            )}
          </div>
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
