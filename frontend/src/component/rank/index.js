import { useEffect, useState } from "react";
import { getAPI } from "../../api";

const Rank = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAPI('/data/getRankData');
        setData(data);
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, []);

  const renderData = () => {
    return data.map((user, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{user.User.username}</td>
        <td>{user.cnt}</td>
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