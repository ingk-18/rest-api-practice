import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // useEffect(() => {
  //   axios.get("http://localhost:3003/data").then((res) => {});
  // }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3003/data");
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <h2>Type of Food</h2>
            <h3>{data.title}</h3>
            <h3>{data.id}</h3>
            <p>{data.type.join(",")}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
