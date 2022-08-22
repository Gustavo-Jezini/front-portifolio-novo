import * as S from './styles';

const experiences = [
  {
    logo: 'Logo A7',
    title: 'A7 Credit',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aliquid quidem architecto quae hic quis suscipit voluptatum impedit temporibus, in animi quam obcaecati porro! Molestias explicabo eos totam suscipit cumque?'
  },
  {
    logo: 'Logo TAB',
    title: 'TAB.dev',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aliquid quidem architecto quae hic quis suscipit voluptatum impedit temporibus, in animi quam obcaecati porro! Molestias explicabo eos totam suscipit cumque?'
  }
]

const SectionExperience = () => (
  <S.Wrapper>
    <h1>Experiencias</h1>
    <S.Cards>
      {experiences?.map((experience) => (
        <S.CardContainer key={experience.title}>
            <S.JobLogo alt={experience.logo}/>
            <S.JobTitle>{experience.title}</S.JobTitle>
            <S.JobDescription>{experience.description}</S.JobDescription>
        </S.CardContainer>
      )
      )}
    </S.Cards>
  </S.Wrapper>
)

export default SectionExperience
