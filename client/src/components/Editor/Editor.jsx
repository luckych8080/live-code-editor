import { useEffect } from "react";
import "codemirror/lib/codemirror.css";

import "./Editor.css"
import "codemirror/theme/material-ocean.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/keymap/sublime";
import CodeMirror from "codemirror";

const Editor = () => {
  useEffect(() => {
    const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      lineNumbers: true,
      keyMap: "sublime",
      lineWrapping: "true",
      theme: "material-ocean",
      mode: "javascript",
    });
  }, []);

  return <textarea id="code" />;
};

export default Editor;
