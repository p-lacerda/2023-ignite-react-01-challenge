import { useState } from "react";
import * as S from './styles';
import { PlusCircle } from "phosphor-react";

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
    <S.AddTaskWrapper>
      <S.AddTaskInput type="text" placeholder="Adicione uma nova tarefa"  value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
      <S.AddTaskButton onClick={handleSubmit}>
        Criar
        <PlusCircle size={16} />  
      </S.AddTaskButton>
    </S.AddTaskWrapper>
  )
}

export {
  AddTask
}