import { sentenceCase } from '../../utils/utils';
import { S } from './Intro.styles';

type IntroType = {
    city: string;
    currentRole: string;
    firstName: string;
};

const Intro = ({ city, currentRole, firstName }: IntroType) => (
    <S.IntroWrapper>
        <S.Intro>
            I'm {sentenceCase(firstName)}, a {currentRole} based in {sentenceCase(city)}.
        </S.Intro>
    </S.IntroWrapper>
);

export { Intro };
