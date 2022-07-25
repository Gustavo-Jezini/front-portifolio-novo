import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src='/img/icon-192.png' alt='Imagem de um átomo e "React Avançado" escrito ao lado.'/>
    <S.Title>{title}</S.Title>
    <S.Description>
      {description}
    </S.Description>
    <S.Illustration src='/img/hero-illustration.svg' alt='Um dev de frente para tela com código' />
  </S.Wrapper>
)

export default Main
