import { Dispatch } from 'react'

export interface IInputPrimaryProps {
  tags: string[]
  setTags: Dispatch<React.SetStateAction<string[]>>
  id: string
  label: string
}
