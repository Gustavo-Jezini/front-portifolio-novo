import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Container>
      <S.Logo alt='Logo Jez.io'/>

      <S.Content className='content'>
        <S.TextContent className='text-content'>
          <S.Title>Dev. Gustavo Jezini</S.Title>
          <S.Description>Portifólio pessoal demonstrando conhecimento de desenvolvimento de software</S.Description>

          <S.LinksContent>
            <img alt='Link para LinkedIn'/>
            <img alt='Link para Github'/>
            <img alt='Link para Whats'/>
          </S.LinksContent>

        </S.TextContent>

        <img alt='Ilustração' />
      </S.Content>

    </S.Container>
  </S.Wrapper>
)

export default Main
