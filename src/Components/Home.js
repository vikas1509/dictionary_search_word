import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addWord } from '../redux/actions/wordActions';

const Home = () => {
    const [word,setWord] = useState('');
    const [displayData,setDisplayData] = useState();
    const dispatch = useDispatch();
   async function handleSubmit(){
       
    try {
        console.log(word)
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        console.log(">>>>>>>>>>>>", data[0]);
        setDisplayData(data[0]);
        dispatch(addWord(word));

    } catch (error) {
        console.error("Error fetching data:", error);
    }
    }
  return (
   
    <div>
        <div  className='searchbar' style={{display:"flex", justifyContent:"center", margin:"3%"}}>
            <input type='text' placeholder='Enter Word' value={word} onChange={(e)=> setWord(e.target.value)} style={{width:"20%"}}/>
            <button onClick={handleSubmit} style={{backgroundColor:"black", color:"white"}}>Search</button>
        </div>
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

export default Home