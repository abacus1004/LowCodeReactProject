import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor'


function MonacoEditorComponent() {

  const functionCoreSuggestions = [
    {
      label: 'getCookie',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'getCookie',
    },
    {
      label: 'sleep',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'sleep',
    },
    {
      label: 'setCookie',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'setCookie',
    },
    {
      label: 'goToDivId',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'goToDivId',
    }
  ]

  const functionSuggestions = [
    {
      label: 'core',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'core',
    }
  ]

  const provideCustomSuggestions = (model, position) => {
    var lineContent = model.getLineContent(position.lineNumber);

    if(lineContent === 'functions.core.'){
      return { suggestions: functionCoreSuggestions };
    }
    else if(lineContent === 'functions.'){
      return { suggestions: functionSuggestions };
    }
  };
  
  const handleEditorDidMount = (editor, monaco) => {
    monaco.languages.registerCompletionItemProvider('javascript', {
      provideCompletionItems: provideCustomSuggestions,
      triggerCharacters: ["."]
    });
  };

  return <Editor height="90vh"
                 language="javascript"
                 defaultValue="// Type Code here"
                 onMount = {handleEditorDidMount}
        />;
};

export default MonacoEditorComponent;