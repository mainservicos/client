import { useState, TextareaHTMLAttributes } from 'react'

import * as S from './styles'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  onInputChange?: (value: string) => void
  full?: boolean
  label?: string
  initialValue?: string
  disabled?: boolean
  error?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
const TextArea = ({
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInputChange,
  ...props
}: TextAreaProps) => {
  const [value, setValue] = useState(initialValue)

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.TextAreaStyled
          onChange={onChangeInput}
          value={value}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        ></S.TextAreaStyled>
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextArea
