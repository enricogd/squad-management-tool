import { IPlayer } from 'interfaces/player'

export interface IPlayerAvatarProps {
  player?: IPlayer | null
  pickedRatio?: number
  border?: 'highlight' | 'placeholder' | 'none'
  onClick: (idx: number) => void
  position: number
}
