import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./styles/nav.css";
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Navbar = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      
      window.scrollTo({ top: 1800, left: 0, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };
  
  return (
    <div className="group">
      <Link to="/">
        <div className="text-wrapper">TheFitYou</div>
        </Link>
      <div className="overlap">
        <Link to="/">
          <div className="home">HOME</div>
          </Link>
        <a href="#exercises" className="exercises">EXERCISES</a>
      </div>
      <div className="overlap-group">
        <input sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text" className="input"></input>
        <button className="div" onClick={handleSearch}>SEARCH</button>
      </div>
    </div>
  );
};

export default Navbar;