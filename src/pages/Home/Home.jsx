import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { githubDark } from '@uiw/codemirror-theme-github'

const Home = () => {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value)
  }, [])

  const codemirrorOptions = {
    lineNumbers: false, // Hide line numbers
  }

  return (
    <CodeMirror
			className='code-preview'
      value="console.log('hello world!');"
      height="200px"
      theme={githubDark}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      options={codemirrorOptions}
    />
  )
}

export default Home
