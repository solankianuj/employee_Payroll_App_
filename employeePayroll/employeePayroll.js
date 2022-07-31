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

    var empName=nameDisplay();
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
    
    alert(JSON.stringify(employeePayrollobj));
// console.log(employeePayrollobj);
    
}

function nameDisplay(){
    var Name=document.getElementById("name").value;
    var nameReg=/^[A-Z]{1,}[a-z]{2,}[\s]{1,}/;
    if (nameReg.test(Name)) {
       
        return Name;
        
    }
    else
    alert("Name is Invalid");

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
    var dd=document.getElementById("day").value;
    var mm=document.getElementById("month").value;
    var yy=document.getElementById("year0").value;
     var d =new Date();
     alert(yy)

     if (yy<=d.getFullYear()) {

        if (yy=d.getFullYear()) {

            if (mm<d.getMonth()+1) {
                
                    var stDate= dd+"/"+mm+"/"+yy;
                     return stDate;
                
            } else {
                alert(" Date is incorrect")
            }
          
        } 
            else{
                var stDate= dd+"/"+mm+"/"+yy; 
                return stDate;

            }   
     } 
     else {
        alert(" Date is incorrect")
     }
    
}