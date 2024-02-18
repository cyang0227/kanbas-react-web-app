function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (x: number) => x * x;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map((x: number) => x * x * x);

    return (
        <>
            <h3>Map</h3>
            squares = {squares}<br />
            cubes = {cubes}<br />
        </>
    );
}
export default MapFunction;