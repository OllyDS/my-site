import styled from "styled-components";
import { Palette } from "../../utils/theme";

const S = {
    Background: styled.div`
        background-image: linear-gradient(white, grey);
        margin-bottom: 20px;
        min-height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
    `,

    Divider: styled.div`
        background-color: ${Palette.DarkGrey};
        height: 1px;
        margin: 10px auto 20px;
        width: 600px;

        @media only screen and (max-width: 768px) {
            width: 80%;
        }
    `,
};

export { S };
