import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';

const CodeEditor = ({ language, theme, onCodeChange }) => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    const handleEditorChange = (value) => {
        setCode(value);
        onCodeChange(value);
    };

    const runCode = async () => {
        setOutput('Running code...');

        let logMessages = [];
        const captureLog = (message) => {
            logMessages.push(message);
        };

        const originalLog = console.log;
        console.log = captureLog;

        try {
            // eslint-disable-next-line
            const result = new Function(code)(); 

            if (result instanceof Promise) {
                const resolvedOutput = await result;
                logMessages.push(resolvedOutput);
            } else {
                logMessages.push(result);
            }

            setOutput(logMessages.join('\n'));

        } catch (error) {
            logMessages.push(`Error: ${error.message}`);
            setOutput(logMessages.join('\n'));
        } finally {
            console.log = originalLog;
        }
    };

    return (
        <div className="code-editor-container">
            <Editor
                height="400px"
                defaultLanguage={language}
                theme={theme}
                value={code}
                onChange={handleEditorChange}
            />
            <button onClick={runCode}>Run</button>
            <div className="output-section">
                <h3>Output:</h3>
                <pre>{output}</pre>
            </div>
        </div>
    );
};

export default CodeEditor;
