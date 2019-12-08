import React from 'react';
import './App.scss';
import { calculateCallories, calculatePFC } from './helpers';

export const App = () => {
  const [sex, setSex] = React.useState(null);
  const [age, setAge] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [activity, setActivity] = React.useState("");
  const [callories, setCallories] = React.useState(null);

  const { proteins, fats, carbohydrates } = calculatePFC(callories);

  return (
    <div>
      <h1 className="header">Введите ваши данные</h1>
      <form
        onSubmit={ev => {
          ev.preventDefault();
          setCallories(calculateCallories({
            age: +age,
            sex,
            height: +height,
            weight: +weight,
            coefficient: +activity,
          }))
        }} 
        className="counter-form"
      >
        <p className="sex-input">
          <span className="text">
            Выберите ваш пол:
          </span>
          {' '}
          <label>
            Мужской
            <input 
              type="radio"
              name="sex"
              value="male"
              checked={sex === 'male'}
              required
              onChange={ev => setSex(ev.target.value)}
            />
          </label>
          <label>
            Женский
            <input 
              type="radio"
              name="sex"
              value="female"
              checked={sex === 'female'}
              required
              onChange={ev => setSex(ev.target.value)} 
            />
          </label>
        </p>
        <hr />
        <label>
          Ваш возвраст (в годах):
          {' '}
          <input 
            type="number"
            value={age}
            onChange={ev => setAge(ev.target.value)}
            required
            min={1}
          />
        </label>
        <label>
          Ваш рост (в см):
          {' '}
          <input 
            type="number"
            value={height}
            onChange={ev => setHeight(ev.target.value)}
            required
            min={100}
          />
        </label>
        <label>
          Ваш вес (в кг):
          {' '}
          <input 
            type="number"
            value={weight}
            onChange={ev => setWeight(ev.target.value)}
            required
            min={1}
          />
        </label>
        <p className="sex-input">
          Выберите вашу активность:
          {' '}
          <select value={activity} onChange={ev => setActivity(ev.target.value)} required>
            <option value="" disabled hidden>Выбирете...</option>
            <option value="1">Базовый обмен веществ</option>
            <option value="1.2">Сидячий образ жизни, не занимаетесь фитнесом</option>
            <option value="1.4">Сидячий образ жизни, занятия фитнесом 2-3 раза в неделю</option>
            <option value="1.5">Подвижный образ жизни, не занимаетесь фитнесом</option>
            <option value="1.6">Подвижный образ жизни, занятия фитнесом 2-3 раза в неделю</option>
            <option value="1.7">Сидячий образ жизни, занятия фитнесом 5-6 раз в неделю</option>
            <option value="1.8">Подвижный образ жизни, занятия фитнесом 5-6 раз в неделю</option>
            <option value="1.9">Физичекая работа, спортсмен</option>
          </select>
        </p>
        <button type="submit">Посчитать</button>
        {callories && (
          <div className="result">
            <h4>Ваша норма в каллориях: {callories.toFixed(2)} ккал</h4>
            <ul>
              <li>Белки: {proteins.toFixed(2)} г</li>
              <li>Жиры: {fats.toFixed(2)} г</li>
              <li>Углеводы: {carbohydrates.toFixed(2)} г</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};
