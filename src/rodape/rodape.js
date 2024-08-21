import { Container, Section, Wrapper, Line, Text, TextContainer, SecondText, TextWrapper} from "./rodapeStyles";

export default function Rodape() {
  return <Section>
    <Container>
      <Wrapper>
        <Text>
          Suporte ao cliente:
        </Text>
      </Wrapper>
      
    </Container>
<Line />
<Container>
      <Wrapper>
        <TextWrapper>
        <TextContainer>
          <Text>Sobre</Text>
          <Text>Termos</Text>
          <Text>Privacidade</Text>
        
          </TextContainer>
          <SecondText>
        Copyright © 2023 <strong>Fauves Tecnologia </strong> 
        </SecondText>

        
         
        </TextWrapper>

        
       
       

      </Wrapper>
      
    </Container>
  </Section>;
}
