import { S } from "./Information.styles";

type InformationProps = {
    setDisplayCV: React.Dispatch<React.SetStateAction<boolean>>
}

const Information = ({ setDisplayCV }: InformationProps) => (
    <S.Wrapper>
        <div>
            <S.Text>You can view my CV and socials here.</S.Text>
        </div>
        <div>
            <S.Image src='cv-icon.png' alt='CV' title='CV' onClick={() => setDisplayCV(display => !display)}/>
            <a href="https://uk.linkedin.com/in/oliver-de-sousa" target="_blank" rel="noopener noreferrer">
                <S.Image src='linkedin-icon.png' alt='LinkedIn' title='LinkedIn' />
            </a>
            <a href="https://medium.com/@oliver.seq" target="_blank" rel="noopener noreferrer">
            <S.Image src='medium-icon.png' alt='Medium' title='Medium' />
            </a>
        </div>
    </S.Wrapper>
);

export { Information };
