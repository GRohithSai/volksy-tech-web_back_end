export default function taskBlock(trueOrFalse)
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-nextline
    const task = true;
    // eslint-disable-next-line
    const task2 = true;
  }

  return [task, task2];
}
