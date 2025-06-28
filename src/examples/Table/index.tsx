import { Table, TabbedCard, type Header } from "@mankindui/core";
import Code from "./code.mdx";

const TableExample = () => {
  const configure = {
    padding: "p-5",
    align: "align-top",
  };

  const HEADERS: Array<Header> = [
    {
      title: "year",
      mapToDataAttribute: "year",
      width: "150fr",
      alignHeader: "left",
      alignContent: "left",
    },
    {
      title: "artist",
      mapToDataAttribute: "artist",
      width: "150fr",
      alignHeader: "left",
      alignContent: "left",
    },
    {
      title: "song",
      mapToDataAttribute: "song",
      width: "300fr",
      alignHeader: "left",
      alignContent: "left",
    },
    {
      title: "amount ($)",
      mapToDataAttribute: "amount",
      width: "100fr",
      alignHeader: "right",
      alignContent: "right",
    },
  ];

  const DATA = [
    {
      year: 2003,
      artist: "Kanlam",
      song: "Extended dynamic paradigm",
      amount: "4",
    },
    {
      year: 2003,
      artist: "Subin",
      song: "Focused even-keeled ability",
      amount: "14",
    },
    {
      year: 1999,
      artist: "Alpha",
      song: "Organic directional projection",
      amount: "30",
    },
  ];

  return (
    <TabbedCard componentName="Table">
      <TabbedCard.Preview>
        <>
          <Table headers={HEADERS} data={DATA} configure={configure} />
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default TableExample;
