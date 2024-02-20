import styled from "styled-components";
import { Theme } from "../../themes";

export const CardConsultaStyle = styled.View`
  width: 100%;
  height: 102px;
  padding: 10px 20px 10px 10px;
  background-color: ${Theme.colors.whiteColor};
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 4px 4px #000;

  /* box-shadow para android */
  shadow-color: "black";
  shadow-opacity: 0.25;
  shadow-offset: 0px 4px;
  shadow-radius: 4px;
  elevation: 10;
`;

export const InfoTextBox = styled.View`
  width: 50%;
  height: 100%;
  /* border: 2px solid red; */
  justify-content: space-between;
`;

export const AgeAndTypeBox = styled(InfoTextBox)`
  flex-direction: row;
  height: max-content;
  flex-direction: row;
  width: 100%;
  border: none;
  justify-content: flex-start;
`;

export const Point = styled.View`
  border-radius: 3px;
  width: 3px;
  height: 3px;
  background-color: ${Theme.colors.lightGray};
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 6px;
`;

export const CancelBox = styled.View`
  width: max-content;
  height: 100%;

  justify-content: flex-end;
`;

export const HourBox = styled.View`
  width: 100px;
  height: 25px;
  background-color: ${(props) =>
    props.statusLista === "Pendente"
      ? Theme.colors.lightAqua
      : props.statusLista === "Cancelada" && Theme.colors.v3LightWhite};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
