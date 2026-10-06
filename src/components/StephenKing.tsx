import styled from "styled-components";
import type {Book} from "../interfaces/Books.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div<{key: number}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function StephenKing(props : { data:Book[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Book) =>
                    <SingleCharDiv key={char.id}>
                        <h1>{char.Title}</h1>
                        <p>{char.Title} was published in {char.Year} by {char.Publisher}. It has {char.Pages} pages.</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}