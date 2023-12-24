type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      <div>{props.isLoggedIn ? `Welcome ${props.name} You have ${messageCount} unread messages` : "Welcome Guest"}</div>
    </div>
  );
}

export default Greet;
