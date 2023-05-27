import styled from 'styled-components';
import { Palette } from '../../utils/theme';

const S = {
    // Overlay: styled.div`
    //     background-color: ${Palette.Black};
    //     bottom: 0;
    //     display: flex;
    //     height: 100vh;
    //     position: absolute;
    //     top: 0;
    //     width: 100vw;
    // `,

    Container: styled.div`
        background-color: ${Palette.SmokeGrey};
        border: 1px solid ${Palette.DarkGrey};
        border-radius: 2px;
        display: flex;
        height: 90vh;
        justify-content: center;
        left: 20%;
        margin: auto;
        position: absolute;
        top: 60px;
        width: 60%;
        z-index: 10;
    `,
};

export { S };
