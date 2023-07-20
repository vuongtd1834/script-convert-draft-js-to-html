import { useEffect, useState } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';

import { mockData } from './mock';

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    setEditorState(EditorState.createWithContent(convertFromRaw(mockData)))
  }, [])

  const markup = draftToHtml(
    convertToRaw(editorState.getCurrentContent()), 
  );

  return (
    <div className="App">
      <header className="App-header">
        <div dangerouslySetInnerHTML={{__html: markup}}></div>
      </header>
    </div>
  );
}

export default App;
