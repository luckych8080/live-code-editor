import { useEffect } from "react";
import "codemirror/lib/codemirror.css";

import "./Editor.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/keymap/sublime";
import CodeMirror from "codemirror";

import { io } from "socket.io-client";

const Editor = () => {
  useEffect(() => {
    const socket = io("http://localhost:3001");

    const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      lineNumbers: true,
      keyMap: "sublime",
      lineWrapping: "true",
      theme: "material-ocean",
      mode: "javascript",
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <textarea id="code" />;
};

export default Editor;
