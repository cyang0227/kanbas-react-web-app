import React, { useState } from "react";
import { Button } from "react-bootstrap";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  return (
    <div>
      <h3>Encoding Parameters in URLs</h3>
      <h4>Calculator</h4>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <h3>Path Parameters</h3>
      <Button href={`http://localhost:4000/a5/add/${a}/${b}`}>
        Add {a} and {b}
      </Button>

      <Button
        className="btn btn-danger"
        href={`http://localhost:4000/a5/subtract/${a}/${b}`}
      >
        Subtract {a} and {b}
      </Button>

      <Button
        className="btn btn-warning"
        href={`http://localhost:4000/a5/multiply/${a}/${b}`}
      >
        Multiply {a} and {b}
      </Button>

      <Button
        className="btn btn-success"
        href={`http://localhost:4000/a5/divide/${a}/${b}`}
      >
        Divide {a} and {b}
      </Button>

      <h3>Query Parameters</h3>
      <a
        className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>

      <a
        className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Substract {a} and {b}
      </a>

      <a
        className="btn btn-warning"
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} and {b}
      </a>

      <a
        className="btn btn-success"
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} and {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;
