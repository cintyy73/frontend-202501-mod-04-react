const numbers = [1, 2, 34, 5, 6];

export const List = (props) => {
  return (
    <ul>
      {numbers.map(() => (
        <li>{props.number}</li>
      ))}
    </ul>
  );
};
