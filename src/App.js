import React, { useState, useEffect } from 'react';
import './App.css';
import { Configuration, OpenAIApi } from "openai";

function TranslationWebsite() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [translateLang, setTranslateLang] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleTranslateChange = (event) => {
    setTranslateLang(event.target.value);
  };

  const handleTranslation = async () => {
    const configuration = new Configuration({
      apiKey: "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",

    });
    const openai = new OpenAIApi(configuration);
    
    const completion =await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{"role": "system", "content": "You are a helpful assistant that translates from "+ inputText + "to" + translateLang}, {role: "user", content: "Translate "+ inputText + " to " + translateLang }],
      temperature: 0.1
    });
    setTranslatedText(completion.data.choices[0].message.content);
  };

  return (
    <div className='center'>

      <div className='app-header'>
        <h1 className='header'>TranslateHub</h1>
        <h4 className='sub-header'>Translate almost any language!</h4>
      </div>

      <div className='app-body'>
        <div>
          <textarea 
          placeholder="Select Language to Translate to.."
          value={translateLang}
          onChange={handleTranslateChange}
          className='language-select'
          />
        </div>
          
        <br />

        <div className='text-container'>
          <textarea
            placeholder="Enter text to translate"
            value={inputText}
            onChange={handleInputChange}
            className='text-area t-left'
          />

          <textarea
            placeholder="Translated Text:"
            value={translatedText}
            className='text-area'
          />
        </div>
        
        <br />

        <button className="my-button" onClick={handleTranslation}>Translate</button>
        
        <div className='Footer'>
          <hr className='horizontal-line'/>
          <a> translate@gmail.com</a>
          <p className='address'>1234 Curve St.</p>
          <p>Saint Claus, TN 54321</p>

        </div>
      </div>
    </div>
  );
}

export default TranslationWebsite;
