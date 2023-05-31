import { S } from './Languages.styles';

const Languages = () => (
    <S.Wrapper>
        <div>
            <S.Text>Here are some of the languages, frameworks and tools I'm most familiar with.</S.Text>
        </div>
        <S.FirstIconWrapper>
            <S.Image src='js-icon.png' alt='Javascript' title='Javascript' />
            <S.Image src='ts-icon.png' alt='Typescript' title='Typescript' />
            <S.Image src='python-icon.png' alt='Python' title='Python' />
            <S.Image src='rust-icon.png' alt='Rust' title='Rust' />
        </S.FirstIconWrapper>
        <S.FirstIconWrapper>
            <S.Image src='aws-icon.png' alt='AWS' title='AWS' />
            <S.Image src='terraform-icon.svg' alt='Terraform' title='Terraform' />
            <S.Image src='postgresql-icon.png' alt='PostgresQL' title='PostgresQL' />
            <S.Image src='elasticsearch-icon.png' alt='Elastic Search' title='Elastic Search' />
            <S.Image src='kafka-icon.png' alt='Kafka' title='Kafka' />
        </S.FirstIconWrapper>
        <S.SecondIconWrapper>
            <S.Image src='react-icon.png' alt='React' title='React' />
            <S.Image src='tokio-icon.png' alt='Tokio' title='Tokio' />
            <S.Image src='actix-icon.png' alt='Actix' title='Actix' />
            <S.Image src='fastapi-icon.svg' alt='Fast API' title='Fast API' />
            <S.Image src='express-icon.png' alt='Express' title='Express' />
            <S.Image src='flask-icon.png' alt='Flask' title='Flask' />
        </S.SecondIconWrapper>
    </S.Wrapper>
);

export { Languages };
