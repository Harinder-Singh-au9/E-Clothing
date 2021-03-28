import React, { useEffect, useState } from "react";
import "./Directory.style.scss";
import MenuItem from '../menu-item/Menu-Item'
import {sections} from "../../data.js";
export default function Directory() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(sections);
  });
  console.log(data);
  return <div className="directory-menu">
    {data.map(({title,imageUrl,id,size}) => {
      return <MenuItem title={title} imageUrl={imageUrl} id={id}/>
    })}
    </div>;
}
