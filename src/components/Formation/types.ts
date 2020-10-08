import { ITeam } from 'interfaces/team'

export interface IFormationProps {
  setTeam: React.Dispatch<React.SetStateAction<ITeam>>
  formation: number[]
  onSave: () => void
  setFormation: React.Dispatch<React.SetStateAction<number[]>>
  setPlayerInPosition: (idx: number) => void
  team: ITeam
}

export interface ISelectOption {
  label: string
  value: number[]
}
