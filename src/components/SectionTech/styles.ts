import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  background-color: black;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0px 150px;
  margin-bottom: 200px; // LEMBRAR DE APAGAR
`

export const CardTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 10px;
  border: 1px black solid;
`

