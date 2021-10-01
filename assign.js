const students=[]
const stu_obj=[]
const studentsitem=document.querySelector("#ul_id")
console.log(studentsitem)
document.querySelector("#view_id").addEventListener("click",addToStudents);


function addToStudents()
{
   const stu_name=document.querySelector("#name_id").value
   const stu_mob=document.querySelector("#mobile_id").value
   const stu_email=document.querySelector("#email_id").value
   console.log(stu_name)
   console.log(stu_mob)
   console.log(stu_email)
   const stu_obj={
       nameIs:stu_name,
       mobileIs:stu_mob,
       emailIs:stu_email,
   }

       console.log(stu_obj)
       students.unshift(stu_obj)
       console.log(students)
       displayStudents();

}

function displayStudents()
{
   
        studentsitem.innerHTML = "";
        document.querySelector("#name_id").value = "";
        document.querySelector("#mobile_id").value = "";
        document.querySelector("#email_id").value = "";
        
        students.forEach((item) => {
          const studElement_1 = document.createElement("li")
          studElement_1.innerHTML = item.nameIs
          const studElement_2 = document.createElement("li")
            studElement_2.innerHTML = item.mobileIs
            const studElement_3 = document.createElement("li")
            studElement_3.innerHTML = item.emailIs
          console.log(studElement_1)
            studentsitem.appendChild(studElement_1)
            console.log(studElement_2)
              studentsitem.appendChild(studElement_2)
              console.log(studElement_3)
              studentsitem.appendChild(studElement_3)
        })

        
    }
