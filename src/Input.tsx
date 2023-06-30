import { atom, useAtomValue, useSetAtom } from 'jotai';
import { ChangeEventHandler, FC, useCallback, useEffect } from 'react';
const inputAtom = atom('');

export const Input: FC = () => {
  const setText = useSetAtom(inputAtom);
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setText(e.target.value),
    [setText]
  );

  return <input type="text" onChange={handleChange} />;
};

export const Button: FC = () => {
  const text = useAtomValue(inputAtom);

  return <button>Click me {text}</button>;
};

interface CombinationProps {
  defaultText?: string;
}

export const Combination: FC<CombinationProps> = (props) => {
  const { defaultText } = props;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <h1>{defaultText}</h1>
      <Input />
      <Button />
    </>
  );
};
