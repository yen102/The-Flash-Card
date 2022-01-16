import { useEffect, useState } from "react";

const Rank = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData([{ name: 'hoang', words: 100 }, { name: 'yen', words: 1000 }]);
    }
    getData();
  }, []);

  const renderData = () => {
    return data.map((user, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.words}</td>
      </tr>
    ));
  }

  return (
    <table style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 80, fontSize: 20 }}>
      <tr>
        <th style={{ width: 150, fontSize: 25 }}>Top</th>
        <th style={{ width: 150, fontSize: 25 }}>Name</th>
        <th style={{ width: 350, fontSize: 25 }}>Number of words learned</th>
      </tr>
      {renderData()}
    </table>
  );
}

export default Rank;