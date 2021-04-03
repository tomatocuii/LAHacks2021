import TutorList from "./TutorList";
import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import firebase from "../firebase";

function Search() {
  const [tutors, setTutors] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const usersCol = await db
        .collection("users")
        .where("status", "array-contains", "tutor")
        .get();
      setTutors(usersCol.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = tutors.filter(
      (tutor) =>
        tutor.classes.findIndex((element) =>
          element.includes(searchTerm.toUpperCase().trim())
        ) != -1
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        placeholder="Search for a class..."
        value={searchTerm}
        onChange={handleChange}
      />
      <TutorList key={tutors.id} tutors={searchResults} />
    </div>
  );
}

export default Search;
