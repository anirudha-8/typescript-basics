interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}

const Person = (props: Props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>
        {props.name} is {props.isMarried ? "Married" : "Single"}.
      </p>
    </div>
  );
};
export default Person;
