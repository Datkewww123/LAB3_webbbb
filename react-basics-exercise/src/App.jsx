import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './UserProfile'
import Counter from './Counter'
import Login from './Login'
import Card from './Card';
import Accordion from './Accordion'
import TodoApp from './TodoApp'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  const User1 = {
    name: 'Nguyễn Đạt',
    email: '23520256@gm.uit.edu.vn',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ztlx3iSGqNH96ii2i_CE4H0vz9OCJM8Wag&s',
    imageSize: 90,
  };

  const User2 = {
    name: 'Nguyễn Đạt 1',
    email: '12345678@gm.uit.edu.vn',
    avatarUrl: 'https://cdn11.bigcommerce.com/s-5ylnei6or5/images/stencil/1280x1280/products/3450/13279/5355_RedHulk_CABNW_56__43801.1735653432.jpg?c=2',
    imageSize: 90,
  };

  return (
    <div className="app-container">
      <h1 className="app-title">React Lab 3</h1>

      <section className="card">
        <Login />
      </section>

      <section className="card">
        <Counter />
      </section>

      <section className="profile-list">
            <Card title="User Profile 1">
            <UserProfile Userdata={User1} />
            </Card>
            <Card title="User Profile 2">
            <UserProfile Userdata={User2} />
            </Card>
      </section>
      <section className="card">
        <Accordion/> 
      </section>
      <section className="card">
      <TodoApp/>
      </section>
    </div>
  );
}
export default App;