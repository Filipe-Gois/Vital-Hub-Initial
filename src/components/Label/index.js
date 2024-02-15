import { Input } from "../Input";
import { ParagraphSemiBold } from "../Paragraph/style";
import { LabelStyle } from "./style";

const Label = ({
  titulo = "",
  placeholder,
  fieldValue,
  onChangeText,
  keyType,
  maxLength,
  onEndEditing,
  fieldWidth = 100,
  fieldHeight = 55,
  backGround = "",
  border = "",
  fieldMaxWidth = 100,
  widthLabel,
  maxWidthLabel,
}) => {
  return (
    <LabelStyle widthLabel={widthLabel} maxWidthLabel={maxWidthLabel}>
      <ParagraphSemiBold>{titulo}</ParagraphSemiBold>

      <Input
        placeholder={placeholder}
        fieldValue={fieldValue}
        onChangeText={onChangeText}
        keyType={keyType}
        maxLength={maxLength}
        onEndEditing={onEndEditing}
        fieldWidth={fieldWidth}
        fieldHeight={fieldHeight}
        border={border}
        backGround={backGround}
        fieldMaxWidth={fieldMaxWidth}
      />
    </LabelStyle>
  );
};

export default Label;
