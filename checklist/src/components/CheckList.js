import { useState } from "react";
import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const StyledCheckBox = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #8a2be2;
  }
`;

const RemoveButton = styled.div`
  margin: 0 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover{
    color: #ff6b6b;
  }
  display: none;
`;

const CheckListContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 30px;
  &:hover{
    ${RemoveButton} {
      display: flex;
    }
  }
`;

function CheckList({ item }) {
  let [checked, setChecked] = useState(false);
  let [list, setList] = useState(item);

  function checkedBoxChange() {
    setChecked(!checked);
  }

  function remove() {
    setList({ type: 'hide' });
  }

  return (
  <>
    {list.type !== 'hide' && 
      <CheckListContainer className="checkList">
        <StyledCheckBox type="checkbox" onChange={checkedBoxChange} />
        <span className={checked ? "checked" : null}>{list.content}</span>
        <RemoveButton onClick={remove}>
          <MdDelete />
          </RemoveButton>
        </CheckListContainer>
      }
  </>
  )
}

export default CheckList;