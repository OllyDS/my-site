import styled from "styled-components";
import { Palette } from "../../utils/theme";

const S = {
    Background: styled.div`
        background-image: linear-gradient(white, grey);
        min-height: 100vh;
        width: 100%;
    `,

    Divider: styled.div`
        background-color: ${Palette.DarkGrey};
        height: 1px;
        margin: 10px auto 20px;
        width: 600px;
    `,
};

export { S };
