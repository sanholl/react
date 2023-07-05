import { useState } from 'react';
import styled, { css } from 'styled-components';

const AddButton = styled.button`
  background-color: #8a2be2;
  &:hover {
    background-color: #b370f2;
  }
  &:active {
    background-color: #5a05a9;
  }

  z-index: 5;
  width: 80px;
  height: 80px;
  border: none;
  font-size: 60px;
  color: white;
  position: absolute;
  bottom: -5%;
  left: 50%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  padding-bottom: 10px;

  transition: all 0.3s ease-out;
  
  ${props =>
    props.open &&
    css`
        background-color: #ff6b6b;
        &:hover{
          background-color: #ff8787;
        }
        &:active{
          background-color: #fa5252;
        }
        transform: translate(-50%) rotate(45deg);
      `}
  `;

function InputBox({ onInputValue }) {
  let [open, setOpen] = useState(false);

  return (
    <>
      {
        open && <div className='inputBox'>
          <input type='text' onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onInputValue(e.target.value);
              setOpen(false);
            }
          }} placeholder='할 일을 작성 후, Enter를 누르세요' />
        </div>
      }
      <AddButton onClick={() => { setOpen(!open) }} open={open}>+</AddButton>
    </>
  );
}

export default InputBox;