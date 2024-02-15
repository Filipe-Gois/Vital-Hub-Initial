import { ContainerBoxStyle } from "./style";

export const ContainerInputBox = ({
  fieldDirection = "column",
  children,
  fieldJustifyContent = "flex-start",
  fieldAlignItems = "stretch",
}) => {
  return (
    <ContainerBoxStyle
      fieldAlignItems={fieldAlignItems}
      fieldJustifyContent={fieldJustifyContent}
      fieldDirection={fieldDirection}
    >
      {children}
    </ContainerBoxStyle>
  );
};
