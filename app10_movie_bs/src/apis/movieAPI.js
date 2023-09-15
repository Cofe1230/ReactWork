import axios from "axios";

export async function insertMovie(data){
  try{
    console.log(data.title);
    const resp = await axios.post('insert',{
                  title:data.title,
                  year:data.year,
                  summary:data.summary});
    console.log(resp);
    alert('추가됐습니다')
    return resp;
  }catch(e){
    console.log(e);
  }
}
export async function deleteMovie(num){
  try{
    await axios.delete('delete/');
  }catch(e){
    console.log(e);
  }
}
