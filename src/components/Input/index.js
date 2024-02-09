import { InputStyle } from "./style"

export const Input = ({

    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    maxLength,
    onEndEditing,
    fieldWidth = 100,


}) => {
    return (
        <InputStyle
            fieldWidth={fieldWidth}

            placeholder={placeholder}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            keyType={keyType}
            maxLength={maxLength}
            onEndEditing={onEndEditing}

        />

    )
}