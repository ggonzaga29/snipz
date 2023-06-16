import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { EditorView } from '@codemirror/view';

import EditorPane from './EditorPane';

const Editor = ({ files, readOnly, className }) => {
	const isReadOnly = readOnly || false;

	const [activeFile, setActiveFile] = useState(files[0]);

	const handleButtonClick = (file) => {
		setActiveFile(file);
	};

	return (
		<div className={className}>
			<div className="bg-slate-950 flex select-none">
				{files.map((file, index) => {
					const isActive = file === activeFile;

					return (
						<div
							className={`flex justify-between items-center ${
								isActive ? 'active' : ''
							}`}
							key={index}>
							<div className="flex gap-5">
								<button
									className={`border-b-4  px-3 text-left py-3 ${
										isActive
											? 'bg-blue-900 border-white'
											: 'bg-800-700 border-gray-700'
									}`}
									onClick={() => handleButtonClick(file)}>
									{file.name}
								</button>
							</div>
						</div>
					);
				})}
				<div>
					<button className="px-3 text-left py-3">+</button>
				</div>
			</div>

			<div className="bg-slate-950">
				<EditorPane file={activeFile} readOnly={isReadOnly} />
			</div>
		</div>
	);
};

export default Editor;
