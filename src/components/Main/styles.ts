import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Wrapper = styled.main`
  text-align: center;

  ${media.greaterThan('medium')`
    text-align: left;
    margin: auto;
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.6rem auto 0;
  border: solid black;

  ${media.greaterThan('medium')`
    align-items: center;
    justify-content: space-between;
    margin: 15rem auto;
  `}
`

export const Logo = styled.img`
    width: min(16rem, 100%);
    align-self: center;
    border: solid red;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 60rem;
  margin: auto;

  ${media.greaterThan('medium')`
   text-align: left;
   margin: initial;
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: min(${theme.font.sizes.xxlarge}, 5vw);
    font-weight: ${theme.font.bold};

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: 2.2rem;
    line-height: 3rem;
    font-weight: 400;

    ${media.greaterThan('medium')`
      font-size: min(${theme.font.sizes.xlarge}, 3vw);
      line-height: min(5rem, 4.5vw);
    `}
  `}
`

export const LinksContent = styled.div`
  display: flex;
  flex-direction: row;
`
