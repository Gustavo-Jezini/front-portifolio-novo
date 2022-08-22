import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  padding: 20px 0px;
  border: red solid 2px;
  margin-bottom: 200px; // LEMBRAR DE APAGAR
`

export const Cards = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  padding: 20px 0px;
  border: red solid 2px;
`

export const CardContainer = styled.div`
  border: black solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: center;
  width: 200px;
  max-height: 80%;
`

export const JobLogo = styled.img`
  background-color: blue;
  margin-top: 10px;
  height: 75px;
  width: 75px;
  border-radius: 100px;
  align-self: center;
`

export const JobTitle = styled.h3`
  color: red;
  margin-bottom: 30px;
`
export const JobDescription = styled.p`
  max-height: auto;
  font-size: 15px;
  padding: 0px 10px;
`
