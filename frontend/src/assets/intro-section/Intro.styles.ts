import styled from 'styled-components';

const S = {
    IntroWrapper: styled.div`
        display: flex;
        justify-content: center;
        text-align: center;
    `,

    Intro: styled.p`
        font-family: Rubik;
        font-size: 30px;
        font-weight: 700;
        margin: 24px 0 0;

        @media only screen and (max-width: 768px) {
            font-size: 24px;
            margin: 18px 0 0;
        }
    `,
}

export { S }
