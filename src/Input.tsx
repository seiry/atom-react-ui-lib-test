import  { FC, useCallback, useEffect, useState } from 'react';

export const Input: FC = () => <input type="text" />;

export const Button: FC = () => <button>Click me</button>;

export const Combination: FC = () => {


  return (
    <>
      <Input />
      <Button />
    </>
  );
};
