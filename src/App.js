import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import Edit from './edit';
import CloseIcon from '@mui/icons-material/Close';


function App() {
  const data= new Array(6).fill(null)
const[selected,setSelected]=useState('PERSON')
const[open,setOpen]=useState()
const[deleteid,setDeleteid]=useState()
const[annotate,setAnnotate]=useState({
  id:'',
  type:'',
  value:'sap'
})
const[annotations,setAnnotations]=useState([])
useEffect(()=>{
setAnnotations([...annotations,annotate])
},[annotate])
useEffect(()=>{
  var inputText = document.getElementById("middle");
  var irs = inputText.innerHTML; 
  annotations.forEach(a => {
    irs=irs.split(a.value).join('<span class="highlighted"><span class="highlight">'+a.value+'</span>'+' '+'<span class="category">'+a.type+' '+'</span></span>')

    console.log(a,'king') 
  })
 
  var x=document.getElementById("middle");
  inputText.innerHTML=irs
     console.log(annotations,selected,irs,'u','rajesh')
},[annotations])
const highlight=(text,s)=>{
  var inputText = document.getElementById("middle");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) { 
     setAnnotate({id:Math.random(),type:selected,value:text})
     console.log(selected,'inside highlight')
  }
}
const addevent=()=>{
  if(window.getSelection().toString().length){
    let exactText = window.getSelection().toString();    
   highlight(exactText,selected)
 }
}
  useEffect(()=>{
    console.log(selected)
    document.addEventListener('mouseup',addevent)
  return () => {
    console.log("remove effect");
    window.removeEventListener('mouseup',addevent);
}
  },[annotate,annotations])
useEffect(()=>{
if(deleteid){
setOpen(!open)
}
},[deleteid])
  const handleclick=(a)=>{
    setSelected(a)
  }
const handleclickclose=(i)=>{
  setDeleteid(i)
}
  return (
    <>
    <div className="main">
   <div className='records'>
<div className='topbar'>
records
</div>
<div className='body'>
  {data.map((d)=><>
  <div className='record'>

  </div>
  </>)}
</div>
   </div>
   <div className='ann_win'><div className='topbar'>
<h2 onClick={()=>handleclick('PERSON')} className={selected==='PERSON'?'selected':'notselected'}>PERSON</h2>
<h2 onClick={()=>handleclick('ORG')} className={selected==='ORG'?'selected':'notselected'}> ORG</h2>
</div>
<div id='middle' className='body middle'>
<p>Organization (Org for short). User should be able to select one of the categories and highlight
parts of the text. For example, the user selects ‘Person’ category from above and highlights all
the Person names in the text below.
When the user selects part of the text, that app should:
1. change the background of the text as shown above and
2. create a new annotation item for the record on the right side of the page in ‘Annotations
List’ window
Annotation list. On the right side of the page we show a list of highlights for a given record.
Highlighted text has 2 properties: highlighted text and the category information. When the delete
(x) button is clicked we delete that highlighted entry. Annotation list window minimizes to the
right if the sandwich button is clicked.</p>
</div></div>
   <div className='ann_list'><div className='topbar'>
annotations
</div>
<div className='body '>
 {annotations.length>1&&annotations.map((a,index)=><>
 {index>1&&
 <div className='ann'>
  
  <h2>{a.value}</h2>
  <h2>{a.type}</h2>
  <h2 onClick={()=>handleclickclose(a.id)}><CloseIcon/></h2>
  </div>}</>)} 
</div></div>
    </div>
    <Edit open={open} setOpen={setOpen} deleteid={deleteid} annotations={annotations} setAnnotations={setAnnotations}/>
    </>
  );
}

export default App;
