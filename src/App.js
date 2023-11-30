import "./App.css";
import React, { useState } from "react";
import { Stack, Chip, Slider, Typography, Menu, MenuItem } from "@mui/material";
import Header from "./components/Header";

function App() {
  const [isFunDropdownVisible, setFunDropdownVisible] = useState(false);
  const [isEduDropdownVisible, setEduDropdownVisible] = useState(false);
  const [isSpoDropdownVisible, setSpoDropdownVisible] = useState(false);
  const [isNewsDropdownVisible, setNewsDropdownVisible] = useState(false);
  const [isInvDropdownVisible, setInvDropdownVisible] = useState(false);
  const [isFactDropdownVisible, setFactDropdownVisible] = useState(false);

  const handleFunClick = () => {
    setFunDropdownVisible(!isFunDropdownVisible);
  };

  const handleEduClick = () => {
    setEduDropdownVisible(!isEduDropdownVisible);
  };
  const handleSpoClick = () => {
    setSpoDropdownVisible(!isSpoDropdownVisible);
  };
  const handleNewsClick = () => {
    setNewsDropdownVisible(!isNewsDropdownVisible);
  };

  const handleInvestClick = () => {
    setInvDropdownVisible(!isInvDropdownVisible);
  };

  const handleFactClick = () => {
    setFactDropdownVisible(!isFactDropdownVisible);
  };

  const handleOptionSelect = (selectedValue) => {
    // Handle the selected option as needed
    console.log(`Selected option: ${selectedValue}`);
  };

  return (
    <>
      <div class="main">
        <Header />
        <div class="content">
          <Typography variant="h3"> Content type</Typography>
          <Typography variant="subtitle1">
            {" "}
            Choose a content type that best fits your needs.
          </Typography>
        </div>
        <Stack className="chip" direction="row" spacing={1}>
          <Chip label="Fun" size="small" onClick={handleFunClick} />
          {isFunDropdownVisible && (
            <div style={{ marginTop: 10 }}>
              <Typography variant="subtitle1">
                {" "}
                Which type of “Fun” content do you want to create?
              </Typography>
              <select onChange={(e) => handleOptionSelect(e.target.value)}>
                <option value="Option 1">Board games revival</option>
                <option value="Option 2">Comedy trends</option>
                <option value="Option 3">Amusement parks</option>
                <option value="Option 3">Escape rooms</option>
                <option value="Option 3">Street performances</option>
                <option value="Option 3">Online challenges</option>
                <option value="Option 3">Festivals impact</option>
                <option value="Option 3">Crafting movement</option>
                <option value="Option 3">Social Gaming</option>
                <option value="Option 3">Virtual Reality</option>
              </select>
            </div>
          )}
          <Chip
            label="Education"
            size="small"
            variant="outlined"
            onClick={handleEduClick}
          />
          {isEduDropdownVisible && (
            <div style={{ marginTop: 10 }}>
              <Typography variant="subtitle1">
                {" "}
                Which type of “Fun” content do you want to create?
              </Typography>
              <select onChange={(e) => handleOptionSelect(e.target.value)}>
                <option value="Option 1">Gamified learning</option>
                <option value="Option 2">Education systems</option>
                <option value="Option 3">Bilingual benefits</option>
                <option value="Option 3">Standardized testing</option>
                <option value="Option 3">Arts in schools</option>
                <option value="Option 3">Tech bootcamps</option>
                <option value="Option 3">Homeschooling dynamics</option>
                <option value="Option 3">Mentorship importance</option>
                <option value="Option 3">Educational equity</option>
                <option value="Option 3">Mobile learning</option>
              </select>
            </div>
          )}
          <Chip
            label="Sports"
            size="small"
            variant="outlined"
            onClick={handleSpoClick}
          />
          {isSpoDropdownVisible && (
            <div style={{ marginTop: 10 }}>
              <Typography variant="subtitle1">
                {" "}
                Which type of “Fun” content do you want to create?
              </Typography>
              <select onChange={(e) => handleOptionSelect(e.target.value)}>
                <option value="Option 1">Sports medicine</option>
                <option value="Option 2">Team sociology</option>
                <option value="Option 3">Olympic economics</option>
                <option value="Option 3">Gender parity</option>
                <option value="Option 3">Fandom psychology</option>
                <option value="Option 3">Extreme sports</option>
                <option value="Option 3">Sports business</option>
                <option value="Option 3">Youth athletics</option>
                <option value="Option 3">Data analytics</option>
                <option value="Option 3">Doping ethics</option>
              </select>
            </div>
          )}
          <Chip
            label="News"
            size="small"
            variant="outlined"
            onClick={handleNewsClick}
          />
          {isNewsDropdownVisible && (
            <div style={{ marginTop: 10 }}>
              <Typography variant="subtitle1">
                {" "}
                Which type of “Fun” content do you want to create?
              </Typography>
              <select onChange={(e) => handleOptionSelect(e.target.value)}>
                <option value="Option 1">Sports medicine</option>
                <option value="Option 2">Team sociology</option>
                <option value="Option 3">Olympic economics</option>
                <option value="Option 3">Gender parity</option>
                <option value="Option 3">Fandom psychology</option>
                <option value="Option 3">Extreme sports</option>
                <option value="Option 3">Sports business</option>
                <option value="Option 3">Youth athletics</option>
                <option value="Option 3">Data analytics</option>
                <option value="Option 3">Doping ethics</option>
              </select>
            </div>
          )}
          <Chip
            label="Investment"
            size="small"
            variant="outlined"
            onClick={handleInvestClick}
          />
          {isInvDropdownVisible && (
            <div style={{ marginTop: 10 }}>
              <Typography variant="subtitle1">
                {" "}
                Which type of “Fun” content do you want to create?
              </Typography>
              <select onChange={(e) => handleOptionSelect(e.target.value)}>
                <option value="Option 1">Sports medicine</option>
                <option value="Option 2">Team sociology</option>
                <option value="Option 3">Olympic economics</option>
                <option value="Option 3">Gender parity</option>
                <option value="Option 3">Fandom psychology</option>
                <option value="Option 3">Extreme sports</option>
                <option value="Option 3">Sports business</option>
                <option value="Option 3">Youth athletics</option>
                <option value="Option 3">Data analytics</option>
                <option value="Option 3">Doping ethics</option>
              </select>
            </div>
          )}
          <Chip
            label="Facts"
            size="small"
            variant="outlined"
            onClick={handleFactClick}
          />
          {isFactDropdownVisible && (
            <div style={{ marginTop: 10 }}>
              <Typography variant="subtitle1">
                {" "}
                Which type of “Fun” content do you want to create?
              </Typography>
              <select onChange={(e) => handleOptionSelect(e.target.value)}>
                <option value="Option 1">Sports medicine</option>
                <option value="Option 2">Team sociology</option>
                <option value="Option 3">Olympic economics</option>
                <option value="Option 3">Gender parity</option>
                <option value="Option 3">Fandom psychology</option>
                <option value="Option 3">Extreme sports</option>
                <option value="Option 3">Sports business</option>
                <option value="Option 3">Youth athletics</option>
                <option value="Option 3">Data analytics</option>
                <option value="Option 3">Doping ethics</option>
              </select>
            </div>
          )}
        </Stack>

        <Typography variant="subtitle1">
          {" "}
          Set the number of words for output text.
        </Typography>

        <Slider aria-label="Temperature" defaultValue={30} color="secondary" />
      </div>
    </>
  );
}

export default App;
