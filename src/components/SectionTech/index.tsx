import * as S from './styles';
import reactLogo from './images/react.png';
import graphql from './images/graphql.png';
import Cypress from './images/cypress.png';
import nextjs from './images/nextjs.png';
import storybook from './images/storybook.png';
import strapi from './images/strapi.png';
import typescript from './images/typescript.png';
import jest from './images/jest.png';
import Image from 'next/future/image';

const technologies = [
  {
    title: 'ReactJs',
    image: reactLogo
  },
  {
    title: 'TypeScript',
    image: typescript
  },
  {
    title: 'Jest',
    image: jest
  },
  {
    title: 'NextJS',
    image: nextjs
  },
  {
    title: 'Cypress',
    image: Cypress
  },
  {
    title: 'StoryBook',
    image: storybook
  },
  {
    title: 'Strapi',
    image: strapi
  },
  {
    title: 'Graphql',
    image: graphql
  }
]

const SectionTech = () => (
  <S.Wrapper>
    {technologies?.map((tech) => (
      <S.CardTech key={tech.title}>
        <Image src={tech.image} alt={tech.title}/>
        <h3>{tech.title}</h3>
      </S.CardTech>
    ))}
  </S.Wrapper>
)

export default SectionTech
