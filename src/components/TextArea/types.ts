import { InputHTMLAttributes } from 'react'

export interface IInputPrimaryProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
}
