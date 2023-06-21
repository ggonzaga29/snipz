import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from '@uiw/codemirror-theme-github';

import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';

const EditorPane = ({ file, readOnly }) => {
	const isReadOnly = readOnly || false;

	const [code, setCode] = useState(file.content);
	const [languageExt, setLanguageExt] = useState(null);
	const [extensions, setExtensions] = useState([]);

	const codemirrorOptions = {
		// lineNumbers: false, // Hide line numbers
	};

	useEffect(() => {
		if (readOnly)
			setExtensions((prevExtensions) => [
				...prevExtensions,
				EditorView.editable.of(false),
				EditorState.readOnly.of(true),
			]);
	}, [readOnly]);

	useEffect(() => {
		if (file.language) {
			if (file.language === 'javascript') {
				import('@codemirror/lang-javascript').then((module) => {
					setLanguageExt(module.javascript());
				});
			}

			if (file.language === 'java') {
				import('@codemirror/lang-java').then((module) => {
					setLanguageExt(module.java());
				});
			}
		}
	}, [file.language]);

	useEffect(() => {
		setCode(file.content); // Update code state when file.content changes
	}, [file.content]);

	const onChange = React.useCallback((value, viewUpdate) => {
		setCode(value);
	}, []);

	return (
		<>
			{languageExt && (
				<div>
					<CodeMirror
						minHeight="300px"
						className=""
						value={code}
						theme={githubDark}
						extensions={[languageExt, ...extensions]}
						onChange={onChange}
						options={codemirrorOptions}
					/>
				</div>
			)}
		</>
	);
};

export default EditorPane;
