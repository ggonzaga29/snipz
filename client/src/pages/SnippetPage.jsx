/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import Editor from '../components/Editor';

const SnippetPage = () => {
	const [md, setMd] = useState('');

	const files = [
		{
			name: 'Main.java',
			language: 'java',
			content: `public class Main {
	public static void main(String[] args) {
		EventEmitter emitter = new EventEmitter();
		emitter.on("eventName", listener);
		emitter.emit("eventName");
	}
}`,
		},

		{
			name: 'EventEmitter.java',
			language: 'java',
			content: `import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import java.util.function.Consumer;
			
public class EventEmitter {
	private HashMap<String, Set<Consumer<Void>>> eventListeners;
			
	public EventEmitter() {
		eventListeners = new HashMap<>();
	}
			
	public void on(String event, Consumer<Void> listener) {
		Set<Consumer<Void>> listeners = eventListeners.getOrDefault(event, new HashSet<>());
		listeners.add(listener);
		eventListeners.put(event, listeners);
	}
			
	public void emit(String event) {
		Set<Consumer<Void>> listeners = eventListeners.get(event);
		if (listeners != null) {
			for (Consumer<Void> listener : listeners) {
				listener.accept(null);
			}
		}
	}
}
			`,
		},
	];

	useEffect(() => {
		fetch('../../data/event_emitter.md')
			.then((res) => res.text())
			.then((text) => setMd(text));
	}, []);

	return (
		<div className="">
			<div className="bg-slate-950 px-5">
				<div className="pb-10 pt-5 flex flex-col sm:flex-row justify-between">
					<div className="flex items-center">
						<div className="w-12 h-12 rounded-full overflow-hidden">
							<img
								src="https://wallpapers-clan.com/wp-content/uploads/2022/11/rick-and-morty-matching-pfp-2.jpg"
								alt=""
							/>
						</div>
						<div>
							<h2 className="px-5 text-md block mb-1">
								ggonzaga
							</h2>
							<h3 className="px-5 text-xl font-bold block">
								Java Event Emitter
							</h3>
							<h4>
								<span className="px-5 italic text-sm">
									created 2 hours ago
								</span>
							</h4>
						</div>
					</div>
					{/* buttons */}
					<div className="flex gap-2 mt-5 md:mt-0">
						<div>
							<button className="bg-red-600 px-2 py-2">
								Add to Favorites
							</button>
						</div>
						<div>
							<button className="bg-yellow-600 px-2 py-2">
								Fork
							</button>
						</div>
						<div className="">
							<button className=" bg-lime-600 px-2 py-2">
								Download
							</button>
						</div>
					</div>
				</div>

				{/* tabs */}
				<div className="flex justify-between items-center">
					<div className="flex gap-5">
						<Link className="bg-slate-500 px-2 py-2">Code</Link>
						<Link className=" px-2 py-2">History</Link>
					</div>
				</div>
			</div>
			<div className="mt-10 container">
				<div>
					<ReactMarkdown
						className="Markdown"
						children={md}
					></ReactMarkdown>
				</div>

				<div className="mt-10">
					<Editor
						className="mb-5"
						files={files}
						readOnly={true}
						// fileName="Main.js"
						// language="javascript"
						// toggled={true}
					/>
					{/* <Editor fileName="Editor.java" language="java" /> */}
				</div>
			</div>
		</div>
	);
};

export default SnippetPage;
