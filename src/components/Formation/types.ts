import { ITeam } from 'interfaces/team'

export interface IFormationProps {
  team: ITeam
  setPlayerInPosition: (idx: number) => void
  onSave: () => void
}
