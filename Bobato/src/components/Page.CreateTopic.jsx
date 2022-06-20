import React from "react";

export default function ({ token }) {
  const title = React.useRef();
  const content = React.useRef();
  const theme = React.useRef();
  

  const createTopic = async () => {
    await fetch("http://localhost:55/api/createTopic", {
      method: "POST",
      // headers: {
      //   Authorization: token,
      // },
      body: JSON.stringify({
        title: title.current.value,
        theme: theme.current.value,
        content: content.current.value,
        userID: token
      }),
    });
    console.log(token)
    window.location('/')
  };

  return (
    <div className="Page">
      <header>
        <h1>Nouveau topic</h1>
      </header>
      <main className="CenteredBox">
        <label htmlFor="title">Titre :</label>
        <input id="title" type="text" ref={title} />
        <label htmlFor="content">Texte :</label>
        <textarea id="content" ref={content} className="mb"></textarea>
        <label htmlFor="theme">Theme :</label>
        <input id="title" type="text" ref={theme} />
        <button onClick={createTopic} className="Button">
          Créer un nouveau sujet
        </button>
      </main>
    </div>
  );
}
