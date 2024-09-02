let url = "http://universities.hipolabs.com/search?name=";


let input = document.querySelector("input");

let btn = document.querySelector("button");

let mainli = document.querySelector("#list");


btn.addEventListener("click",async ()=>
{
  let country = input.value;
  let collagearray = await getdata(country);
  mainli.innerText ="";
  for(collage of collagearray)
  {
    let li = document.createElement("li");
    li.innerText=collage.name;
    mainli.append(li);
  }
})
 

async function getdata(country)
{
  let collages = await axios.get(url+country);
  return (collages.data);
}