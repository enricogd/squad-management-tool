import { ITeam } from 'interfaces/team'

export interface IFormationProps {
  team: ITeam
  setPlayerInPosition: (idx: number) => void
  onSave: () => void
  formation: number[]
  setFormation: React.Dispatch<React.SetStateAction<number[]>>
}

export interface ISelectOption {
  label: string
  value: number[]
}
