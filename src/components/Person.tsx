type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <div>
        {props.name.first} {props.name.last}
      </div>
    </div>
  );
};

export default Person;
