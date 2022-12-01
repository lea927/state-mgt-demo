function Child(props) {
  return (
    <>
      <p>{`I've got ฿${props.money}`}</p>
      <button onClick={props.payBills}>Pay Bill</button>
    </>
  );
}

export default Child;