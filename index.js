const calculateFromE1 = document.getElementById("CalculatorForm")
const calculatemarks = (event) =>{
    const maxMarks = 500;
    event.preventDefault();

    const formData = new FormData(calculateFromE1);
    const data = {};
    formData.forEach((value,key) =>{
        data[key] = +value;
    })

const totalMarks  = data.maths + data.english + data.computer + data.physics +data.chemistry;
// const percentage = Math.round((totalMarks/maxMarks) *100);
const percentage = ((totalMarks / maxMarks) * 100).toFixed(2);


const resultEl = document.createElement("p");
resultEl.innerText = `you have got ${totalMarks }  marks out of ${maxMarks} and your percentage is  ${percentage}% `
calculateFromE1.after(resultEl);
   
}
