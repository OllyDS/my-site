import styled from 'styled-components';
import { Palette } from '../../utils/theme';

const S = {
    Title: styled.h1`
        color: ${Palette.Orange};
        font-family: Rubik;
        font-size: 96px;
        font-weight: 700;
        margin: 0;
        padding-top: 36px;
        text-align: center;
        text-shadow: 1px 0 ${Palette.Black};
    `
};

export { S }
