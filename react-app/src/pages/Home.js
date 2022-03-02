import React, { useRef, useState, useEffect } from 'react';

import cards from '../test/cards.js';

import "../styles/home.css";

function Home() {
  const [currentCardOpen, setCurrentCardOpen] = useState(null);

  return (
    <main className="home-page flex">
      <ShowAllTasksButton />
      <div class="cards-ctn">
        {cards.map(card => {
          return <Card content={card} setCurrentCardOpen={setCurrentCardOpen} />
        })}
      </div>
      {currentCardOpen !== null && <CardOpen card={currentCardOpen} />}
    </main>
  )
}

function ShowAllTasksButton() {
  const sliderBtn = useRef(null);

  const showTasks = () => {
    const slider = sliderBtn.current.children[0];
    sliderBtn.current.classList.toggle("mode-on")
    slider.classList.toggle("slider-on");
  }

  return (
    <div className="home-page--show-tasks-ctn">
      <button ref={sliderBtn} onClick={showTasks} className="show-tasks-ctn--btn-ctn">
        <div className="show-tasks-ctn--slider slider-button-off"></div>
      </button>
      <span className="home-page--btn-title">Mostrar tarefas</span>
    </div>
  )
}

function Card(props) {
  const { content, setCurrentCardOpen } = props;

  return (
    <div onClick={() => {
      setCurrentCardOpen(content);
    }} className="home-page--card">
      <h1 className="card-title">{content.name}</h1>
    </div>
  )

}

function CardOpen(props) {
  const { card } = props;

  return (
    <div>
      <div>
        <h1>{card.name}</h1>
      </div>
      {card.tasks.map(task => {
        return <div><h3>{task.name}</h3></div>
      })}
    </div>
  )
}

export default Home;