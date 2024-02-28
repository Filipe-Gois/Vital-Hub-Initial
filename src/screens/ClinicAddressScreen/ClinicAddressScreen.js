import React, { useState } from "react";
import {
  Container,
  FormBox,
  MainContent,
} from "../../components/Container/style";
import { Title } from "../../components/Title/style";
import GPS from "../../components/GPS";
import GpsMap from "../../assets/MapImage.png";
import ClinicAddress from "../../components/ClinicAddress";
import { ButtonSecondary } from "../../components/Button/style";
import { TextCreateAccount2 } from "../../components/Paragraph/style";

const ClinicAddressScreen = () => {
  const [clinic, setClinic] = useState({
    id: "1",
    name: "Clínica Natureh",
    city: "São Paulo",
    state: "SP",
    street: "Rua Vicenso Silva, 987",
    bairro: "Moema-SP",
    number: "578",
  });
  return (
    <Container>
      <MainContent>
        <GPS src={GpsMap} />

        <ClinicAddress dados={clinic} />

        <ButtonSecondary onPress={() => setShowModalCancel(false)}>
          <TextCreateAccount2>Cancelar</TextCreateAccount2>
        </ButtonSecondary>
      </MainContent>
    </Container>
  );
};

export default ClinicAddressScreen;
