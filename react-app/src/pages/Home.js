import React, { useRef, useState, useEffect } from 'react';
import { ReactComponent as CloseSVG } from '../assets/Close.svg';
import { ReactComponent as CheckmarkSVG } from '../assets/checkmark.svg';

import cards from '../test/cards.js';

import "../styles/home.css";

function Home() {
  const [currentCardOpen, setCurrentCardOpen] = useState(null);
  const cardsCtn = useRef(null);

  const changeCardsCtnDisplay = (remove, add) => {
    cardsCtn.current.classList.remove("cards-ctn__" + remove);
    cardsCtn.current.classList.add("cards-ctn__" + add);
  }

  useEffect(() => {
    const isCardClosed = currentCardOpen === null;

    if (isCardClosed) {
      changeCardsCtnDisplay("flex", "grid");
    } else {
      changeCardsCtnDisplay("grid", "flex");
    }
  }, [currentCardOpen])

  return (
    <main className="home-page flex">
      <ShowAllTasksButton />
      <button className='btn-confirm'>+ Card</button>
      <div ref={cardsCtn} class="cards-ctn">
        {cards.map(card => {
          return <Card content={card} setCurrentCardOpen={setCurrentCardOpen} />
        })}
      </div>
      {currentCardOpen !== null && <CardOpen setCurrentCardOpen={setCurrentCardOpen} card={currentCardOpen} />}
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
      <TasksProgression percentage={content.done / content.total} />
      <p className="card-title">{content.name}</p>
    </div>
  )

}

function CardOpen(props) {
  const { card, setCurrentCardOpen } = props;

  const updateCard = (task) => {
    task.done = !task.done;
    task.done ? card["done"]++ : card["done"]--;
    console.log(card);
  }

  return (
    <div className='card-open'>
      <div className="card-open--info">
        <p class="card-percentage">{((card.done / card.total) * 100).toFixed(2)}%</p>
        <h2 className='card-open--title'>{card.name}</h2>
        <CloseSVG className='card-open--close' onClick={() => {
          setCurrentCardOpen(null);
        }} />
      </div>
      <button className='btn-confirm task-btn'>+ Tarefa</button>
      <div className='card-open--tasks'>
        {card.tasks.map(task => {
          return (
            <div
              onDoubleClick={() => updateCard(task)}
              className='card-open--task-ctn'>
              <CheckmarkSVG />
              <p className='task'>{task.name}</p>
            </div>)
        })}
      </div>
    </div>
  )
}

function TasksProgression(props) {
  const graph = useRef(null);
  const data = props.percentage;

  useEffect(() => {
    console.log(data);
    if (graph.current.getContext('2d')) {
      const ctx = graph.current.getContext('2d');
      const circle = new Path2D();
      circle.arc(20, 20, 15, 0, Math.PI * 2 * data);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#44bba4";
      ctx.stroke(circle);
    }
  })

  return (
    <canvas ref={graph} class="card-progression" width="40" height="40"></canvas>
  )
}

export default Home;