import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
  border: 2px solid blue;
`

export const Formations = styled.div`
  background-color: yellow;
  width: 55%;
`

export const CardFormation = styled.div`
  border: solid 1px black;
  margin: 15px 0px;
`

export const TitleFormation = styled.h2`
  color: red;
`

export const Description = styled.p`
  font-size: larger;
`

export const Images = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Imagem = styled.img`
  height: 150px;
  width: 150px;
`
