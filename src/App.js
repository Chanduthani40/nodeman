import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './Main/Main';
function App() {
  const [contentPost,setContentPost] = useState('');
  console.log(contentPost,"the Content post is:")
  return (
    <>
    <Header />
    <Main contentPost={contentPost} setContentPost={setContentPost} />
    </>
  );
}

export default App;
