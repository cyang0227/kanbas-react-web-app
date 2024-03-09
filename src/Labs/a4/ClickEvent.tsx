function ClickEvent() {
  const hello = () => {
    alert("Hello, world!");
  };
  const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
  };

  return (
    <div>
        <h2>Click Event</h2>
        <button onClick={hello}
        className="btn btn-primary"
        >Click Hello</button>
        <button onClick={() => lifeIs("good")}
        className="btn btn-primary"
        >Click Good</button>
        <button onClick={() => {
            hello();
            lifeIs("great!");
        }}
        className="btn btn-primary"
        >Click Hello 3</button>
    </div>
    );
}
export default ClickEvent;