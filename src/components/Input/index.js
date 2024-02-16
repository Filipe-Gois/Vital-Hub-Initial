import { InputStyle } from "./style";

export const Input = ({
  placeholder,
  fieldValue,
  onChangeText,
  keyType,
  maxLength,
  onEndEditing,
  fieldWidth = 100,
  fieldMaxWidth = 100,
  fieldHeight = 55,
  backGround = "",
  border = "",
  placeholderTextColor,
}) => {
  return (
    <InputStyle
      fieldWidth={fieldWidth}
      fieldMaxWidth={fieldMaxWidth}
      fieldHeight={fieldHeight}
      placeholder={placeholder}
      fieldValue={fieldValue}
      onChangeText={onChangeText}
      keyType={keyType}
      maxLength={maxLength}
      onEndEditing={onEndEditing}
      border={border}
      backGround={backGround}
      placeholderTextColor={placeholderTextColor}
    />
  );
};
