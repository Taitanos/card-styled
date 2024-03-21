import styled from 'styled-components';

type StyledImagesCardPropsType = {
    image: string
}

export const StyledImagesCard = styled.img<StyledImagesCardPropsType>`
  height: 170px;
  width: 280px;
  margin-bottom: 10px;
  content: url(${(props) => props.image});
`