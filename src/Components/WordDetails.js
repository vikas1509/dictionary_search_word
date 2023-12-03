import React, { useEffect,useState } from 'react'

const WordDetails = ({clickedWord}) => {
    const [displayData,setDisplayData] = useState();
    useEffect(()=>{
        handleSubmit();
    },[])
    async function handleSubmit(){
       
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${clickedWord}`);
            const data = await response.json();
            console.log(">>>>>>>>>>>>", data[0]);
            setDisplayData(data[0]);
    
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        }
  return (
    <div>
         {
            displayData && 
            <div>
                <h1>{displayData.word}</h1>
                {   displayData.phonetics.length>0 &&
                    displayData.phonetics.map((val,indx)=>{
                   return    (<div key={indx}>
                     { val.audio &&  
                         <><p>{val.text}</p><audio controls>
                               <source src={val.audio} type="audio/ogg"></source>
                           </audio></>}
                       </div>)
                    })
                }
              {
            displayData.meanings.length > 0 && 
            displayData.meanings.map((meaning, indx) => {
                return (
                    <div key={indx}>
                        <p><b>{meaning.partOfSpeech}</b></p>
                        {
                            meaning.definitions.map((definition, index) => {
                                return <p key={index}>{definition.definition}</p>;
                            })
                        }
                    </div>
                );
            })
        }
            </div>

        }
    </div>
  )
}

export default WordDetails