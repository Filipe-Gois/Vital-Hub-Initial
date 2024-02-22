import { FontAwesome6 } from "@expo/vector-icons";
import { StethoscopeBox } from "./style";
import { useState } from "react";
import { ModalAgendarConsulta } from "../Modal";

const Stethoscope = ({
  onPressAgendar,
  setAgendarConsulta,
  agendarConsulta,
}) => {
  // const [agendarConsulta, setAgendarConsulta] = useState(false);
  return (
    <>
      <StethoscopeBox onPress={onPressAgendar}>
        <FontAwesome6 name="stethoscope" size={32} color="white" />
      </StethoscopeBox>

      <ModalAgendarConsulta
        textButton1="Continuar"
        textButton2="Cancelar"
        visible={agendarConsulta}
        setShowModalCancel={setAgendarConsulta}
        title={"Agendar consulta"}
      />
    </>
  );
};

export default Stethoscope;
