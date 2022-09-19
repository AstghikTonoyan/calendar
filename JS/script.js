  //   now Lets make our calendar dynamic using some javascript

  let dayList = document.querySelector('.days');
  let monthName = document.querySelector('.month-name');
  let yearName = document.querySelector('.year');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let today = document.querySelector('.today');

  // lets create an Date object

  let dt = new Date();
  let month = dt.getMonth()+1 ;//as it will return value between 0-11 so to make it 1-12 we add 1 to it
  let year = dt.getFullYear();
  let currentDay = dt.getDate();

  // make an array of month name to map with the month value we obtained using getMonth()
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'October', 'November', 'December']


  // now lets handle the previous and next button click
  prev.addEventListener('click',event=>{
      if(month===1){
          year = year -1;
          month = 12; 
      }else{
          month-=1;
      }
      calendar();
  });

  next.addEventListener('click',event=>{
      if(month===12){
        year = year +1;
          month =1;   
      }else{
          month+=1;
      }
      calendar();
  });
  // today.style.backgroundColor = "#76818D";
  //   today.style.backgroundColor =  "#2C3E50";
  
  today.addEventListener('click', event =>{
    let dt = new Date();
     month = dt.getMonth()+1 ;//as it will return value between 0-11 so to make it 1-12 we add 1 to it
     year = dt.getFullYear();
     currentDay = dt.getDate();
     
    
    calendar();
  });

  // now lets make a calendar function

  const calendar = ()=>{
      monthName.innerHTML = monthNames[month-1];
      yearName.innerHTML = year;
      dayList.innerHTML = '';
      
      let daysInMonth = new Date(year, month, 0).getDate(); 
      let dayNumber = new Date(year,month-1,1).getDay();
      let gaps;
      let schedule = " aaa";
      

      const courses = ["Linux Administration", "Python Programming", "Java Fundementals", "Computer Architecture", "SQL",
                        "Source Control", "HTML5", "CSS3", "Javascript", "MongoDB", "NodeJS", "Typescript", "Angular",
                        "Web Foundations", "Bootstrap", "Security", "Development to Production"];
      

      
      if (dayNumber === 0) {
          gaps = 6;
      }else{
          gaps = dayNumber - 1;
          // Ex:: if it is monday dayNumber = 1, so gaps = 1-1 = 0;
          // if it is thursdat dayNumber = 4, so gaps = 4-1 = 3;
      }

      for(let day = -gaps + 1 ;day<=daysInMonth; day++){
          const days = document.createElement('li');
          //const btn = document.createElement('button');
          //btn.innerText= "courses";

          if(day<=0){
              days.innerHTML = " ";
              dayList.appendChild(days);
              
          } else if (day===currentDay && month===dt.getMonth()+1 && year===dt.getFullYear()){
              //make this date as active as it is current date i.e. today
              days.setAttribute('class','active');
              days.innerHTML = day;
              dayList.appendChild(days);
              //days.appendChild(btn);
              
          }
          else{
            days.innerHTML = day;
            dayList.appendChild(days); 
            
            //days.appendChild(btn);
          }
      }
  };

  // thats it our calendar is ready

    