import styled from 'styled-components';

const S = {
    Wrapper: styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
    `,
    Text: styled.p`
        font-family: Rubik;
        font-size: 20px;
        font-weight: 700;
        margin: 10px 0px 20px;
    `,
    Subtext: styled.p`
        font-family: Rubik;
        font-size: 14px;
        font-weight: 700;
    `,
    Image: styled.img`
        cursor: pointer;
        padding: 8px;
        width: 72px;
    `,
};

export { S };
