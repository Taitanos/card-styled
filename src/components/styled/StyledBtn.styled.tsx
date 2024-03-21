import styled, {css} from 'styled-components';

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: 'primary' | 'outlined'
}

export const StyledBtn = styled.button<StyledBtnPropsType> `
  width: 86px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: ${props => props.fontSize || '10px'};
  font-weight: 700;

  ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
    background-color: ${props => props.color || '#4E71FE'};
    color: snow;
  `}
  
  ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || '#4E71FE'};
    color: ${props => props.color || '#4E71FE'};
    background-color: transparent;
  `}
  
  
`
