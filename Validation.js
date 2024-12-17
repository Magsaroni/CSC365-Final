function validateForm(){
    
    // All the variables for the different tpes of forms the user can type in.
    var charaCter = document.commForm.txtCharDrawn.value;

    
    var commType = document.commForm.txtCommType.value;

    var howMany = document.commForm.txtHowMany.value;

    var dateDone = document.commForm.txtDateDone.value;

    var addInfo = document.commForm.txtAddInfo.value;

    var tosRead = document.commForm.txtTosRead.value;
    

    var divMessage = document.getElementById("divMessage");

    // Allows us to see if something goes wrong in the console.
    console.log("WhichChar=" + charaCter);

    console.log("CommmisionType=" + commType);

    console.log("HowMany=" + howMany);

    console.log("DateDone=" + dateDone);

    console.log("AddInfo=" + addInfo);

    console.log("TosRead=" + tosRead);

    // Labels for the form inputs.
    var lblCharDrawn = document.getElementById("lblCharDrawn")
    var lblCommType =  document.getElementById("lblCommType")
    var lblHowMany =  document.getElementById("lblHowMany")
    var lblDateDone =  document.getElementById("lblDateDone")
    var lblCharDrawn = document.getElementById("lblCharDrawn")
    var lblCommType =  document.getElementById("lblCommType")
    var lblHowMany =  document.getElementById("lblHowMany")
    var lblAddInfo =  document.getElementById("lblAddInfo")
    var lblTosRead =  document.getElementById("lblAddInfo")

    // Allows the color red to disappear if the user inserted information in the form.
    lblCharDrawn.style.backgroundColor = "";
   lblCommType.style.backgroundColor = "";
   lblHowMany.style.backgroundColor = "";
   lblDateDone.style.backgroundColor = "";
   lblAddInfo.style.backgroundColor = "";
   lblTosRead.style.backgroundColor = "";

   

    // If the user didn't enter what character they want drawn, a warning in red will appear above the form. It will also highlight which on wasn't filled.
    if (charaCter == ""){
        divMessage.textContent = "No Character was typed!";
        lblCharDrawn.style.backgroundColor = "red";
        return false;
    }

    // If the user didn't enter what commission type they want drawn, a warning in red will appear above the form. It will also highlight which on wasn't filled.
    else if (commType == "" ){
        divMessage.textContent = "No Commission Type was typed!";
        lblCommType.style.backgroundColor = "red";
        return false;
    }
// If the user didn't enter how many characters they want drawn, a warning in red will appear above the form. It will also highlight which on wasn't filled.
    else if (howMany == "" ){
        divMessage.textContent = "No Amount of Characters were typed!";
        lblHowMany.style.backgroundColor = "red";
        return false;
    }

    // If the user didn't enter what date the drawing needs to be done by, a warning in red will appear above the form. It will also highlight which on wasn't filled.
    else if (dateDone == "" ){
        divMessage.textContent = "No due date was typed!";
        lblDateDone.style.backgroundColor = "red";
        return false;
    }

    // If the user didn't enter any additional information NOR "None", a warning in red will appear above the form. It will also highlight which on wasn't filled.
    else if (addInfo == "" ){
        divMessage.textContent = "No additonal information was typed!";
        lblAddInfo.style.backgroundColor = "red";
        return false;
    }

     // If the user didn't enter any additional information NOR "None", a warning in red will appear above the form. It will also highlight which on wasn't filled.
     else if (tosRead == "" ){
        divMessage.textContent = "Did you read the Terms of Service?";
        lblTosRead.style.backgroundColor = "red";
        return false;
    }

    return true;
}