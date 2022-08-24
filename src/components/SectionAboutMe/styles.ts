import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 2px green;
`

export const CardAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 275px;
  border: solid 1px green;
`

export const TitleAndImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
`
export const Description = styled.p`
  padding: 0px 20px 10px 20px;
  text-align: center;
`
