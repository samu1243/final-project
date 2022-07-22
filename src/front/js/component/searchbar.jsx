import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../store/appContext";

function SearchBar() {
  const { actions } = useContext(Context);
  const [realms, setRealms] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadServers = async () => {
      const response = await axios.get(
        "https://us.api.blizzard.com/data/wow/realm/index?namespace=dynamic-us&locale=en_US&access_token=US5VcbOtO2WdGhVAa6ETwxoOacrfbSPXe3"
      );
      setRealms(response.data.realms);
    };
    loadServers();
  }, []);
  const onSuggestHandler = (text) => {
    setText(text);
    actions.handleInput(text);
    setSuggestions([]);
  };
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = realms.filter((realm) => {
        const regex = new RegExp(`${text}`, "gi");
        return realm.name.match(regex);
      });
    }
    console.log("matches", matches);
    setSuggestions(matches.slice(0, 6));
    setText(text);
    actions.handleInput(text);
  };
  return (
    <div className="row bar">
      <input
        className="input1"
        placeholder="Search..."
        type="text"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
        onBlur={() =>
          setTimeout(() => {
            setSuggestions([]);
          }, 100)
        }
      ></input>

      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div
            key={i}
            className="suggestion"
            onClick={() => onSuggestHandler(suggestion.name)}
          >
            {suggestion.name}
          </div>
        ))}
    </div>
  );
}
export default SearchBar;
