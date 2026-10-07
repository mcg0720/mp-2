import styled from "styled-components";
import type {Book} from "../interfaces/Books.ts";

const AllBooksDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: gray;
`;

const SingleBookDiv = styled.div<{ Publisher: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props) =>
            props.Publisher === "Doubleday" ? 'darkorange' :
                    props.Publisher === "Signet Books" ? 'palevioletred' :
                            props.Publisher === "Viking Press" ? 'skyblue' :
                                    props.Publisher === "Viking" ? 'skyblue' :
                                            props.Publisher === "Grant" ? 'lightgreen' :
                                                    props.Publisher === "Scribner" ? 'mediumpurple' :
                                                    'yellow' 
    };
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function StephenKing(props: { data: Book[] }) {
    return (
        <AllBooksDiv>
            {
                props.data.map((char: Book) =>
                    <SingleBookDiv key={char.id} Publisher={char.Publisher}>
                        <h1>{char.Title}</h1>
                        <p>{char.Title} was published in {char.Year} by {char.Publisher}. It has {char.Pages} pages.</p>
                    </SingleBookDiv>
                )
            }
        </AllBooksDiv>
    );
}