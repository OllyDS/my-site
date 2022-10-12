import { sentenceCase } from '../utils/utils';
import { style } from './Intro.styles';

type IntroType = {
    city: string;
    currentRole: string;
    firstName: string;
};

const Intro = ({ city, currentRole, firstName }: IntroType) => (
    <div className={style.introWrapper}>
        <p className={style.into}>
            I'm {sentenceCase(firstName)}, a {currentRole} based in {sentenceCase(city)}.
        </p>
    </div>
);

export { Intro };
