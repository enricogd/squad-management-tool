import React from 'react'
import { Grid, Row } from 'styles/grid'
import SectionTemplate from 'templates/SectionTemplate'
import * as S from './styles'

export default function AverageList() {
  return (
    <SectionTemplate title="Top 5">
      <S.Wrapper title="Top 5">
        <Grid>
          <Row>
            <S.Col size={1}>
              <S.AvgTitle>Highest avg age</S.AvgTitle>
              <S.AvgList>
                <S.ListItem>
                  <span>Inter Milan</span>
                  <span>12.3</span>
                </S.ListItem>
                <S.ListItem>
                  <span>Inter Milan</span>
                  <span>12.4</span>
                </S.ListItem>
                <S.ListItem>
                  <span>Inter Milan</span>
                  <span>12.5</span>
                </S.ListItem>
                <S.ListItem>
                  <span>Inter Milan</span>
                  <span>12.5</span>
                </S.ListItem>
                <S.ListItem>
                  <span>Inter Milan</span>
                  <span>12.5</span>
                </S.ListItem>
              </S.AvgList>
            </S.Col>

            <S.Col size={1}>
              <S.AvgTitle>Lowest avg age</S.AvgTitle>
              <S.AvgList>
                <S.ListItem>
                  <span>Inter Milan</span>
                  <span>12.0</span>
                </S.ListItem>
                <S.ListItem>
                  <span>Inter Milan</span>
                  <span>12.1</span>
                </S.ListItem>
                <S.ListItem>
                  <span>Inter</span>
                  <span>12.0</span>
                </S.ListItem>
                <S.ListItem>
                  <span>Inter Milan</span>
                  <span>12.5</span>
                </S.ListItem>
                <S.ListItem>
                  <span>Inter Milan</span>
                  <span>12.5</span>
                </S.ListItem>
              </S.AvgList>
            </S.Col>
          </Row>
        </Grid>
      </S.Wrapper>
    </SectionTemplate>
  )
}
