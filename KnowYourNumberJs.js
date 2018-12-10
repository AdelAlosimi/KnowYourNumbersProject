
/* welcome koko  */
/*eslint-env browser*/


function checkDec(el) {
    var ex = /^[0-9]+\.?[0-9]*$/;
    if (ex.test(el.value) == false) {
        el.value = el.value.substring(0, el.value.length - 1);
    }
}
function checkRadioButton(GroupName, RadioGenderErrorMessageId) {
    var genders = document.getElementsByName(GroupName);
    if (genders[0].checked == true) {
        return true;
    } else if (genders[1].checked == true) {
        return true;
    } else {
        // no checked
        document.getElementById(RadioGenderErrorMessageId).style.display = "block";
        return false;
    }
}

function reset_msg(RadioErrorMessageId,option) {
    document.getElementById(RadioErrorMessageId).style.display = "none";

    var option = document.getElementsByName('Answer2');
    if (option[0].checked == true) {

        return true;
    } else if (option[1].checked == true) {

        return true;
    } else {
        // no checked
        return false;
    }
}

function validateAge() {
    var age = parseInt(document.getElementById('Age').value);
    if(age < 16) {
          document.getElementById('RequiredFieldSpanAge').innerHTML="العمر يجب أن يكون فوق  16";
          document.getElementById('RequiredFieldSpanAge').style.display = "block";
          return false;
    }
    else {
        return true;
    }
}

function showAndHide(checkedBox,ShowDivOrError) {
    var ans = document.getElementById(checkedBox).checked;
    if (ans == true) {
        document.getElementById(ShowDivOrError).style.display = "block";

    }

}

function ResetMessage(checkedBox, HideDivOrError) {
    var ans = document.getElementById(checkedBox).checked;
    if (ans == true) {
        document.getElementById(HideDivOrError).style.display = "none";

    }
}

function showDivResult(DivId) {
    document.getElementById(DivId).style.display="block";
}

function validateForm() {
     var ch1 =  checkRadioButton('Gender','RequiredFieldSpanRadioGender');
     var ch2 =  checkRadioButton('Answer1','RequiredFieldSpanRadioAnswer1');
     var ch3 = checkRadioButton('HavePressureOrNot','RequiredFieldSpanRadioForPressure');
     var ch4 = checkRadioButton('Answer2','RequiredFieldSpanRadioAnswer2');
     var v1 = validateInputText('Age', 'RequiredFieldSpanAge');
     var v2 = validateInputText('HbA1c','RequiredFieldSpanHbA1c');
     var v3 = validateInputText('SystolicPressure', 'RequiredFieldSpanForSystolicPressure');
     var v4 = validateInputText('DiastolicPressure', 'RequiredFieldSpanForDiastolicPressure');
     var v5 = validateInputText('Waistline', 'RequiredFieldSpanForWaistline');
    var v6 = validateInputText('HbA1cAfterTwoHours', 'RequiredFieldSpanHbA1cAfterTwoHours');
    var v7 = validateInputText('HbA1cForFast', 'RequiredFieldSpanHbA1cForFast');
    if (ch1 == true && ch2 == true && ch3 == true || ch4 == true
        && v1 == true && v2 == true && v3 == true && v4 == true && v5 == true || v6==true || v7==true) {
        return true;
    }
    else {
        return false;
    }
    
    
}


//this method clear the span error when the use press on the input (keypress)
function clearText(SpanErrorMessage) {
    document.getElementById(SpanErrorMessage).style.display = "none";

}
//this method clear the span error when the use leave  the input empty or enter a string 

function validateInputText(TextId, SpanErrorMessageInputText) {
    var InputText = document.getElementById(TextId).value;
    if (InputText === "") {
        document.getElementById(SpanErrorMessageInputText).style.display = "block";

        return false;
    }
    var letters = /^[0-9]+\.?[0-9]*$/;
    if (!InputText.match(letters)) {
        document.getElementById(SpanErrorMessageInputText).innerHTML = "لايسمح بادخال الأحرف والرموز ";

        document.getElementById(SpanErrorMessageInputText).style.display = "block";

        return false;
    }
    else {
        return true;

    }
}

function ValidatePressureMessages() {
    document.getElementById('pressure_result').innerHTML = "مشكلة في الأرقام المدخلة "

    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
    document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
    document.getElementById('pressure_message').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
    document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";

}

function WaistlinePressureMessagesForMale() {
    document.getElementById('RequiredFieldSpanForWaistline').innerHTML =
        "إدخال غير صحيح ، يجب أن يكون محيط الخصر للرجال المصابين بالسكر والضغط دون 201 ";
    document.getElementById('RequiredFieldSpanForWaistline').style.display = "inline";



    document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
    document.getElementById('Waistline_result').innerHTML = "مشكلة في الرقم المدخل ";
    document.getElementById('Waistline_message').innerHTML =
        "تأكد من المدخل الخاص بمحيط الخصر ، للرجال يجب أن يكون فوق 79 ودون 201";
}

function WaistlinePressureMessagesForFemale() {
    document.getElementById('RequiredFieldSpanForWaistline').innerHTML =
        "إدخال غير صحيح ، يجب أن يكون محيط الخصر للنساء المصابين بالسكر والضغط دون 201 ";
    document.getElementById('RequiredFieldSpanForWaistline').style.display = "inline";
    document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
    document.getElementById('Waistline_result').innerHTML = "مشكلة في الرقم المدخل ";
    document.getElementById('Waistline_message').innerHTML =
        "تأكد من المدخل الخاص بمحيط الخصر ، للنساء يجب أن يكون فوق 69 ودون 201";
}



function TwoHoursChoiceValidationMessages() {
    document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').innerHTML =
        " تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
    document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').style.display = "inline";


    document.getElementById('HbA1c_icon').className = "flaticon-exclamation-mark-inside-a-circle";
    document.getElementById('HbA1c_result').innerHTML = "مشكلة في الرقم المدخل ";
    document.getElementById('HbA1c_message').innerHTML =
        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
}


//like the main in c# language , used in onclick event

function calculate() {
    var x = validateForm();
    var y = validateAge();

    if (x == true && y) {
        HasDiabetesAndPressureMale();
        HasDiabetesAndPressureFemale();

        HasDiabetesAndNoPressureMale();
        HasDiabetesAndNoPressureFemale();

        HasNoDiabetesFastChoiceAndHasPressureMale();
        HasNoDiabetesFastChoiceAndHasPressureFemale();

        HasNoDiabetesTwoHoursChoiceAndHasPressureMale();
        HasNoDiabetesTwoHoursChoiceAndHasPressureFemale();

        HasNoDiabetesHbA1cAndHasPressureMale();
        HasNoDiabetesHbA1cAndHasPressureFemale();

        HasNoDiabetesAndNoPressureMaleHbA1cChoice();
        HasNoDiabetesAndNoPressureFemaleHbA1cChoice();

        HasNoDiabetesAndNoPressureMaleFastChoice();
        HasNoDiabetesAndNoPressureFemaleFastChoice();

        HasNoDiabetesAndNoPressureMaleAfterTwoHours();
        HasNoDiabetesAndNoPressureFemaleAfterTwoHours();
     
        showDivResult('div_result');
        showDivResult('progressBarKnowYourNumber');

    }
  
  
}


function printDiv(divName,MessageId) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

     var printMessageID = document.getElementById(MessageId);
     
    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}





             