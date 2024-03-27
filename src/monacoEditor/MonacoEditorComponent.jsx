import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';


function MonacoEditorComponent() {

  const [suggestionsArray] = useState(['Suggestion1', 'Suggestion2', 'Suggestion3']);


  const provideCustomSuggestions = (model, position) => {

    var word = model.getWordUntilPosition(position);
  
    var rangeVar = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn,
    };

    const suggestions = suggestionsArray.map(keyword => ({
      label: keyword,
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: keyword,
      range: rangeVar
  }));
  
    return { suggestions: suggestions };
  };
  
  const handleEditorWillMount = (monaco) => {
    monaco.languages.registerCompletionItemProvider('javascript', {
      provideCompletionItems: provideCustomSuggestions,
    });
  };

  return <Editor height="90vh"
                 language="javascript"
                 defaultValue="// Type Code here"
                 beforeMount={handleEditorWillMount}
        />;
};

export default MonacoEditorComponent;