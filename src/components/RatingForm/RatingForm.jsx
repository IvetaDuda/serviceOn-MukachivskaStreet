'use client';

import { useState } from 'react';

const RatingForm = () => {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    // Ваш код для обробки оцінки, наприклад, відправка на сервер або збереження в стані компонента
    console.log('Ваша оцінка:', rating);
  };

  return (
    <div>
      <h2>Оцініть наші послуги</h2>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              checked={rating === value}
              onChange={() => handleRatingChange(value)}
            />
            {value}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Відправити оцінку</button>
    </div>
  );
};

export default RatingForm;
