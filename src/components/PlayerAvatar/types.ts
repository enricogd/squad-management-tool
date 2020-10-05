import { IPlayer } from 'interfaces/player'

export interface IPlayerAvatarProps {
  player: IPlayer
  pickedRatio?: number
  border?: 'highlight' | 'placeholder' | 'none'
}
