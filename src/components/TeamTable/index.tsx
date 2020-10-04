import { TEAMS } from 'mocks/teams'
import React, { useMemo, useState } from 'react'
import SectionTemplate from 'templates/SectionTemplate'
import * as S from './styles'
import { MdEdit, MdDelete, MdShare } from 'react-icons/md'
import {
  TiArrowUnsorted,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from 'react-icons/ti'
import ReactTooltip from 'react-tooltip'
import { ISortBy } from './types'

export default function TeamTable() {
  const [list, setList] = useState(TEAMS)
  const [sortBy, setSortBy] = useState<ISortBy>({
    header: 'default',
    order: 'asc',
  })

  useMemo(() => {
    const { header, order } = sortBy
    if (header === 'default') return
    let sortedList = [...list].sort((a, b) => {
      if (a[header] < b[header]) return order === 'asc' ? -1 : 1
      if (a[header] > b[header]) return order === 'asc' ? 1 : -1
      return 0
    })

    setList(sortedList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy])

  const sortRowsBy = (col: ISortBy['header']) => () => {
    const { header, order } = sortBy

    const shouldChangeOrder = header === col

    if (shouldChangeOrder) {
      const newOrder = order === 'asc' ? 'desc' : 'asc'

      setSortBy((x) => ({ ...x, order: newOrder }))

      return
    }

    setSortBy({ header: col, order: 'asc' })
  }

  const handleSortIcon = (col: ISortBy['header']) => {
    const { header, order } = sortBy
    if (col === 'default') return
    if (header === col) {
      // TODO: check if sorted down is asc or desc in other websites
      return order === 'asc' ? <TiArrowSortedDown /> : <TiArrowSortedUp />
    }
    return <TiArrowUnsorted />
  }

  return (
    <SectionTemplate title="My Teams" onClick={() => {}}>
      <S.Wrapper>
        <S.Table>
          <thead>
            <tr>
              <th onClick={sortRowsBy('name')}>
                <div>
                  <p>Name</p>
                  {handleSortIcon('name')}
                </div>
              </th>
              <th onClick={sortRowsBy('description')}>
                <div>
                  <p>Description</p>
                  {handleSortIcon('description')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((team) => (
              <tr>
                <td>{team.name}</td>
                <td>
                  <p>{team.description}</p>
                  <S.ButtonsWrapper>
                    <MdDelete data-tip data-for="delete" />
                    <ReactTooltip effect="solid" id="delete">
                      Delete
                    </ReactTooltip>
                    <MdShare
                      data-tip
                      data-for="share"
                      onClick={() =>
                        alert('This feature is still under construction 👷‍♂️🛠')
                      }
                    />
                    <ReactTooltip effect="solid" id="share">
                      Share
                    </ReactTooltip>
                    <MdEdit data-tip data-for="edit" />
                    <ReactTooltip effect="solid" id="edit">
                      Edit
                    </ReactTooltip>
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
