import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';
import { EditorView } from '@codemirror/view';

// Languages and Syntax Highlighting
import { javascript } from '@codemirror/lang-javascript';

const FontSizeTheme = EditorView.theme({
	$: {
		fontSize: '21pt',
	},
});

const Editor = ({ fileName, toggled, language, className }) => {
	const defaultToggled = toggled || false;

	const [toggle, setToggle] = useState(defaultToggled);
	const [code, setCode] = useState('console.log("hello world!");');
	const [languageExt, setLanguageExt] = useState(null);
	const [extensions, setExtensions] = useState([]);

	useEffect(() => {
		if (language) {
			if (language === 'javascript') {
				import('@codemirror/lang-javascript').then((module) => {
					setLanguageExt(module.javascript());
				});
			}

			if (language === 'java') {
				import('@codemirror/lang-java').then((module) => {
					setLanguageExt(module.java());
				});
			}
		}
	}, [language]);

	const onChange = React.useCallback((value, viewUpdate) => {
		setCode(value);
	}, []);

	const codemirrorOptions = {
		// lineNumbers: false, // Hide line numbers
	};

	return (
		<div className={className}>
			<div className="bg-slate-950 px-3 py-3">
				<div className="flex justify-between">
					<div>
						<h4>{fileName}</h4>
					</div>
					<div>
						<button
							onClick={() => {
								setToggle(!toggle);
							}}>
							Toggle
						</button>
					</div>
				</div>
			</div>
			{(toggle && languageExt) && (
				<div>
					<CodeMirror
						minHeight="300px"
						className=""
						value={code}
						theme={nord}
						extensions={[languageExt, FontSizeTheme]}
						onChange={onChange}
						options={codemirrorOptions}
					/>
					<div className="bg-slate-950">
						<h2>sdf</h2>
					</div>
				</div>
			)}
		</div>
	);
};

export default Editor;
