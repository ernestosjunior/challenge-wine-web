import { RadioGroup, Radio } from 'react-radio-group'
import * as S from './styles'

export interface FilterProps {
  filter: string
  setFilter: (value: string) => void
}

export function Filter({ filter, setFilter }: FilterProps) {
  return (
    <S.Form>
      <S.Title>Refine sua busca</S.Title>
      <S.Subtitle>Por Preço</S.Subtitle>
      <RadioGroup
        name="filter"
        selectedValue={filter}
        onChange={(value) => setFilter(value)}
      >
        <S.OptionText>
          <Radio value="0-40" />
          <span>Até R$40</span>
        </S.OptionText>
        <S.OptionText>
          <Radio value="40-60" />
          <span>R$40 A R$60</span>
        </S.OptionText>
        <S.OptionText>
          <Radio value="100-200" />
          <span>R$100 A R$200</span>
        </S.OptionText>
        <S.OptionText>
          <Radio value="200-500" />
          <span>R$200 A R$500</span>
        </S.OptionText>
        <S.OptionText>
          <Radio value="500" />
          <span>Acima de R$500</span>
        </S.OptionText>
      </RadioGroup>
    </S.Form>
  )
}
