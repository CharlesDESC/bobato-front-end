import React from "react";
import { Link } from "react-router-dom";
import { timestampToDate } from "./helpers";

function Button() {
  return (
    <Link to="/create-topic" className="Button light mb">
      Nouveau sujet
    </Link>
  );
}

export default function ({ token }) {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:55/api/topics")
      .then((data) => data.json())
      .then((json) => setRows(json || []));
  }, []);

  return (
    <div className="Page">
      <header>
        <h1>Bienvenue sur le forum !</h1>
      </header>
      <main>
        {token && <Button />}
        <table>
          <thead>
            <tr>
              <th>Sujet</th>
              <th>Theme</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, key) => {
              return (
                <tr key={key}>
                  <td>
                    <Link to={`/topic/${row.ID}`}>
                      <h3 dangerouslySetInnerHTML={{ __html: row.title }}></h3>
                      <div>
                        Par {row.name}, le {timestampToDate(row.date)}
                      </div>
                    </Link>
                  </td>
                  <td>{row.theme}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
