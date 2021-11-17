import { useState } from 'react';

let nextId = 0;

export default function List() {
  {/*const arr = [{ title: "title 1", desc: "desc 1" }];*/ }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("")
  const [newarr, SetnewArr] = useState([]);
  console.log(newarr);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={title}
        placeholder={"Title"}
        onChange={e => setTitle(e.target.value)}
      ></input>
      <br></br><br></br>


      <textarea
        value={desc}
        placeholder={"description"}
        onChange={e => setDesc(e.target.value)}
      ></textarea>

      <br></br><br></br>
      <button onClick={() => {
        setTitle("");
        setDesc("");
        SetnewArr([
          ...newarr,
          {
            id: nextId++,
            name: title,
            area: desc

          }
        ]);
      }}>Add</button>
      <ul>
        {newarr.map(item => (
          <li key={item.id}>{item.name}
            <li>{item.area}</li>
            <button onClick={() => {
              SetnewArr(
                newarr.filter(a =>
                  a.id !== item.id
                )
              );
            }}>
              clear
            </button></li>



        ))}
      </ul>
    </>
  );
}
