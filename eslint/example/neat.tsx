import path from 'path';
import React, { useEffect, useState } from 'react';

path.resolve('weeeeee');

export function testingStuffOut(): string {
  return 'a';
}

export const SlightlyLessDumbComponent = (): JSX.Element => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    setCounter((c) => c + 1);
  }, []);
  return <div>{counter}</div>;
};

export const x = 1;
