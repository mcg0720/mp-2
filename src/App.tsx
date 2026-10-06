import StephenKing from "./components/StephenKing.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Book} from "./interfaces/Books.ts";

const ParentDiv=styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
`;

export default function App(){

  // useState Hook to store Data.
  const [data, setData] = useState<Book[]>([]);

  // useEffect Hook for error handling and re-rendering.
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://stephen-king-api.onrender.com/api/books");
      const {data} : {data: Book[]} = await rawData.json();
      setData(data);
    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return(
      <ParentDiv>
        <StephenKing data={data}/>
      </ParentDiv>
  )
}