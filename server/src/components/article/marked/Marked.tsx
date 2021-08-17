import React from 'react';
import MDEditor from "@uiw/react-md-editor";
// No import is required in the WebPack.s
import "@uiw/react-md-editor/dist/markdown-editor.css";

const mkdStr = `# Markdown Editor for React

**Hello world!!!**

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MEDitor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
\`\`\`
`;

function Marked(props: any) {
    const { onChange, value } = props;
    return (
        <div className="">
            <MDEditor value={value} onChange={(v: any) => onChange(v)} />
        </div>
    );
}

export default Marked;
