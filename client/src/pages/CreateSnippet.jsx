import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

import Editor from '../components/Editor';

const CreateSnippet = () => {
	const [value, setValue] = React.useState(`**Hello world!!!**`);

	return (
		<div>
			<div className="bg-slate-950 px-5">
				<div className="py-10 container">
					<div className="flex justify-between">
						<h1 className="text-3xl font-bold tracking-wide">
							Create Snippet
						</h1>

						<button className="bg-lime-600 px-2 py-2">
							Create
						</button>
					</div>
					{/* buttons */}
				</div>
			</div>
			<div>
				<div className="container mt-5">
					<div>
						<h3 className="block mb-1">Title</h3>
						<input
							type="text"
							placeholder="Enter Snippet Title"
							className="bg-slate-900 py-3 px-2 w-full outline-none"
						/>
					</div>
					<div data-color-mode="dark" className="mt-3">
						<h3 className="block mb-1">Description</h3>
						<MDEditor
							value={value}
							onChange={setValue}
							preview="edit"
							previewOptions={{
								rehypePlugins: [[rehypeSanitize]],
							}}
						/>
					</div>
					<div className="mt-3">
						<h3 className="block mb-1">Code</h3>
						{/* <Edi	tor /> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateSnippet;
