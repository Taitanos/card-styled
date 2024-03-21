import React from 'react';
import styled from 'styled-components';
import { Card } from './components/styled/Card.styled';
import {StyledImagesCard} from './components/styled/StyledImagesCard.styled';
import images from './components/assets/image/imagesCard.svg'
import {StyledParagraph} from './components/styled/StyledParagraph.styled';
import {StyledHeading} from './components/styled/StyledHeading.styled';
import {StyledBtn} from './components/styled/StyledBtn.styled';
import {StyledBox} from './components/styled/StyledBox.styled';


function App() {
  return (
    <div className="App">
        <Box>
            <Card>
                <StyledImagesCard image={images} />
                <StyledHeading>Headline</StyledHeading>
                <StyledParagraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledParagraph>
                <StyledBox>
                    <StyledBtn btnType={'primary'}>See more</StyledBtn>
                    <StyledBtn btnType={'outlined'}>Save</StyledBtn>
                </StyledBox>
            </Card>
        </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`