import React, { useState } from "react";
import {
  Container,
  FormBox,
  MainContent,
  MainContentScroll,
} from "../../components/Container/style";
import { Title } from "../../components/Title/style";
import { Button, ButtonSecondary } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { TextCreateAccount2 } from "../../components/Paragraph/style";
import { Theme } from "../../themes";
import ClinicCard from "../../components/ClinicCard";
import { FlatListStyle } from "../../components/FlatList/style";

const SelectClinicScreen = () => {
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [clinics, setClinics] = useState([
    {
      id: "1",
      name: "Clínica Natureh",
      city: "São Paulo",
      state: "SP",
      rate: "4,5",
      opening: "Seg-Sex",
    },
    {
      id: "2",
      name: "Diamond Pró-Mulher",
      city: "São Paulo",
      state: "SP",
      rate: "4,8",
      opening: "Seg-Sex",
    },
    {
      id: "3",
      name: "Clinica Villa Lobos",
      city: "Taboão",
      state: "SP",
      rate: "4,2",
      opening: "Seg-Sab",
    },
    {
      id: "4",
      name: "SP Oncologia Clínica",
      city: "Taboão",
      state: "SP",
      rate: "4,2",
      opening: "Seg-Sab",
    },
  ]);

  const handleClinicSelect = (clinicId) => {
    setSelectedClinic(clinicId);
  };

  return (
    <Container>
      <MainContentScroll>
        <MainContent>
          <FormBox margin={"30px 0 0 0"}>
            <Title>Selecionar clínica</Title>

            {/* <ClinicCard dados={clinics[0]} /> */}

            <FlatListStyle
              fieldWidth={"100%"}
              data={clinics}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <ClinicCard
                  isSelected={item.id === selectedClinic}
                  onSelect={() => handleClinicSelect(item.id)}
                  dados={item}
                />
              )}
              keyExtractor={(item) => item.id}
            />

            <Button padding={"0"} buttonStatus>
              <ButtonTitle buttonStatus={Theme.colors.whiteColor}>
                Continuar
              </ButtonTitle>
            </Button>

            <ButtonSecondary onPress={() => setShowModalCancel(false)}>
              <TextCreateAccount2>Cancelar</TextCreateAccount2>
            </ButtonSecondary>
          </FormBox>
        </MainContent>
      </MainContentScroll>
    </Container>
  );
};

export default SelectClinicScreen;
