import { TEAMS } from 'mocks/teams'
import React, { useState } from 'react'
import SectionTemplate from 'templates/SectionTemplate'
import * as S from './styles'
import { MdEdit, MdDelete, MdShare } from 'react-icons/md'
import {
  TiArrowUnsorted,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from 'react-icons/ti'
import { ITeam } from 'interfaces/team'

export default function TeamTable() {
  const [list, setList] = useState(TEAMS)

  const [sortBy, setSortBy] = useState({ header: '', order: '' })

  // export function sortDate(param: string) {
  //   return (rowA: Row, rowB: Row, _: string, __: boolean) => {
  //     const a = reverseDate(rowA.values[param])
  //     const b = reverseDate(rowB.values[param])

  //     if (a < b) return -1
  //     if (a > b) return 1
  //     return 0
  //   }
  // }

  const sorter = (a: ITeam, b: ITeam) => {
    const { header, order } = sortBy
    if (header === 'Name') {
    }
    let result = a.name.localeCompare(b.name)
  }

  // const sortRowsBy = (field) => () => {
  // 	const { header, order: oldOrder } = sortBy

  // 	const shouldChangeOrder = header === field

  // 	if (shouldChangeOrder) {
  // 		const order = oldOrder === 'asc' ? 'desc' : 'asc'

  // 		setSortBy((s) => ({ ...s, order }))

  // 		return
  // 	}

  // 	setSortBy({ header: field, order: 'asc' })
  // }

  return (
    <SectionTemplate title="My Teams" onClick={() => {}}>
      <S.Wrapper>
        <S.Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {list.map((team) => (
              <tr>
                <td>{team.name}</td>
                <td>
                  <p>{team.description}</p>
                  <S.ButtonsWrapper>
                    <MdDelete />
                    <MdShare />
                    <MdEdit />
                  </S.ButtonsWrapper>
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Wrapper>
    </SectionTemplate>
  )
}
