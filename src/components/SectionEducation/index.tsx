import * as S from './styles';
import Trybe_certificado from './images/Trybe_certificado.png'
import front_trybe from './images/front_trybe.png'
// import back_trybe from './images/back_trybe.png'
// import Ciencia_de_dados_trybe from './images/Ciencia_de_dados_trybe.png'
// import Fundamentos_trybe from './images/Fundamentos_trybe.png'
// import Docker_certificado from './images/Docker_certificado.png'
import Image from 'next/future/image';

const imagesEducation = [
  Trybe_certificado,
  front_trybe,
  // Fundamentos_trybe,
  // back_trybe,
  // Ciencia_de_dados_trybe
];

const courses = [
  {
    title: 'Trybe: 05/21 - 05/22',
    description: 'Escola de programação extremamente reconhecida no mercado de trabalho'
  },
  {
    title: 'Unicamp: 03/2020 - Cursando',
    description: 'Matematica Computacional - Bacharel'
  }
]

const css = { width: '400px', height: '225px', borderRadius: '10px' }

const SectionEducation = () => (
  <S.Wrapper>
    <h1>Educação</h1>
    <S.Formations>
      {courses?.map((course) => (
        <S.CardFormation key={course.title}>
          <S.TitleFormation>
            {course.title}
          </S.TitleFormation>
          <S.Description>
            {course.description}
          </S.Description>
        </S.CardFormation>
      ))}
    </S.Formations>
    <S.Images>
      {imagesEducation?.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt='certificados'
          style={css}
       />
      ))}
    </S.Images>
  </S.Wrapper>
)

export default SectionEducation
