import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor'


function MonacoEditorComponent() {

  function generateTypeDeclaration(obj, objectName = 'myObject') {
    let typeDeclaration = `declare var ${objectName}: {\n`;

    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            // If the property is an object, recursively generate the type declaration for it
            typeDeclaration += `${key}: {\n`;
            const nestedObj = obj[key];
            for (const nestedKey in nestedObj) {
                typeDeclaration += `${nestedKey}: ${typeof nestedObj[nestedKey]};\n`;
            }
            typeDeclaration += '};\n';
        } else {
            // If the property is not an object, simply declare its type
            typeDeclaration += `${key}: ${typeof obj[key]};\n`;
        }
    }

    typeDeclaration += '};\n';
    alert(typeDeclaration);
    return typeDeclaration;
}

const myObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  },
  greet: function() {
  },
  getLocation: function() {}
};

const typeDeclaration = generateTypeDeclaration(myObject);

  return <Editor height="90vh"
                 language="javascript"
                 defaultValue="// Type Code here"
                 beforeMount={(monaco) => {
                  monaco.languages.typescript.javascriptDefaults.addExtraLib(typeDeclaration, 'filename/typeDeclaration.d.ts');
              }}
        />;
};

export default MonacoEditorComponent;