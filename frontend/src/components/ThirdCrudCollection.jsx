import React, { useEffect, useState } from 'react';

import axios from 'axios';

import styles from './styles.module.css';

const URL = 'http://127.0.0.1:5000';

const isEven = (number) => number % 2 === 0;
function generateRandomWord(length) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let word = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    word += alphabet[randomIndex];
  }

  return word;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateMapRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

const ThirdCrudCollection = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [availability, setAvailability] = useState(false);
  const [attributes, setAttributes] = useState({
    color: '',
    year: 0,
    meta: {
      isMeta: false,
    },
  });
  const [categories, setCategories] = useState([
    {
      label: '',
    },
    {
      label: '',
    },
  ]);

  const handleAddAttributes = () => {
    setAttributes({
      color: generateRandomWord(4),
      year: generateRandomNumber(),
      meta: {
        isMeta: isEven(generateRandomNumber()),
      },
    });
  };

  const handleAddCategories = () => {
    const cats = [];

    for (let index = 0; index < generateMapRandomNumber(); index++) {
      cats[index] = {
        label: generateRandomWord(6),
      };
    }

    setCategories(cats);
  };

  // const [secItem, setSecItem] = useState('');
  const [newName, setNewName] = useState('');

  const [id, setId] = useState('');
  // const [secId, setSecId] = useState('');
  const [items, setItems] = useState([]);

  const handleGenerate = () => {
    setName(generateRandomWord(8));
    // setSecItem(generateRandomWord(8));
  };

  const handleGeneratePrice = () => {
    setPrice(generateRandomNumber());
  };

  // Функция для загрузки всех элементов
  const fetchItems = async () => {
    try {
      const response = await axios.get(`${URL}/third/items`);
      setItems(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  // Функция для добавления элемента
  const addItem = async () => {
    if (!name) {
      alert('Пожалуйста, введите значение');
      return;
    }
    try {
      await axios.post(`${URL}/third/add`, {
        name,
        price,
        availability,
        attributes,
        categories,
      });
      fetchItems(); // Перезагрузка элементов после добавления
    } catch (error) {
      console.error('Ошибка при добавлении данных:', error);
    }
  };

  // const addItems = async () => {
  //   try {
  //     await axios.post(`${URL}/third/add_many`, { items: [{ name: item }, { name: secItem }] });
  //     fetchItems(); // Перезагрузите элементы после добавления
  //   } catch (error) {
  //     console.error('Ошибка при добавлении данных:', error);
  //   }
  // };

  // Функция для удаления элемента
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${URL}/third/delete/${id}`);
      fetchItems(); // Перезагрузка элементов после добавления
    } catch (error) {
      console.error('Ошибка при удалении данных:', error);
    }
  };

  // // Функция для удаления элементов
  // const deleteItems = async () => {
  //   try {
  //     await axios.post(`${URL}/third/delete_many`, { ids: [id, secId] });
  //     fetchItems(); // Перезагрузите элементы после удаления
  //   } catch (error) {
  //     console.error('Ошибка при удалении данных:', error);
  //   }
  // };

  // Функция для обновления элемента
  const updateItem = async () => {
    try {
      await axios.put(`${URL}/third/update/${id}`, { name: newName });
      fetchItems(); // Перезагрузка элементов после добавления
    } catch (error) {
      console.error('Ошибка при обновлении данных:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className={`${styles.flex_column}`}>
      <h1 className={styles.header_large}>Менеджер три три три сука ебаная</h1>

      <div className={styles.header_medium}>Add</div>
      <div className={`${styles.flex} ${styles.flex_gap_medium}`}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите название элемента"
          className={styles.input}
        />
        <button onClick={handleGenerate} className={styles.btn_main}>
          Сгенерировать слово
        </button>
      </div>
      <div className={`${styles.flex} ${styles.flex_gap_medium}`}>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Введите цену элемента"
          className={styles.input}
        />
        <button onClick={handleGeneratePrice} className={styles.btn_main}>
          Сгенерировать цену
        </button>
      </div>
      <div className={`${styles.flex} ${styles.flex_gap_medium}`}>
        <input
          id="checkbox"
          type="checkbox"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className={styles.input}
        />
        <label htmlFor="checkbox">доступность элемента</label>
      </div>
      <div className={`${styles.flex} ${styles.flex_gap_medium}`}>
        <button onClick={handleAddAttributes} className={styles.btn_main}>
          Сгенерировать атрибуты
        </button>
        <button onClick={handleAddCategories} className={styles.btn_main}>
          Сгенерировать категории
        </button>
      </div>
      <button onClick={addItem} className={styles.btn_second} style={{ width: 'min-content' }}>
        Добавить
      </button>

      {/* <div className={styles.header_medium}>Add many</div>
      <div className={`${styles.flex} ${styles.flex_gap_medium}`}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Введите название элемента"
          className={styles.input}
        />
        <input
          type="text"
          value={secItem}
          onChange={(e) => setSecItem(e.target.value)}
          placeholder="Введите название элемента"
          className={styles.input}
        />
        <button onClick={handleGenerate} className={styles.btn_main}>
          Сгенерировать слово
        </button>
        <button onClick={addItems} className={styles.btn_second}>
          Добавить
        </button>
      </div> */}

      <div className={styles.header_medium}>Update</div>
      <div className={`${styles.flex} ${styles.flex_gap_medium}`}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Введите id элемента"
          className={styles.input}
        />
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Новое название элемента"
          className={styles.input}
        />
        <button onClick={updateItem} className={styles.btn_second}>
          Изменить
        </button>
      </div>

      {/* <div className={styles.header_medium}>Delete many</div>
      <div className={`${styles.flex} ${styles.flex_gap_medium}`}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Введите id элемента"
          className={styles.input}
        />
        <input
          type="text"
          value={secId}
          onChange={(e) => setSecId(e.target.value)}
          placeholder="Введите id элемента"
          className={styles.input}
        />
        <button onClick={deleteItems} className={styles.btn_danger}>
          Удалить
        </button>
      </div> */}

      <div className={styles.header_medium}>Get / Delete</div>
      <div>
        <button onClick={fetchItems} className={styles.btn_main}>
          Загрузить элементы
        </button>
        {!!items.length && (
          <ul className={`${styles.flex_column} ${styles.list}`}>
            {items.map((item, index) => (
              <li key={index} className={`${styles.flex} ${styles.flex_gap_medium}`}>
                <em className={styles.italic}>{item.id}:</em> {item.name}
                <button onClick={() => deleteItem(item.id)} className={styles.btn_danger}>
                  x
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ThirdCrudCollection;
