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
        margin: 10px 0 20px;

        @media only screen and (max-width: 768px) {
            text-align: center;
            margin: 20px;
        }
    `,
    Subtext: styled.p`
        font-family: Rubik;
        font-size: 14px;
        font-weight: 700;
    `,
    FirstIconWrapper: styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        @media only screen and (max-width: 768px) {
            & img:first-child {
                margin-left: 80px;
            }
            & img:nth-child(2) {
                margin-right: 80px;
            }
        }
    `,
    SecondIconWrapper: styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        @media only screen and (max-width: 768px) {
            margin: 0 40px;
        }
    `,
    Image: styled.img`
        padding: 8px;
        width: 72px;
    `,
};

export { S };
