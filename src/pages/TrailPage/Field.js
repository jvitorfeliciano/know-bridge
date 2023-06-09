import { Avatar } from "@mui/material";
import styled from "styled-components";
import colorDictionary from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";

export default function Field({ field }) {
    const navigate = useNavigate();

    const navigateToMaterialsPage = (subfieldId, type, adress) => {
        navigate(`/materials/${subfieldId}/type/${type}/adress/${adress}`);
    };

    console.log(field);

    const middle = Math.ceil(field.subfields.length / 2);
    const dataPartOne = field.subfields.slice(0, middle);
    const dataPartTwo = field.subfields.slice(middle);

    return (
        <Container>
            <Top>
                <TopLeft onClick={() => navigate(`/field/${field.id}`)}>
                    <Avatar alt={field.title} src={field.image} />
                    <h2>
                        Unidade {field.unitNumber}: {field.title}
                    </h2>
                </TopLeft>
                <TopRight>
                    <p>{field.progressPercentage ? field.progressPercentage : 0} % concluído</p>
                    <ProgressBar progress={field.progressPercentage} />
                </TopRight>
            </Top>
            <Bottom>
                <div>
                    {dataPartOne.map((subfield) => (
                        <h3
                            key={subfield.id}
                            onClick={() =>
                                navigateToMaterialsPage(subfield.id, subfield.videos[0].type, subfield.videos[0].id)
                            }
                        >
                            {subfield.title}
                        </h3>
                    ))}
                </div>
                <div>
                    {dataPartTwo.map((subfield) => (
                        <h3
                            key={subfield.id}
                            onClick={() =>
                                navigateToMaterialsPage(subfield.id, subfield.videos[0].type, subfield.videos[0].id)
                            }
                        >
                            {subfield.title}
                        </h3>
                    ))}
                </div>
            </Bottom>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 18px;
    margin-top: 16px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    background-color: ${colorDictionary.white};
    color: ${colorDictionary.gray};
    border: 1px solid rgba(33, 36, 44, 0.16);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 4px;
`;

const Top = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(33, 36, 44, 0.08);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopLeft = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;
    h2 {
        margin-left: 8px;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        :hover {
            text-decoration: underline;
        }
    }
`;
const TopRight = styled.div`
    width: 30%;
    p {
        text-align: end;
        margin-bottom: 4px;

        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }
`;

const Bottom = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    div {
        width: 50%;
        margin-top: 10px;
        word-wrap: break-word;
    }
    div > *:not(:first-child) {
        margin-right: 10px;
    }
    h3 {
        margin-bottom: 5px;
        text-align: center;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }
`;
