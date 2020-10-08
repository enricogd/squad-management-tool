import React, { ChangeEvent, KeyboardEvent } from 'react'

import * as S from './styles'
import { IInputPrimaryProps } from './types'

export default function TagInput(props: IInputPrimaryProps) {
  const { tags, setTags, id, label } = props

  const removeTags = (indexToRemove: number) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }
  const addTags = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '' && event.target.value.indexOf(';') !== 0) {
      setTags([...tags, event.target.value.replace(/\W/g, '').trim()])
      event.target.value = ''
    }
  }

  const eventHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ';') {
      // TODO: improve this type
      addTags((event as unknown) as ChangeEvent<HTMLInputElement>)
    }
  }

  return (
    <S.TagInput id={id}>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <span>{tag}</span>
            <span onClick={() => removeTags(index)}>x</span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={eventHandler}
        placeholder="Press enter to add tags"
        maxLength={20}
      />
      <label htmlFor={id}>{label}</label>
    </S.TagInput>
  )
}
