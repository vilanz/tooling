import path from 'path';
import fs from 'fs';
import React, { useEffect, useState, useRef } from 'react';

console.log(fs.Stats);

path.resolve('weeeeee');

export function testingStuffOut(): string {}

export const DumbComponent = (): JSX.Element => {
  let [counter] = useState(1);
  useEffect(() => {
    counter++;
  }, []);
  return <div>{counter}</div>;
};

const x = 1;

const a = () => {};

export default x;
