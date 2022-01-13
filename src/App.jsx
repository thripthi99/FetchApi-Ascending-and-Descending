import React, { useState, useEffect } from "react";

import axios from "axios"



const App = () => {
  let [post, setPost] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [ascending, setAscending] = useState([]);
  let [descending, setDescending] = useState([]);

  useEffect(() => {
    let fetchItems = async () => {
      let values = await axios.get("https://jsonplaceholder.typicode.com/posts");
      let { data } = values;
      setPost(data);
    };
    fetchItems();
  }, []);

  // console.log(state);

  let sortAsc = () => {
    let ascending = post.sort((a, b) => {
      return a.id - b.id;
    });
    setAscending(ascending);
    console.log(ascending);
  };
  let sortDes = () => {
    let { id } = post;
    let descending = post.sort((a, b) => {
      return b.id - a.id;
    });
    setDescending(descending);
    console.log(descending);
  };
  let mapData = post
    .filter(val => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
        console.log(val.title);
      }
    })
    .map(data => (
      <div key={data.id} className="">
        <h1>Sl No:{data.id}</h1>
        <h1>Title:{data.title}</h1>
      </div>
    ));

  let ascendingData = ascending
    .filter(val => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
        console.log(val.title);
      }
    })
    .map(data => (
      <div key={data.id}>
        <h1>Sl No:{data.id}</h1>
        <h1>Title:{data.title}</h1>
      </div>
    ));

  let descendingData = descending
    .filter(val => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
        console.log(val.title);
      }
    })
    .map(data => (
      <div key={data.id}>
        <h1>Sl No:{data.id}</h1>
        <h1>Title:{data.title}</h1>
      </div>
    ));

  return (
    <section className="Search">
      <article>
        <div>
          <input className="searchbox"
            type="text"
            name="search"
            placeholder="Search name"
            onChange={e => {
              setSearchTerm(e.target.value);
            }}
          />
          <button onClick={sortAsc} className="button1">Ascending</button>
          <button onClick={sortDes} className="button2">Descending</button>
        </div>
        <div>{mapData}</div>
        <div>{descendingData}</div>
        <div>{ascendingData}</div>
      </article>
    </section>
  );
};

export default App;