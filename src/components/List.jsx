const numbers = [1, 2, 34, 5, 6];

export const List = () => {
  return (
    <ul>
      {numbers.map((number) => (
        <li>{number}</li>
      ))}
    </ul>
  );
};
