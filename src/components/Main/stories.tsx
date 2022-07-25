import Main from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado É AQUI',
    description: 'Typescript, ReactJS, NextJS e Styled Components É AQUI'
  }
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main>  = (args) => (
  <Main
    {...args}
  />
)

export const Primary = Basic.bind({});

Primary.args = {
  title: 'React Avançado123',
  description: 'Typescript, ReactJS, NextJS e Styled Components'
};
