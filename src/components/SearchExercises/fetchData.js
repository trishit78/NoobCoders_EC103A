export const exerciseOptions ={
    
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': '06f7ea99c0mshc96464b28708660p1df2b3jsndb14557ed3bb',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};







export const fetchData =  async (url,options)=>{
    const res = await fetch(url,options);
    const data = await res.json();
    return data;
}