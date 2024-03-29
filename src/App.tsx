import React from 'react';
import './App.css';

function App() {
  const penguinLogoURL = 'http://s-sh-9405-penguins.oss.dogecdn.com/002.png';

  return (
    <div className="App">
      <div className="py-24 bg-rose-900">
        <div className="grid grid-cols-3 align-element mx-auto">
          <article className="col-span-2 flex flex-col justify-center">
            <h1 className="text-7xl text-slate-50 font-bold tracking-wider">一只企家鹅</h1>
            <p className=" mt-4 text-3xl text-slate-50 capitalize tracking-wide">身高 360mm 的小企鹅，现居上海</p>
          </article>
          <article className="col-span-1">
            <img src={penguinLogoURL} className="h-80 lg:h-86" alt="avatar" />
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
