interface Props {
  id: number;
  name: string;
  age: number;
  isMarried: boolean;
}

const User = ({ name, age, isMarried }: Props) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>
        {name} is {isMarried ? "Married" : "Single"}.
      </p>
    </div>
  );
};

export default User;
