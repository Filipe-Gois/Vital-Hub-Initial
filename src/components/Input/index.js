import { InputStyle } from "./style"

export const Input = ({

    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    maxLength,
    onEndEditing


}) => {
    return (
        <InputStyle
            placeholder={placeholder}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            keyType={keyType}
            maxLength={maxLength}
            onEndEditing={onEndEditing}

        />

    )
}