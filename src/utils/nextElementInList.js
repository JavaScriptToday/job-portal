const nextElementInList = (list, value) => {
  const currentValueIndex = list.indexOf(value);
  const nextValueIndex = (currentValueIndex + 1) % list.length; // index goes as  int + 1 and on last element modular length returns it to beginning. So on last element,it loops back to index number "0" (to the first element)
  const nextValue = list[nextValueIndex];
  return nextValue;
};

export default nextElementInList;
