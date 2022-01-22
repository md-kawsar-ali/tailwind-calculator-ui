(function(){
  
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let special = document.querySelectorAll('.btn-special');
    
    //retrieve data from numbers and "+" "-" that are clicked
    buttons.forEach(function(button){
      button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
      })
    });

    //retrieve data from "*" "/" that are clicked
    special.forEach(function(button){
      button.addEventListener('click', function(e){
        if(screen.value !== ''){
          let value = e.target.dataset.num;
          screen.value += value;
        } else {
          screen.placeholder = 'Please Enter a Value';
        }
      })
    });
    
    equal.addEventListener('click', function(e){
      if(screen.value === ''){
        screen.placeholder = 'Please Enter a Value';
      } else {
        let answer = eval(screen.value);
        screen.value = answer;
      }
    })
    
    clear.addEventListener('click', function(e){
      if(screen.value !== ''){
        screen.value = '';
        screen.placeholder = '';
      }
    })
   
  })();