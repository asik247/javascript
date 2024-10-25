const extracts=()=>{
const imagesFile = document.getElementById('images')
const divs = document.getElementById('div')

const fristimages = imagesFile.files[0];
if(!fristimages){
divs.textContent = 'please select you images'
return;
}
Tesseract.recognize(
    fristimages,
    'eng'
    
).then(({data})=>{
    divs.textContent = data.text
}).catch((error)=>{

})


}