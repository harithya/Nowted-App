import React from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_TOOLS } from "@/utils/constant";

const ReactEditorJS = createReactEditorJS();
const TextEditor = () => {
  const defaultValue = {
    time: 1556098174501,
    blocks: [
      {
        type: "header",
        data: {
          text: "Editor.js",
          level: 2,
        },
      },
    ],
  };

  return (
    <div className="h-full w-full py-5 overflow-y-auto ">
      <ReactEditorJS
        tools={EDITOR_TOOLS}
        placeholder="Type your note in here"
      />
    </div>
  );
};

export default TextEditor;
