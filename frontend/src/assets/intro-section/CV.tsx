import { S } from './CV.styles';

type CVProps = {
    pdf: string;
};

const CV = ({ pdf }: CVProps) => (
    <S.Container>
        <object data={pdf} type="application/pdf" width="100%" height="100%">
            <p>Oops something went wrong! Please reload the page.</p>
            </object>
    </S.Container>
);

export { CV };
