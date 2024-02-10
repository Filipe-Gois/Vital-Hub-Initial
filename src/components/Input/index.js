import { InputStyle } from "./style"

export const Input = ({

    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    maxLength,
    onEndEditing,
    fieldWidth = 100,
    fieldHeight = 55,


}) => {
    return (
        <InputStyle
            fieldWidth={fieldWidth}
            fieldHeight={fieldHeight}

            placeholder={placeholder}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            keyType={keyType}
            maxLength={maxLength}
            onEndEditing={onEndEditing}

        />

    )
}