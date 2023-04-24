import { useState } from "react";
import * as S from './styles';

type AddTaskProps = {
  setNewTask: any,
  onSubmit: () => void,
}

const AddTask = ({ setNewTask, onSubmit }: AddTaskProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setNewTask({
      content: e.target.value,
      completed: false,
      uuid: crypto.randomUUID()
    });
  };

  const handleSubmit = () => {
    onSubmit();
    setInputValue('');
  };

  return (
    <div>
      <S.AddTaskInput type="text"  value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
      <button onClick={handleSubmit}>Criar</button>
    </div>
  )
}

export {
  AddTask
}