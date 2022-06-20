import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ({ token }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const content = React.useRef();

  const createComment = async () => {
    await fetch("http://localhost:55/api/responseTopic", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        topicId: id,
        content: content.current.value,
      }),
    });

    navigate("/");
  };

  return (
    <div className="Page">
      <header>
        <h1>Nouveau commentaire</h1>
      </header>
      <main className="CenteredBox">
        <label htmlFor="text">Texte :</label>
        <textarea id="text" ref={text} className="mb"></textarea>
        <button onClick={createComment} className="Button">
          Créer un nouveau commentaire
        </button>
      </main>
    </div>
  );
}
