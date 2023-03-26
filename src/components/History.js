import React, { useState, useEffect } from "react";
import { Button, Input, Table } from "antd";
import { APP_NAME } from "../util/constants";
import { getTransactions } from "../util/covalent";
import { abbreviate, col, getDateStringFromTimestamp } from "../util";
import { LineChart } from "react-chartkick";

const COLUMNS = [
  col("tx_hash", row => abbreviate(row || '', 6)),
  col("from_address"),
  col("value"),
  col("gas_spent"),
  col("block_signed_at", row => getDateStringFromTimestamp(row, true)),
];

function History({ activeChain }) {
  const [address, setAddress] = useState(
    "0xAE985d249B125c7b2CCc000B1D6ea250e1204E41"
  );
  const [loading, setLoading] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setData(undefined)
  }, [activeChain])

  const fetchHistory = async () => {
    if (!address || !activeChain) {
      alert("Address and chainId are required");
      return;
    }

    setLoading(true);
    try {
      const res = await getTransactions(activeChain.id, address);
      setData(res.data.data.items);
    } catch (e) {
      console.error(e);
      alert("error getting signdata" + e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p>
        This page can be used to lookup {APP_NAME} transactions against a given&nbsp;
        {activeChain.name} address.
      </p>
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        prefix="Address"
      ></Input>
      <br />
      <p></p>

      &nbsp;
      <Button onClick={fetchHistory} disabled={loading} loading={loading}>
        View referrals
      </Button>&nbsp;
      {address && data && <a href={`${activeChain.url}address/${address}`} target="_blank" rel="noreferrer">View on {activeChain.name}</a>}
      <br />
      <hr />
      {data && (
        <div>
          <h1>Referral Summary</h1>
          {/* Create a line chart grouped by the day */}
          <LineChart
            data={data.reduce((acc, row) => {
              const date = getDateStringFromTimestamp(row.block_signed_at, false);
              if (!acc[date]) {
                acc[date] = 0;
              }
              acc[date] += 1
              return acc;
            }, {})}
            xtitle="Date"
            ytitle="Referrals (Count)"
          />
          {/* <LineChart
            data={data.map((row) => [
              getDateStringFromTimestamp(row.block_signed_at, true),
              row.value,
            ])}
            xtitle="Date"
            ytitle="Value"
          /> */}
          <br />
          <h2>Transaction list</h2>
          <Table
            dataSource={data}
            columns={COLUMNS}
            className="pointer"
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  console.log("event", event.target.value);
                  window.open(
                    `${activeChain.url}tx/${record.tx_hash}`,
                    "_blank"
                  );
                }, // click row
                onDoubleClick: (event) => { }, // double click row
                onContextMenu: (event) => { }, // right button click row
                onMouseEnter: (event) => { }, // mouse enter row
                onMouseLeave: (event) => { }, // mouse leave row
              };
            }}
          />
        </div>
      )}
    </div>
  );
}

History.propTypes = {};

export default History;
