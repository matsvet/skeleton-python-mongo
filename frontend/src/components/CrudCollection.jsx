import React, { useEffect, useState } from 'react';

import axios from 'axios';

import styles from './styles.module.css';

const URL = 'http://127.0.0.1:5000';

function generateRandomWord(length) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let word = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    word += alphabet[randomIndex];
  }

  return word;
}

const CrudCollection = () => {
  const [item, setItem] = useState('');
  const [secItem, setSecItem] = useState('');
  const [newItem, setNewItem] = useState('');
  const [id, setId] = useState('');
  const [secId, setSecId] = useState('');
  const [items, setItems] = useState([]);

  const handleGenerate = () => {
    setItem(generateRandomWord(8));
    setSecItem(generateRandomWord(8));
  };

  // Функция для загрузки всех элементов
  const fetchItems = async () => {
    try {
      const response = await axios.get(`${URL}/items`);
      setItems(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  // Функция для добавления элемента
  const addItem = async () => {
    if (!item) {
      alert('Пожалуйста, введите значение');
      return;
    }
    try {
      await axios.post(`${URL}/add`, { name: item });
      setItem('');
      fetchItems(); // Перезагрузка элементов после добавления
    } catch (error) {
      console.error('Ошибка при добавлении данных:', error);
    }
  };

  const addItems = async () => {
    try {
      await axios.post(`${URL}/add_many`, { items: [{ name: item }, { name: secItem }] });
      fetchItems(); // Перезагрузите элементы после добавления
    } catch (error) {
      console.error('Ошибка при добавлении данных:', error);
    }
  };

  // Функция для удаления элемента
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${URL}/delete/${id}`);
      fetchItems(); // Перезагрузка элементов после добавления
    } catch (error) {
      console.error('Ошибка при удалении данных:', error);
    }
  };

  // Функция для удаления элементов
  const deleteItems = async () => {
    try {
      await axios.post(`${URL}/delete_many`, { ids: [id, secId] });
      fetchItems(); // Перезагрузите элементы после удаления
    } catch (error) {
      console.error('Ошибка при удалении данных:', error);
    }
  };

  // Функция для обновления элемента
  const updateItem = async () => {
    try {
      await axios.put(`${URL}/update/${id}`, { name: newItem });
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
      <h1 className={styles.header_large}>Менеджер элементов</h1>

      <div className={styles.header_medium}>Add</div>
      <div className={`${styles.flex} ${styles.flex_gap_medium}`}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Введите название элемента"
          className={styles.input}
        />
        <button onClick={handleGenerate} className={styles.btn_main}>
          Сгенерировать слово
        </button>
        <button onClick={addItem} className={styles.btn_second}>
          Добавить
        </button>
      </div>

      <div className={styles.header_medium}>Add many</div>
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
      </div>

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
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Новое название элемента"
          className={styles.input}
        />
        <button onClick={updateItem} className={styles.btn_second}>
          Изменить
        </button>
      </div>

      <div className={styles.header_medium}>Delete many</div>
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
      </div>

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

export default CrudCollection;
