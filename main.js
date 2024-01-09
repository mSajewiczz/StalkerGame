const taskTxt = document.querySelector(".tast-txt")

let numOne = 0;

function add() {
    if(numOne < 12) {
        return ++numOne;
    }
}

function sub() {
    if(numOne > 0) {
        return --numOne;
    }
}

function sw1() {
    add()
    switch (numOne) {
        case 0:
            taskTxt.innerHTML = "Kliknij przycisk, aby pokazać treść...";
            break;

        case 1:
            taskTxt.innerHTML = "1. Znajdźcie handlarza by kupić detektor chemiczny.";
          break; 
      
          case 2:
            taskTxt.innerHTML = "2. Poszukajcie pracy by zarobić na detektor chemiczny.";
          break; 
      
          case 3:
            taskTxt.innerHTML = "3. Odszukajcie Czeczeńskiego najemnika z ogłoszenia o pracę.";
          break; 
      
          case 4:
            taskTxt.innerHTML = "4. Znajdźcie plany śmigłowca Mi-24.";
          break; 
      
          case 5:
            taskTxt.innerHTML = "5. Dostarczcie plany do najemnika.";
          break; 
      
          case 6:
            taskTxt.innerHTML = "6. Kupcie detektor chemiczny.";
          break; 
      
          case 7:
            taskTxt.innerHTML = "7. Wejdźcie do zony.";
          break; 
      
          case 8:
            taskTxt.innerHTML = "8. Znajdźcie łapówkę dla rosyjskiego żołnierza.";
          break; 
      
          case 9:
            taskTxt.innerHTML = "9. Znajdźcie informacje o poszukiwanym artefakcie.";
              break; 
              
        case 10:
            taskTxt.innerHTML = "10. Zdezaktywujcie ładunki wybuchowe zaznaczone przez stalkera.";
        break; 
        case 11:
        taskTxt.innerHTML = "11. Odszukajcie znajomego stalkera.";
        break; 
                    case 12:
                        taskTxt.innerHTML = "12. Znajdźcie poszukiwany artefakt.";
                          break; 
      }
}

function sw2() {
    sub()
    switch (numOne) {
      case 0:
        taskTxt.innerHTML = "Kliknij przycisk, aby pokazać treść...";
        break;

    case 1:
        taskTxt.innerHTML = "1. Znajdźcie handlarza by kupić detektor chemiczny.";
      break; 
  
      case 2:
        taskTxt.innerHTML = "2. Poszukajcie pracy by zarobić na detektor chemiczny.";
      break; 
  
      case 3:
        taskTxt.innerHTML = "3. Odszukajcie Czeczeńskiego najemnika z ogłoszenia o pracę.";
      break; 
  
      case 4:
        taskTxt.innerHTML = "4. Znajdźcie plany śmigłowca Mi-24.";
      break; 
  
      case 5:
        taskTxt.innerHTML = "5. Dostarczcie plany do najemnika.";
      break; 
  
      case 6:
        taskTxt.innerHTML = "6. Kupcie detektor chemiczny.";
      break; 
  
      case 7:
        taskTxt.innerHTML = "7. Wejdźcie do zony.";
      break; 
  
      case 8:
        taskTxt.innerHTML = "8. Znajdźcie łapówkę dla rosyjskiego żołnierza.";
      break; 
  
      case 9:
        taskTxt.innerHTML = "9. Znajdźcie informacje o poszukiwanym artefakcie.";
          break; 
          
    case 10:
        taskTxt.innerHTML = "10. Zdezaktywujcie ładunki wybuchowe zaznaczone przez stalkera.";
    break; 
    case 11:
    taskTxt.innerHTML = "11. Odszukajcie znajomego stalkera.";
    break; 
                case 12:
                    taskTxt.innerHTML = "12. Znajdźcie poszukiwany artefakt.";
                      break; 
      }
}



