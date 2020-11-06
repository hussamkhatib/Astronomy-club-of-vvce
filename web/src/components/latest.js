import React, { useEffect, useState } from 'react'
import styles from './latest.module.css'

const Latest = () => {
    const url = 'https://test.spaceflightnewsapi.net/api/v2/blogs?_limit=3'
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <>
             <h2 className={styles.h2}>Latest</h2>
          <ul className={styles.ul}>
            {items.map(item => {
             return(
              <li key={item.id} className={styles.li}>
                
                <a href={item.url} target="_blank">
                  <img className={styles.img}
            src={item.imageUrl} height="150" width="150"/>
              
                <p className={styles.p}>{item.title}</p>
                </a>
              </li>
            )
          })}
           
          </ul>
          </>
        );
      }
    }

export default Latest