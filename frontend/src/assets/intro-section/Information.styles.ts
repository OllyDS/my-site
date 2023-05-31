import styled from 'styled-components';

const StyledImage = styled.img`
    cursor: pointer;
    padding: 8px;
    width: 72px;
`;

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

        @media only screen and (max-width: 768px) {
            display: none;
        }
    `,
    SmallText: styled.p`
        font-family: Rubik;
        font-size: 20px;
        font-weight: 700;
        margin: 10px 0px 20px;
        text-align: center;

        @media only screen and (min-width: 768px) {
            display: none;
        }
    `,
    Subtext: styled.p`
        font-family: Rubik;
        font-size: 14px;
        font-weight: 700;
    `,
    Image: styled(StyledImage)``,
    CV: styled(StyledImage)`
        @media only screen and (max-width: 768px) {
            display: none;
        }
    `,
    CVDownload: styled.a`
        cursor: pointer;
        padding: 8px;
        width: 72px;

        @media only screen and (min-width: 768px) {
            display: none;
        }
    `,
    GithubImage: styled.img`
        border-radius: 50%;
        cursor: pointer;
        padding: 8px;
        width: 72px;
    `,
};

export { S };
