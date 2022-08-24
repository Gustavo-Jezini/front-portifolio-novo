import Image from 'next/future/image';
import * as S from './styles';

const SectionAboutMe = () => (
  <S.Wrapper>
    <h1>Sobre mim</h1>
    <S.CardAboutMe>
      <S.TitleAndImage>
        <img alt='Gustavo Jezini Matos'/>
        <h2>Gustavo Jezini Matos</h2>
      </S.TitleAndImage>
      <S.Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non error quia dolore quos. Labore ex, at sit voluptatum optio nesciunt tenetur. Culpa molestias rerum consectetur at repellendus amet tenetur facilis?
      </S.Description>
    </S.CardAboutMe>
  </S.Wrapper>
)

export default SectionAboutMe
