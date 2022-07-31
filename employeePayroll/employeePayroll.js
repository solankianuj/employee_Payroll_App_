function salaryInput()
{
    const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');

output.textContent=salary.value;


salary.addEventListener('input',function(){
   output.textContent=salary.value;
});
return salary.value;
}


function validation() {

    var empName=document.querySelector('#name').value;
    var profile=profileDisplay();
    var gender=genderDisplay();
    var department=departmentDisplay();
    var salary=salaryInput();
    var Date=startDate();
    var notes=document.getElementById("notes").value;

   var  employeePayrollobj={
        "empName":empName,
        "empProfile":profile,
        "empGender":gender,
        "empDepartment":department,
        "empSalary":salary,
        "empDate":Date,
        "empFeedback":notes

    }
    
    // alert(JSON.stringify(employeePayrollobj));
console.log(employeePayrollobj);
    
}

function profileDisplay(){
    var ele = document.getElementsByName('profile');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
      
        return  document.getElementById("profile1").innerHTML=ele[i].value;
                
                
    }
}

function genderDisplay() {
    var ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
       return  document.getElementById("gender").innerHTML
                = ele[i].value;
    }
}

function departmentDisplay() {
    var ele = document.getElementsByName('department');
    var list=[];
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
       list.push( ele[i].value);
       
    }
           return list;
}

function startDate(){
    var day=document.getElementById("day").value;
    var month=document.getElementById("month").value;
    var year=document.getElementById("year").value;
    var Date= ( day+" "+month+" "+year);
  
    return Date;

}