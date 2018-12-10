function HasDiabetesAndPressureFemale() {
    var isFemale = document.getElementById('female').checked;
    var hasDiabetes = document.getElementById('yes_ihave').checked;
    var hasPressure = document.getElementById('yes_ihaveP').checked;
    if (isFemale == true) {
        if (hasDiabetes == true) {
            if (hasPressure == true) {
                //alert('male has diabetes and pressure')
                //start diabetes
                var HbA1cInput1 = parseFloat(document.getElementById('HbA1c').value);
                var DiastolicPressureInput = parseFloat(document.getElementById('DiastolicPressure').value);
                var SystolicPressureInput = parseFloat(document.getElementById('SystolicPressure').value);
                var WaistlineInput = parseFloat(document.getElementById('Waistline').value);

                if (HbA1cInput1 < 2.9) {
                    document.getElementById('RequiredFieldSpanHbA1c').innerHTML = "الإدخال غير صحيح ، يجب أن يكون فوق 2.9 للمصاب بالسكر";
                    document.getElementById('RequiredFieldSpanHbA1c').style.display = "block";
                    document.getElementById('HbA1c_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    document.getElementById('HbA1c_result1').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message1').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 2.9 ودون 15.1";
               
                        document.getElementById('hasDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasDiabetesHbA1c').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasDiabetesHbA1c').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
    
                        }
    
    
                         
                            
    
                        
                        
                }
                else if (HbA1cInput1 >= 3 && HbA1cInput1 <= 7) {
                    document.getElementById('HbA1c_result1').innerHTML = "طبيعي" + " " + HbA1cInput1;
                    document.getElementById('HbA1c_message1').innerHTML = hasPressureMaleNat;
               
                    document.getElementById('hasDiabetesHbA1c').style.display="block";
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');

                    var h1 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";

                    var hp1 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasDiabetesHbA1c').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";

                    }


                       var isEmptyH1  = document.getElementById('diaHigh1').innerHTML==="";
                       if(isEmptyH1) {
                        document.getElementById('dbiNat1').innerHTML = HbA1cInput1;
                        document.getElementById('dbiNat1').style.display = "block";
                       }
                       else {
                        document.getElementById('diaHigh1').style.display="none";
                        document.getElementById('dbiNat1').innerHTML = HbA1cInput1;
                        document.getElementById('dbiNat1').style.display = "block";
                       }
                        
    
                   
                    
                    
                   

                }

              
                else if (HbA1cInput1 >= 7.1 && HbA1cInput1 <= 15) {
                    document.getElementById('HbA1c_result1').innerHTML = "مرتفع " + " " + HbA1cInput1;
                    document.getElementById('HbA1c_message1').innerHTML = hasDiabetesHighAndVeryHighMale;

                    document.getElementById('hasDiabetesHbA1c').style.display="block";
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');

                    var h1 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";

                    var hp1 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasDiabetesHbA1c').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";

                    }


                   

                    var isEmptyH2  = document.getElementById('dbiNat1').innerHTML==="";

                    if(isEmptyH2) {
                        document.getElementById('diaHigh1').innerHTML = HbA1cInput1;
                        document.getElementById('diaHigh1').style.display = "block";
                    }
                    else {
                        document.getElementById('diaHigh1').innerHTML = HbA1cInput1;
                        document.getElementById('diaHigh1').style.display = "block";
                        document.getElementById('dbiNat1').style.display="none";
                    }

                    
                }
                else {
                    document.getElementById('RequiredFieldSpanHbA1c').innerHTML = " الإدخال غير صحيح ، يجب أن يكون فوق 2.9 للمصاب بالسكر ودون 15";
                    document.getElementById('RequiredFieldSpanHbA1c').style.display = "block";
                    document.getElementById('HbA1c_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    document.getElementById('HbA1c_result1').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message1').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 2.9 ودون 15.1";
                        document.getElementById('hasDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasDiabetesHbA1c').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasDiabetesHbA1c').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
    
                        }
    
    
                         
                      
    
                }
                //end diabetes 

                //pressure 

                
                if (DiastolicPressureInput < 20) {
                    //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                            document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أكبر من 20  للمصابين";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                    
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                    document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
              document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";

                    document.getElementById('hasPressure').style.display="block";
                    document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                   
                    
                    document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasNoPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasPressureProgressBarD').style.display="none";
                        document.getElementById('hasPressureProgressBarS').style.display="none";

                        
                    }
                    else {
                       document.getElementById('hasPressureProgressBarD').style.display="none";
                       document.getElementById('hasPressureProgressBarS').style.display="none";

                        document.getElementById('hasNoPressureProgressBarS').style.display="none";
                        document.getElementById('hasNoPressureProgressBarD').style.display="none";

                    }
                }
              
                if (SystolicPressureInput < 50) {
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                    = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أكبر من 50  للمصابين";
                document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                        
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";

                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                        
                        document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    
                        var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                        var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                        if(h1) {

                            document.getElementById('hasPressure').style.display="block";

                        }
                        else {
                        
                            document.getElementById('hasPressure').style.display="block";
                            document.getElementById('hasNoPressure').style.display="none";
                        


                        }

                        if (hp1 && hp2) {
                            document.getElementById('hasPressureProgressBarD').style.display="none";
                            document.getElementById('hasPressureProgressBarS').style.display="none";

                            
                        }
                        else {
                        document.getElementById('hasPressureProgressBarD').style.display="none";
                        document.getElementById('hasPressureProgressBarS').style.display="none";

                            document.getElementById('hasNoPressureProgressBarS').style.display="none";
                            document.getElementById('hasNoPressureProgressBarD').style.display="none";

                        }
                }
              

                 if (DiastolicPressureInput >= 20 && DiastolicPressureInput <= 59
                    && SystolicPressureInput >= 50 && SystolicPressureInput <= 89) {
                    //alert("ضغط الدم لديك منخفض عليك مراجعة الطبيب");
                    document.getElementById('pressure_result1').innerHTML = "منخفض " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message1').innerHTML = hasPressureLowMale;

                     document.getElementById('hasPressure').style.display="block";
                     document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                     
                     document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasPressureProgressBarD').style.display="block";
                         document.getElementById('hasPressureProgressBarS').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                         document.getElementById('hasNoPressureProgressBarS').style.display="none";
                         document.getElementById('hasNoPressureProgressBarD').style.display="none";
 
                     }
                     

                     var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                     var isEmptyPnatd = document.getElementById('natPressureS').innerHTML==="";

                     var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                     var isEmptyPhighd = document.getElementById('HighPressureD').innerHTML==="";

                     var isEmptyPveryhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                     var isEmptyPveryhighd = document.getElementById('VeryHighPressureD').innerHTML==="";

                     if(isEmptyPnats && isEmptyPnatd && isEmptyPhighs && isEmptyPhighd && isEmptyPveryhighs && isEmptyPveryhighd) {
                        document.getElementById('lowPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('lowPressureS').style.display = "block";
                        document.getElementById('lowPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('lowPressureD').style.display = "block";
                     }
                     else {
                        document.getElementById('lowPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('lowPressureS').style.display = "block";
                        document.getElementById('lowPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('lowPressureD').style.display = "block";

                         document.getElementById('natPressureS').style.display="none";
                         document.getElementById('natPressureS').style.display="none";

                         document.getElementById('natPressureD').style.display="none";
                         document.getElementById('natPressureD').style.display="none";
   
                         document.getElementById('HighPressureS').style.display="none";
                         document.getElementById('HighPressureD').style.display="none";
   
                         document.getElementById('VeryHighPressureS').style.display="none";
                         document.getElementById('VeryHighPressureD').style.display="none";
   
                     }

                     
                    document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";

                }
               




              else  if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 89
                    && SystolicPressureInput >= 90 && SystolicPressureInput <= 139) {
                    document.getElementById('pressure_result').innerHTML = "طبيعي " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message').innerHTML = hasPressureNatMale;
                      

                    document.getElementById('pressure_icon').className = "flaticon-good";


                     var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                     var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";

                     var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                     var isEmptyPhighd = document.getElementById('HighPressureS').innerHTML==="";

                     var isEmptyPveryhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                     var isEmptyPveryhighd = document.getElementById('VeryHighPressureD').innerHTML==="";

                     if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPveryhighs && isEmptyPveryhighd) {

                       
                        document.getElementById('natPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('natPressureS').style.display = "block";
                        document.getElementById('natPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('natPressureD').style.display = "block";
                        }
                        else {
                        document.getElementById('natPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('natPressureS').style.display = "block";
                        document.getElementById('natPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('natPressureD').style.display = "block";

                        document.getElementById('lowPressureS').style.display="none";
                        document.getElementById('lowPressureD').style.display="none";
  
                        document.getElementById('HighPressureS').style.display="none";
                        document.getElementById('HighPressureD').style.display="none";
  
                        document.getElementById('VeryHighPressureS').style.display="none";
                        document.getElementById('VeryHighPressureD').style.display="none";

                        }

                }

                

 
              


               else  if (DiastolicPressureInput >= 90 && DiastolicPressureInput <= 109
                    && SystolicPressureInput >= 140 && SystolicPressureInput <= 179) {
                    document.getElementById('pressure_result1').innerHTML = "مرتفع " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message1').innerHTML = hasPressureKindOfMale;
                        
                     document.getElementById('hasPressure').style.display="block";
                     document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                     
                     document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasPressureProgressBarD').style.display="block";
                         document.getElementById('hasPressureProgressBarS').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                         document.getElementById('hasNoPressureProgressBarS').style.display="none";
                         document.getElementById('hasNoPressureProgressBarD').style.display="none";
 
                     }
                     

                    var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                    var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";

                    var isEmptyPhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                    var isEmptyPhighd = document.getElementById('VeryHighPressureD').innerHTML==="";

                    var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                    var isEmptyPnatd = document.getElementById('natPressureD').innerHTML==="";

                    if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPnats && isEmptyPnatd) {
                        document.getElementById('HighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('HighPressureS').style.display = "block";
                        document.getElementById('HighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('HighPressureD').style.display = "block";
                    }
                    else {
                        document.getElementById('HighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('HighPressureS').style.display = "block";
                        document.getElementById('HighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('HighPressureD').style.display = "block";

                        document.getElementById('lowPressureS').style.display="none";
                        document.getElementById('lowPressureD').style.display="none";
  
                        document.getElementById('VeryHighPressureS').style.display="none";
                        document.getElementById('VeryHighPressureD').style.display="none";
  
                        document.getElementById('natPressureS').style.display="none";
                        document.getElementById('natPressureD').style.display="none";

                    }

                   
                    

                }

              
            

              else  if (DiastolicPressureInput >= 110 && DiastolicPressureInput <= 180
                    && SystolicPressureInput >= 180 && SystolicPressureInput <= 220) {
                    document.getElementById('pressure_result1').innerHTML = " مرتفع جدا " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message1').innerHTML = hasPressureVeryHighMale;

                     document.getElementById('hasPressure').style.display="block";
                     document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                     
                     document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasPressureProgressBarD').style.display="block";
                         document.getElementById('hasPressureProgressBarS').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                         document.getElementById('hasNoPressureProgressBarS').style.display="none";
                         document.getElementById('hasNoPressureProgressBarD').style.display="none";
 
                     }
                     
                  

                    var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                    var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";

                    var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                    var isEmptyPhighd = document.getElementById('HighPressureD').innerHTML==="";

                    var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                    var isEmptyPnatd = document.getElementById('natPressureD').innerHTML==="";
                    
                    if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPnats && isEmptyPnatd) {
                        document.getElementById('VeryHighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('VeryHighPressureS').style.display = "block";
                        document.getElementById('VeryHighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('VeryHighPressureD').style.display = "block";
                        
                    }
                    else {
                        document.getElementById('VeryHighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('VeryHighPressureS').style.display = "block";
                        document.getElementById('VeryHighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('VeryHighPressureD').style.display = "block";

                        document.getElementById('lowPressureS').style.display="none";
                        document.getElementById('lowPressureD').style.display="none";
  
                        document.getElementById('HighPressureS').style.display="none";
                        document.getElementById('HighPressureD').style.display="none";
  
                        document.getElementById('natPressureS').style.display="none";
                        document.getElementById('natPressureD').style.display="none";

                    }

                    
                }
             
            

                 else if (DiastolicPressureInput > 180) {

                    document.getElementById('hasPressure').style.display="block";
                    document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                   
                    
                    document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasNoPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasPressureProgressBarD').style.display="block";
                       document.getElementById('hasPressureProgressBarS').style.display="block";

                        document.getElementById('hasNoPressureProgressBarS').style.display="none";
                        document.getElementById('hasNoPressureProgressBarD').style.display="none";

                    }
                    
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أقل من 181 للمصابين ";
                     document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                     document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                     document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                         = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                     document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                     document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                         = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                     document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                     document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                 

                    
                }
                 else if (SystolicPressureInput > 220) {

                    document.getElementById('hasPressure').style.display="block";
                    document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                   
                    
                    document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasNoPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasPressureProgressBarD').style.display="block";
                       document.getElementById('hasPressureProgressBarS').style.display="block";

                        document.getElementById('hasNoPressureProgressBarS').style.display="none";
                        document.getElementById('hasNoPressureProgressBarD').style.display="none";

                    }
                    
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أقل من 221  للمصابين";
                     document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                  
                  document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                  document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                  document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                      = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                  document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                  document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                      = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                  document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                  document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
              
                }
                 else {
                     // alert('مشكلة');
                     

                 }

                //end pressure

                if (WaistlineInput < 69) {
                    document.getElementById('RequiredFieldSpanForWaistline').innerHTML
                        = "ادخال غير صحيح ، محيط الخصر للنساء يجب أن يكون فوق 69";
                    document.getElementById('RequiredFieldSpanForWaistline').style.display = "inline";
                    //WaistlinePressureMessagesForFemale();

                }
                else if (WaistlineInput >= 70 && WaistlineInput <= 80) {
                    document.getElementById('Waistline_result').innerHTML = "طبيعي" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForMaleNat;
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                    var isEmptyW1 = document.getElementById('WaistlineNatHigh').innerHTML==="";
                    var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";

                    if(isEmptyW1 &&  isEmptyW2) {
                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";
                    }
                    else {
                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";

                        document.getElementById('WaistlineNatHigh').style.display = "none";
                        document.getElementById('WaistlineVeryHigh').style.display = "none";

                    }

 
                    document.getElementById('Waistline_icon').className = "flaticon-good";
                   
                }

                else if (WaistlineInput >= 81 && WaistlineInput <= 87) {
                    document.getElementById('Waistline_result').innerHTML = "مرتفع   " + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleKindOfHigh;
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";

                    var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                    var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";

                    if(isEmptyW3 && isEmptyW2) {
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";
                    }
                    else {
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";

                        document.getElementById('WaistlineNat').style.display = "none";
                        document.getElementById('WaistlineVeryHigh').style.display = "none";
                    }


                    document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                }


                else if (WaistlineInput >= 88 && WaistlineInput <= 200) {
                    document.getElementById('Waistline_result').innerHTML = " مرتفع جدا" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleVeryHigh;
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                    if(isEmptyW3 && isEmptyW) {
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";
                     }
                     else {
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";

                        document.getElementById('WaistlineNat').style.display = "none";
                        document.getElementById('WaistlineNatHigh').style.display = "none";

                     }
                
                    document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";

                }
                else {
                 

                    WaistlinePressureMessagesForFemale();

                }
            }
        }

    }


}
function HasDiabetesAndNoPressureFemale() {
    var isFemale = document.getElementById('female').checked;
    var hasDiabetes = document.getElementById('yes_ihave').checked;
    var hasNoPressure = document.getElementById('no_ihavnotP').checked;
    if (isFemale == true) {
        if (hasDiabetes == true) {
            if (hasNoPressure == true) {

                // alert("male has dia and no pressure");
                var HbA1cInput1 = parseFloat(document.getElementById('HbA1c').value);
                var DiastolicPressureInput = parseFloat(document.getElementById('DiastolicPressure').value);
                var SystolicPressureInput = parseFloat(document.getElementById('SystolicPressure').value);
                var WaistlineInput = parseFloat(document.getElementById('Waistline').value);
                

                // start diabetes 

                if (HbA1cInput1 < 2.9) {
                    document.getElementById('RequiredFieldSpanHbA1c').innerHTML = "الإدخال غير صحيح ، يجب أن يكون فوق 2.9 للمصاب بالسكر";
                    document.getElementById('RequiredFieldSpanHbA1c').style.display = "block";
                    document.getElementById('HbA1c_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    document.getElementById('HbA1c_result1').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message1').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 2.9 ودون 15.1";
               
                        document.getElementById('hasDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasDiabetesHbA1c').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasDiabetesHbA1c').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
    
                        }
    
    
                         
                            
    
                        
                        
                }
                else if (HbA1cInput1 >= 3 && HbA1cInput1 <= 7) {
                    document.getElementById('HbA1c_result1').innerHTML = "طبيعي" + " " + HbA1cInput1;
                    document.getElementById('HbA1c_message1').innerHTML = hasPressureMaleNat;
               
                    document.getElementById('hasDiabetesHbA1c').style.display="block";
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');

                    var h1 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";

                    var hp1 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasDiabetesHbA1c').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";

                    }


                       var isEmptyH1  = document.getElementById('diaHigh1').innerHTML==="";
                       if(isEmptyH1) {
                        document.getElementById('dbiNat1').innerHTML = HbA1cInput1;
                        document.getElementById('dbiNat1').style.display = "block";
                       }
                       else {
                        document.getElementById('diaHigh1').style.display="none";
                        document.getElementById('dbiNat1').innerHTML = HbA1cInput1;
                        document.getElementById('dbiNat1').style.display = "block";
                       }
                        
    
                   
                    
                    
                   

                }

              
                else if (HbA1cInput1 >= 7.1 && HbA1cInput1 <= 15) {
                    document.getElementById('HbA1c_result1').innerHTML = "مرتفع " + " " + HbA1cInput1;
                    document.getElementById('HbA1c_message1').innerHTML = hasDiabetesHighAndVeryHighMale;

                    document.getElementById('hasDiabetesHbA1c').style.display="block";
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');

                    var h1 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";

                    var hp1 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasDiabetesHbA1c').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";

                    }


                   

                    var isEmptyH2  = document.getElementById('dbiNat1').innerHTML==="";

                    if(isEmptyH2) {
                        document.getElementById('diaHigh1').innerHTML = HbA1cInput1;
                        document.getElementById('diaHigh1').style.display = "block";
                    }
                    else {
                        document.getElementById('diaHigh1').innerHTML = HbA1cInput1;
                        document.getElementById('diaHigh1').style.display = "block";
                        document.getElementById('dbiNat1').style.display="none";
                    }

                    
                }
                else {
                    document.getElementById('RequiredFieldSpanHbA1c').innerHTML = " الإدخال غير صحيح ، يجب أن يكون فوق 2.9 للمصاب بالسكر ودون 15";
                    document.getElementById('RequiredFieldSpanHbA1c').style.display = "block";
                    document.getElementById('HbA1c_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    document.getElementById('HbA1c_result1').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message1').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 2.9 ودون 15.1";
                        document.getElementById('hasDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasDiabetesHbA1c').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasDiabetesHbA1c').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
    
                        }
    
    
                         
                      
    
                }

                //end diabetes 


                //pressure 

                if (DiastolicPressureInput < 20) {
                    //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق أو يساوي 20 للمصابين بالضغط ";
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";

                       
                    document.getElementById('hasNoPressure').style.display="block";
                    document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                    
                    
                    document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasNoPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasNoPressureProgressBarS').style.display="none";
                       document.getElementById('hasNoPressureProgressBarD').style.display="none";

                        document.getElementById('hasPressureProgressBarS').style.display="none";
                        document.getElementById('hasPressureProgressBarD').style.display="none";

                    }
                }

                if (SystolicPressureInput < 50) {
                    //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانقباضي فوق  أو يساوي 50 للمصابين بالضغط ";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";

                       
                    document.getElementById('hasNoPressure').style.display="block";
                    document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                    
                    
                    document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasNoPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasNoPressureProgressBarS').style.display="none";
                       document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        document.getElementById('hasPressureProgressBarS').style.display="none";
                        document.getElementById('hasPressureProgressBarD').style.display="none";

                    }
                }


                 if (DiastolicPressureInput >= 20 && DiastolicPressureInput <= 59
                    && SystolicPressureInput >= 50 && SystolicPressureInput <= 89) {
                    //alert("ضغط الدم لديك منخفض عليك مراجعة الطبيب");
                    document.getElementById('pressure_result2').innerHTML = "منخفض " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleLow;

                     
                     document.getElementById('hasNoPressure').style.display="block";
                     document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                     
                     
                     document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasNoPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasNoPressureProgressBarS').style.display="block";
                         document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         document.getElementById('hasPressureProgressBarS').style.display="none";
                         document.getElementById('hasPressureProgressBarD').style.display="none";
 
                     }
                     

                     var pressureD1 = document.getElementById('natPressureS2').innerHTML==="";
                     var pressureS1 = document.getElementById('natPressureD2').innerHTML==="";
                     var pressureD2 = document.getElementById('kindofPressureS2').innerHTML==="";
                     var pressureS2 = document.getElementById('kindofPressureD2').innerHTML==="";

                     var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                     var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                     var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                     var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                     var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                     var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";

                      if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                        document.getElementById('lowPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('lowPressureS2').style.display = "block";
                        document.getElementById('lowPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('lowPressureD2').style.display = "block";
                      }
                      else {
                        document.getElementById('lowPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('lowPressureS2').style.display = "block";
                        document.getElementById('lowPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('lowPressureD2').style.display = "block";

                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('kindofPressureS2').style.display = "none";
                        document.getElementById('kindofPressureD2').style.display = "none";
                        document.getElementById('VeryHighPressureS2').style.display = "none";
                        document.getElementById('VeryHighPressureD2').style.display = "none";
                        document.getElementById('emerPressureS2').style.display = "none";
                        document.getElementById('emerPressureD2').style.display = "none";

                        document.getElementById('HighPressureS2').style.display = "none";
                        document.getElementById('HighPressureD2').style.display = "none";
                      }

                }

                else if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 79
                    && SystolicPressureInput >= 90 && SystolicPressureInput <= 119) {
                    document.getElementById('pressure_result2').innerHTML = "طبيعي " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasPressureMaleNat;

   
                     document.getElementById('hasNoPressure').style.display="block";
                     document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                     
                     
                     document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasNoPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasNoPressureProgressBarS').style.display="block";
                         document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         document.getElementById('hasPressureProgressBarS').style.display="none";
                         document.getElementById('hasPressureProgressBarD').style.display="none";
 
                     }
                     var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                     var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                     var pressureD2 = document.getElementById('kindofPressureS2').innerHTML==="";
                     var pressureS2 = document.getElementById('kindofPressureD2').innerHTML==="";

                     var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                     var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                     var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                     var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                     var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                     var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";


                      if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                            document.getElementById('natPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('natPressureS2').style.display = "block";
                            document.getElementById('natPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('natPressureD2').style.display = "block";
    
    
                      }
                      else {
                        document.getElementById('natPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('natPressureS2').style.display = "block";
                        document.getElementById('natPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('natPressureD2').style.display = "block";


                        document.getElementById('lowPressureS2').style.display = "none";
                        document.getElementById('lowPressureD2').style.display = "none";
                        document.getElementById('kindofPressureS2').style.display = "none";
                        document.getElementById('kindofPressureD2').style.display = "none";
                        document.getElementById('VeryHighPressureS2').style.display = "none";
                        document.getElementById('VeryHighPressureD2').style.display = "none";
                        document.getElementById('emerPressureS2').style.display = "none";
                        document.getElementById('emerPressureD2').style.display = "none";
                        document.getElementById('HighPressureS2').style.display = "none";
                        document.getElementById('HighPressureD2').style.display = "none";
                      }
                       
                       
                    
                }

                else if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 79
                    && SystolicPressureInput >= 120 && SystolicPressureInput <= 129) {
                    document.getElementById('pressure_result2').innerHTML = "مرتفع قليلا   " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleKindOf;
                        
                     document.getElementById('hasNoPressure').style.display="block";
                     document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                     
                     
                     document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasNoPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasNoPressureProgressBarS').style.display="block";
                         document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         document.getElementById('hasPressureProgressBarS').style.display="none";
                         document.getElementById('hasPressureProgressBarD').style.display="none";
 
                     }

                     var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                     var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                     var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                     var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";

                     var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                     var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                     var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                     var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                     var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                     var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
                     


                     
                     if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                            document.getElementById('kindofPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('kindofPressureS2').style.display = "block";
                            document.getElementById('kindofPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('kindofPressureD2').style.display = "block";
                      }
                      else {
                        document.getElementById('kindofPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('kindofPressureS2').style.display = "block";
                        document.getElementById('kindofPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('kindofPressureD2').style.display = "block";


                        document.getElementById('lowPressureS2').style.display = "none";
                        document.getElementById('lowPressureD2').style.display = "none";
                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('natPressureD2').style.display = "none";
                        document.getElementById('VeryHighPressureS2').style.display = "none";
                        document.getElementById('VeryHighPressureD2').style.display = "none";
                        document.getElementById('emerPressureS2').style.display = "none";
                        document.getElementById('emerPressureD2').style.display = "none";
                        document.getElementById('HighPressureS2').style.display = "none";
                        document.getElementById('HighPressureD2').style.display = "none";
                      }
                       



    
                  
                    document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                }


                else if (DiastolicPressureInput >= 80 && DiastolicPressureInput <= 89
                    && SystolicPressureInput >= 130 && SystolicPressureInput <= 139) {
                    document.getElementById('pressure_result2').innerHTML = " مرتفع  " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleHigh;
                    document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
   
                    document.getElementById('hasNoPressure').style.display="block";
                    document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                    
                    
                    document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasNoPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasNoPressureProgressBarS').style.display="block";
                       document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        document.getElementById('hasPressureProgressBarS').style.display="none";
                        document.getElementById('hasPressureProgressBarD').style.display="none";

                    }

                    var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                    var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                    var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                    var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";

                    var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                    var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                    var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                    var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                    var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                    var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";

                    if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                            document.getElementById('HighPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('HighPressureS2').style.display = "block";
                            document.getElementById('HighPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('HighPressureD2').style.display = "block";
                      }
                      else {
                        document.getElementById('HighPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('HighPressureS2').style.display = "block";
                        document.getElementById('HighPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('HighPressureD2').style.display = "block";


                        document.getElementById('lowPressureS2').style.display = "none";
                        document.getElementById('lowPressureD2').style.display = "none";
                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('natPressureD2').style.display = "none";
                        document.getElementById('VeryHighPressureS2').style.display = "none";
                        document.getElementById('VeryHighPressureD2').style.display = "none";
                        document.getElementById('emerPressureS2').style.display = "none";
                        document.getElementById('emerPressureD2').style.display = "none";
                        document.getElementById('kindofPressureD2').style.display = "none";
                        document.getElementById('kindofPressureS2').style.display = "none";
                      }
                       

                }


                else if (DiastolicPressureInput >= 90 && DiastolicPressureInput <= 119
                    && SystolicPressureInput >= 140 && SystolicPressureInput <= 179) {
                    document.getElementById('pressure_result2').innerHTML = " مرتفع جدا  " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasNoPressureVeryHighMale;
                       
                       document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";


   
                       document.getElementById('hasNoPressure').style.display="block";
                       document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                       
                       
                       document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                       document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     
                       var h1 = document.getElementById('hasPressure').style.display==="none";
                      
                       var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                       var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
   
                       if(h1) {
   
                           document.getElementById('hasNoPressure').style.display="block";
   
                       }
                       else {
                          
                           document.getElementById('hasNoPressure').style.display="block";
                           document.getElementById('hasPressure').style.display="none";
                          
   
   
                       }
   
                       if (hp1 && hp2) {
                           document.getElementById('hasNoPressureProgressBarS').style.display="block";
                           document.getElementById('hasNoPressureProgressBarD').style.display="block";
  
                           
                       }
                       else {
                          document.getElementById('hasNoPressureProgressBarS').style.display="block";
                          document.getElementById('hasNoPressureProgressBarD').style.display="block";
  
                           document.getElementById('hasPressureProgressBarS').style.display="none";
                           document.getElementById('hasPressureProgressBarD').style.display="none";
   
                       }

                       var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                       var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                       var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                       var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";
   
                       var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                       var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                       var pressureD4 = document.getElementById('HighPressureS2').innerHTML==="";
                       var pressureS4 = document.getElementById('HighPressureS2').innerHTML==="";
                       var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                       var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
   

                       if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                                document.getElementById('VeryHighPressureS2').innerHTML = SystolicPressureInput;
                                document.getElementById('VeryHighPressureS2').style.display = "block";
                                document.getElementById('VeryHighPressureD2').innerHTML = DiastolicPressureInput;
                                document.getElementById('VeryHighPressureD2').style.display = "block";
                        }
                      else {
                        document.getElementById('VeryHighPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('VeryHighPressureS2').style.display = "block";
                        document.getElementById('VeryHighPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('VeryHighPressureD2').style.display = "block";

                        document.getElementById('lowPressureS2').style.display = "none";
                        document.getElementById('lowPressureD2').style.display = "none";
                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('natPressureD2').style.display = "none";
                        document.getElementById('HighPressureS2').style.display = "none";
                        document.getElementById('HighPressureD2').style.display = "none";
                        document.getElementById('emerPressureS2').style.display = "none";
                        document.getElementById('emerPressureD2').style.display = "none";
                        document.getElementById('kindofPressureD2').style.display = "none";
                        document.getElementById('kindofPressureS2').style.display = "none";
                      }
                      
                    

                }


                else if (DiastolicPressureInput >= 120 && DiastolicPressureInput <= 180
                    && SystolicPressureInput >= 180 && SystolicPressureInput <= 220) {
                    document.getElementById('pressure_result2').innerHTML = " ارتفاع طارئ  " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasNoPressureEmergencyHighMale;

                        
                     document.getElementById('hasNoPressure').style.display="block";
                     document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                     
                     
                     document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasNoPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasNoPressureProgressBarS').style.display="block";
                         document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         document.getElementById('hasPressureProgressBarS').style.display="none";
                         document.getElementById('hasPressureProgressBarD').style.display="none";
 
                     }

                    var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                    var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                    var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                    var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";

                    var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                    var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                    var pressureD4 = document.getElementById('HighPressureS2').innerHTML==="";
                    var pressureS4 = document.getElementById('HighPressureS2').innerHTML==="";
                    var pressureD5 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                    var pressureS5 = document.getElementById('VeryHighPressureD2').innerHTML==="";



                      if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                            document.getElementById('emerPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('emerPressureS2').style.display = "block";
                            document.getElementById('emerPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('emerPressureD2').style.display = "block";
                        }
                      else {
                        document.getElementById('emerPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('emerPressureS2').style.display = "block";
                        document.getElementById('emerPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('emerPressureD2').style.display = "block";

                        document.getElementById('lowPressureS2').style.display = "none";
                        document.getElementById('lowPressureD2').style.display = "none";
                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('natPressureD2').style.display = "none";
                        document.getElementById('HighPressureS2').style.display = "none";
                        document.getElementById('HighPressureD2').style.display = "none";
                        document.getElementById('VeryHighPressureS2').style.display = "none";
                        document.getElementById('VeryHighPressureD2').style.display = "none";
                        document.getElementById('kindofPressureD2').style.display = "none";
                        document.getElementById('kindofPressureS2').style.display = "none";
                      }
                      


                       
                }
                else {
                    if (SystolicPressureInput > 220) {
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أقل من 221  للمصابين";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('pressure_result2').innerHTML = "مشكلة في الأرقام المدخلة "
    
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                        document.getElementById('pressure_message2').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                        document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                           
                        document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasNoPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasNoPressureProgressBarS').style.display="none";
                           document.getElementById('hasNoPressureProgressBarD').style.display="none";
    
                            document.getElementById('hasPressureProgressBarS').style.display="none";
                            document.getElementById('hasPressureProgressBarD').style.display="none";
    
                        }
                    }

                         
                 if (DiastolicPressureInput > 180) {
                    document.getElementById('pressure_result2').innerHTML = "مشكلة في الأرقام المدخلة "

                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                    document.getElementById('pressure_message2').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                    document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                       
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أقل من 181 للمصابين ";
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";

                    document.getElementById('hasNoPressure').style.display="block";
                    document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                    
                    
                    document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasNoPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasNoPressureProgressBarS').style.display="none";
                       document.getElementById('hasNoPressureProgressBarD').style.display="none";

                        document.getElementById('hasPressureProgressBarS').style.display="none";
                        document.getElementById('hasPressureProgressBarD').style.display="none";

                    }
                }



                }

           


                //end of pressure

                if (DiastolicPressureInput > 180) {
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أقل من 181 للمصابين ";
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";


                }
                if (SystolicPressureInput > 220) {
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أقل من 221  للمصابين";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                }

                if (WaistlineInput < 69) {
                    document.getElementById('RequiredFieldSpanForWaistline').innerHTML
                        = "ادخال غير صحيح ، محيط الخصر للنساء يجب أن يكون فوق 79";
                    document.getElementById('RequiredFieldSpanForWaistline').style.display = "inline";
                }
                else if (WaistlineInput >= 70 && WaistlineInput <= 80) {
                    document.getElementById('Waistline_result').innerHTML = "طبيعي" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleNat;
                    var isEmptyW1 = document.getElementById('WaistlineNatHigh').innerHTML==="";
                    var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                    if(isEmptyW1 &&  isEmptyW2) {
                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";
                    }
                    else {
                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";

                        document.getElementById('WaistlineNatHigh').style.display = "none";
                        document.getElementById('WaistlineVeryHigh').style.display = "none";

                    }
    


                    document.getElementById('Waistline_icon').className = "flaticon-good";
                }

                else if (WaistlineInput >= 81 && WaistlineInput <= 87) {
                    document.getElementById('Waistline_result').innerHTML = "مرتفع" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleHighNot;
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";

                    var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                    var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";

                    if(isEmptyW3 && isEmptyW2) {
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";
                    }
                    else {
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";

                        document.getElementById('WaistlineNat').style.display = "none";
                        document.getElementById('WaistlineVeryHigh').style.display = "none";
                    }


                    document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                }


                else if (WaistlineInput >= 88 && WaistlineInput <= 200) {
                    document.getElementById('Waistline_result').innerHTML = " مرتفع جدا" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleVeryHighNot;
                    var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                    var isEmptyW = document.getElementById('WaistlineNatHigh').innerHTML==="";
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                     if(isEmptyW3 && isEmptyW) {
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";
                     }
                     else {
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";

                        document.getElementById('WaistlineNat').style.display = "none";
                        document.getElementById('WaistlineNatHigh').style.display = "none";

                     }



                }
                else {
                    WaistlinePressureMessagesForFemale();
                }
            }
        }
    }

}
function HasNoDiabetesFastChoiceAndHasPressureFemale() {

    var isFemale = document.getElementById('female').checked;
    var hasNoDiabtes = document.getElementById('no_ihavenot').checked;
    var isFast = document.getElementById('fast').checked;
    var hasPressure = document.getElementById('yes_ihaveP').checked;

    if (isFemale == true) {
        if (hasNoDiabtes == true) {
            if (hasPressure == true) {


                if (isFast == true) {
                    //alert('male do not have diabetes and fast');

                    var HbA1cForFastInput = parseFloat(document.getElementById('HbA1cForFast').value);
                    var DiastolicPressureInput = parseFloat(document.getElementById('DiastolicPressure').value);
                    var SystolicPressureInput = parseFloat(document.getElementById('SystolicPressure').value);
                    var WaistlineInput = parseFloat(document.getElementById('Waistline').value);
                   //start diabetes
                     
                    if (HbA1cForFastInput < 50) {
                        document.getElementById('RequiredFieldSpanHbA1cForFast').innerHTML =
                        " تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                    document.getElementById('RequiredFieldSpanHbA1cForFast').style.display = "inline";
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute("hidden", false);

                    document.getElementById('hasDiabetesHbA1c').setAttribute("hidden", true);
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute("hidden", true);
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute("hidden", true);

                    document.getElementById('HbA1c_result2').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message2').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";


                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }
    

                    }

                    else if (HbA1cForFastInput >= 50 && HbA1cForFastInput <= 70) {
                    document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');

                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";

                    }




                        
                        
                        document.getElementById('HbA1c_result2').innerHTML = "منخفض" + " " + HbA1cForFastInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message2').innerHTML = hasNoDiabetesMale;

                       //alert ('1- ' + hasNoDiabetesMale);
                       //alert(document.getElementById('HbA1c_message').innerHTML);

                        var dia1 = document.getElementById('dbiNat4').innerHTML==="";
                        var dia2 = document.getElementById('beforeDia4').innerHTML==="";
                        var dia3 = document.getElementById('gotDia4').innerHTML==="";

                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('dbiLow4').innerHTML=  HbA1cForFastInput;
                            document.getElementById('dbiLow4').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('dbiLow4').innerHTML=  HbA1cForFastInput;
                            document.getElementById('dbiLow4').style.display="inline";

                            document.getElementById('dbiNat4').style.display="none";
                            document.getElementById('beforeDia4').style.display="none";
                            document.getElementById('gotDia4').style.display="none";


                        }
                       


                    }

                    else if (HbA1cForFastInput >= 71 && HbA1cForFastInput <= 99) {
                        
                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }

                        document.getElementById('HbA1c_result2').innerHTML = "طبيعي" + " " + HbA1cForFastInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message2').innerHTML = hasNosDiabetesNatMale;
                    

                        var dia1 = document.getElementById('dbiLow4').innerHTML==="";
                        var dia2 = document.getElementById('beforeDia4').innerHTML==="";
                        var dia3 = document.getElementById('gotDia4').innerHTML==="";

                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('dbiNat4').innerHTML=HbA1cForFastInput;
                            document.getElementById('dbiNat4').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('dbiNat4').innerHTML=HbA1cForFastInput;
                            document.getElementById('dbiNat4').style.display="inline";

                            document.getElementById('dbiLow4').style.display="none";
                            document.getElementById('beforeDia4').style.display="none";
                            document.getElementById('gotDia4').style.display="none";


                        }

                      
                    }
                    else if (HbA1cForFastInput >= 100 && HbA1cForFastInput <= 125) {
                  
                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }

                        document.getElementById('HbA1c_result2').innerHTML = "ماقبل الإصابة" + " " + HbA1cForFastInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message2').innerHTML = hasNosDiabetesBeforeMale;

                      

                        document.getElementById('beforeDia4').innerHTML=HbA1cForFastInput;
                        document.getElementById('beforeDia4').style.display="inline";

                        var dia1 = document.getElementById('dbiLow4').innerHTML==="";
                        var dia2 = document.getElementById('dbiNat4').innerHTML==="";
                        var dia3 = document.getElementById('gotDia4').innerHTML==="";

                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('beforeDia2').innerHTML=HbA1cForFastInput;
                            document.getElementById('beforeDia2').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('beforeDia4').innerHTML=HbA1cForFastInput;
                            document.getElementById('beforeDia4').style.display="inline";

                            document.getElementById('dbiLow4').style.display="none";
                            document.getElementById('dbiNat4').style.display="none";
                            document.getElementById('gotDia4').style.display="none";


                        }

                    }

                    else if (HbA1cForFastInput >= 126 && HbA1cForFastInput <= 600) {
                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }

                        document.getElementById('HbA1c_result2').innerHTML = "مصاب" + " " + HbA1cForFastInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message2').innerHTML = hasNosDiabetesGotDiabetesMale;



                        document.getElementById('gotDia4').innerHTML=HbA1cForFastInput;
                        document.getElementById('gotDia4').style.display="inline";


                        var dia1 = document.getElementById('dbiLow4').innerHTML==="";
                        var dia2 = document.getElementById('dbiNat4').innerHTML==="";
                        var dia3 = document.getElementById('beforeDia4').innerHTML==="";

                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('gotDia4').innerHTML=HbA1cForFastInput;
                            document.getElementById('gotDia4').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('gotDia4').innerHTML=HbA1cForFastInput;
                            document.getElementById('gotDia4').style.display="inline";

                            document.getElementById('dbiLow4').style.display="none";
                            document.getElementById('dbiNat4').style.display="none";
                            document.getElementById('beforeDia4').style.display="none";


                        }
                    }

                  
                    else {
                        document.getElementById('RequiredFieldSpanHbA1cForFast').innerHTML =
                        " تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                    document.getElementById('RequiredFieldSpanHbA1cForFast').style.display = "inline";
                    document.getElementById('hasDiabetesHbA1c').setAttribute("hidden", true);
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute("hidden", true);
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute("hidden", true);
                
                    document.getElementById('HbA1c_result2').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message2').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute("hidden", false);


                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }

                       
    
                    }

                    // diabetes end for fast
                    
                    
                    
                    
                    //pressure 
                    
                    if (DiastolicPressureInput < 20) {
                        //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                                document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                                = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أكبر من 20  للمصابين";
                            document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                        
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "
    
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                  document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
    
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                       
                        
                        document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasNoPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasPressure').style.display="block";
                            document.getElementById('hasNoPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasPressureProgressBarD').style.display="none";
                            document.getElementById('hasPressureProgressBarS').style.display="none";
    
                            
                        }
                        else {
                           document.getElementById('hasPressureProgressBarD').style.display="none";
                           document.getElementById('hasPressureProgressBarS').style.display="none";
    
                            document.getElementById('hasNoPressureProgressBarS').style.display="none";
                            document.getElementById('hasNoPressureProgressBarD').style.display="none";
    
                        }
                    }
                  
                    if (SystolicPressureInput < 50) {
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أكبر من 50  للمصابين";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                            
                            document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                            document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "
    
                            document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                                = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                            document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                            document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                                = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                            document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                    document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
    
                            document.getElementById('hasPressure').style.display="block";
                            document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                        
                            
                            document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                            document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        
                            var h1 = document.getElementById('hasNoPressure').style.display==="none";
                        
                            var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                            var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
    
                            if(h1) {
    
                                document.getElementById('hasPressure').style.display="block";
    
                            }
                            else {
                            
                                document.getElementById('hasPressure').style.display="block";
                                document.getElementById('hasNoPressure').style.display="none";
                            
    
    
                            }
    
                            if (hp1 && hp2) {
                                document.getElementById('hasPressureProgressBarD').style.display="none";
                                document.getElementById('hasPressureProgressBarS').style.display="none";
    
                                
                            }
                            else {
                            document.getElementById('hasPressureProgressBarD').style.display="none";
                            document.getElementById('hasPressureProgressBarS').style.display="none";
    
                                document.getElementById('hasNoPressureProgressBarS').style.display="none";
                                document.getElementById('hasNoPressureProgressBarD').style.display="none";
    
                            }
                    }
                  
    
                     if (DiastolicPressureInput >= 20 && DiastolicPressureInput <= 59
                        && SystolicPressureInput >= 50 && SystolicPressureInput <= 89) {
                        //alert("ضغط الدم لديك منخفض عليك مراجعة الطبيب");
                        document.getElementById('pressure_result1').innerHTML = "منخفض " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message1').innerHTML = hasPressureLowMale;
    
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                        
                         
                         document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasNoPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasPressure').style.display="block";
                             document.getElementById('hasNoPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasPressureProgressBarD').style.display="block";
                             document.getElementById('hasPressureProgressBarS').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasPressureProgressBarD').style.display="block";
                            document.getElementById('hasPressureProgressBarS').style.display="block";
    
                             document.getElementById('hasNoPressureProgressBarS').style.display="none";
                             document.getElementById('hasNoPressureProgressBarD').style.display="none";
     
                         }
                         
    
                         var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                         var isEmptyPnatd = document.getElementById('natPressureS').innerHTML==="";
    
                         var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                         var isEmptyPhighd = document.getElementById('HighPressureD').innerHTML==="";
    
                         var isEmptyPveryhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                         var isEmptyPveryhighd = document.getElementById('VeryHighPressureD').innerHTML==="";
    
                         if(isEmptyPnats && isEmptyPnatd && isEmptyPhighs && isEmptyPhighd && isEmptyPveryhighs && isEmptyPveryhighd) {
                            document.getElementById('lowPressureS').innerHTML = SystolicPressureInput;
                            document.getElementById('lowPressureS').style.display = "block";
                            document.getElementById('lowPressureD').innerHTML = DiastolicPressureInput;
                            document.getElementById('lowPressureD').style.display = "block";
                         }
                         else {
                            document.getElementById('lowPressureS').innerHTML = SystolicPressureInput;
                            document.getElementById('lowPressureS').style.display = "block";
                            document.getElementById('lowPressureD').innerHTML = DiastolicPressureInput;
                            document.getElementById('lowPressureD').style.display = "block";
    
                             document.getElementById('natPressureS').style.display="none";
                             document.getElementById('natPressureS').style.display="none";
    
                             document.getElementById('natPressureD').style.display="none";
                             document.getElementById('natPressureD').style.display="none";
       
                             document.getElementById('HighPressureS').style.display="none";
                             document.getElementById('HighPressureD').style.display="none";
       
                             document.getElementById('VeryHighPressureS').style.display="none";
                             document.getElementById('VeryHighPressureD').style.display="none";
       
                         }
    
                         
                        document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
    
                    }
                   
    
    
    
    
                  else  if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 89
                        && SystolicPressureInput >= 90 && SystolicPressureInput <= 139) {
                        document.getElementById('pressure_result').innerHTML = "طبيعي " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message').innerHTML = hasPressureNatMale;
                          
    
                        document.getElementById('pressure_icon').className = "flaticon-good";
    
    
                         var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                         var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";
    
                         var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                         var isEmptyPhighd = document.getElementById('HighPressureS').innerHTML==="";
    
                         var isEmptyPveryhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                         var isEmptyPveryhighd = document.getElementById('VeryHighPressureD').innerHTML==="";
    
                         if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPveryhighs && isEmptyPveryhighd) {
    
                           
                            document.getElementById('natPressureS').innerHTML = SystolicPressureInput;
                            document.getElementById('natPressureS').style.display = "block";
                            document.getElementById('natPressureD').innerHTML = DiastolicPressureInput;
                            document.getElementById('natPressureD').style.display = "block";
                            }
                            else {
                            document.getElementById('natPressureS').innerHTML = SystolicPressureInput;
                            document.getElementById('natPressureS').style.display = "block";
                            document.getElementById('natPressureD').innerHTML = DiastolicPressureInput;
                            document.getElementById('natPressureD').style.display = "block";
    
                            document.getElementById('lowPressureS').style.display="none";
                            document.getElementById('lowPressureD').style.display="none";
      
                            document.getElementById('HighPressureS').style.display="none";
                            document.getElementById('HighPressureD').style.display="none";
      
                            document.getElementById('VeryHighPressureS').style.display="none";
                            document.getElementById('VeryHighPressureD').style.display="none";
    
                            }
    
                    }
    
                    
    
     
                  
    
    
                   else  if (DiastolicPressureInput >= 90 && DiastolicPressureInput <= 109
                        && SystolicPressureInput >= 140 && SystolicPressureInput <= 179) {
                        document.getElementById('pressure_result1').innerHTML = "مرتفع " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message1').innerHTML = hasPressureKindOfMale;
                            
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                        
                         
                         document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasNoPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasPressure').style.display="block";
                             document.getElementById('hasNoPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasPressureProgressBarD').style.display="block";
                             document.getElementById('hasPressureProgressBarS').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasPressureProgressBarD').style.display="block";
                            document.getElementById('hasPressureProgressBarS').style.display="block";
    
                             document.getElementById('hasNoPressureProgressBarS').style.display="none";
                             document.getElementById('hasNoPressureProgressBarD').style.display="none";
     
                         }
                         
    
                        var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                        var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";
    
                        var isEmptyPhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                        var isEmptyPhighd = document.getElementById('VeryHighPressureD').innerHTML==="";
    
                        var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                        var isEmptyPnatd = document.getElementById('natPressureD').innerHTML==="";
    
                        if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPnats && isEmptyPnatd) {
                            document.getElementById('HighPressureS').innerHTML = SystolicPressureInput;
                            document.getElementById('HighPressureS').style.display = "block";
                            document.getElementById('HighPressureD').innerHTML = DiastolicPressureInput;
                            document.getElementById('HighPressureD').style.display = "block";
                        }
                        else {
                            document.getElementById('HighPressureS').innerHTML = SystolicPressureInput;
                            document.getElementById('HighPressureS').style.display = "block";
                            document.getElementById('HighPressureD').innerHTML = DiastolicPressureInput;
                            document.getElementById('HighPressureD').style.display = "block";
    
                            document.getElementById('lowPressureS').style.display="none";
                            document.getElementById('lowPressureD').style.display="none";
      
                            document.getElementById('VeryHighPressureS').style.display="none";
                            document.getElementById('VeryHighPressureD').style.display="none";
      
                            document.getElementById('natPressureS').style.display="none";
                            document.getElementById('natPressureD').style.display="none";
    
                        }
    
                       
                        
    
                    }
    
                  
                
    
                  else  if (DiastolicPressureInput >= 110 && DiastolicPressureInput <= 180
                        && SystolicPressureInput >= 180 && SystolicPressureInput <= 220) {
                        document.getElementById('pressure_result1').innerHTML = " مرتفع جدا " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message1').innerHTML = hasPressureVeryHighMale;
    
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                        
                         
                         document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasNoPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasPressure').style.display="block";
                             document.getElementById('hasNoPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasPressureProgressBarD').style.display="block";
                             document.getElementById('hasPressureProgressBarS').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasPressureProgressBarD').style.display="block";
                            document.getElementById('hasPressureProgressBarS').style.display="block";
    
                             document.getElementById('hasNoPressureProgressBarS').style.display="none";
                             document.getElementById('hasNoPressureProgressBarD').style.display="none";
     
                         }
                         
                      
    
                        var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                        var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";
    
                        var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                        var isEmptyPhighd = document.getElementById('HighPressureD').innerHTML==="";
    
                        var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                        var isEmptyPnatd = document.getElementById('natPressureD').innerHTML==="";
                        
                        if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPnats && isEmptyPnatd) {
                            document.getElementById('VeryHighPressureS').innerHTML = SystolicPressureInput;
                            document.getElementById('VeryHighPressureS').style.display = "block";
                            document.getElementById('VeryHighPressureD').innerHTML = DiastolicPressureInput;
                            document.getElementById('VeryHighPressureD').style.display = "block";
                            
                        }
                        else {
                            document.getElementById('VeryHighPressureS').innerHTML = SystolicPressureInput;
                            document.getElementById('VeryHighPressureS').style.display = "block";
                            document.getElementById('VeryHighPressureD').innerHTML = DiastolicPressureInput;
                            document.getElementById('VeryHighPressureD').style.display = "block";
    
                            document.getElementById('lowPressureS').style.display="none";
                            document.getElementById('lowPressureD').style.display="none";
      
                            document.getElementById('HighPressureS').style.display="none";
                            document.getElementById('HighPressureD').style.display="none";
      
                            document.getElementById('natPressureS').style.display="none";
                            document.getElementById('natPressureD').style.display="none";
    
                        }
    
                        
                    }
                 
                
    
                     else if (DiastolicPressureInput > 180) {
    
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                       
                        
                        document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasNoPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasPressure').style.display="block";
                            document.getElementById('hasNoPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasPressureProgressBarD').style.display="block";
                            document.getElementById('hasPressureProgressBarS').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasPressureProgressBarD').style.display="block";
                           document.getElementById('hasPressureProgressBarS').style.display="block";
    
                            document.getElementById('hasNoPressureProgressBarS').style.display="none";
                            document.getElementById('hasNoPressureProgressBarD').style.display="none";
    
                        }
                        
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أقل من 181 للمصابين ";
                         document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                         document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "
    
                         document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                             = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                         document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                         document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                             = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                         document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                         document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                     
    
                        
                    }
                     else if (SystolicPressureInput > 220) {
    
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                       
                        
                        document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasNoPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasPressure').style.display="block";
                            document.getElementById('hasNoPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasPressureProgressBarD').style.display="block";
                            document.getElementById('hasPressureProgressBarS').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasPressureProgressBarD').style.display="block";
                           document.getElementById('hasPressureProgressBarS').style.display="block";
    
                            document.getElementById('hasNoPressureProgressBarS').style.display="none";
                            document.getElementById('hasNoPressureProgressBarD').style.display="none";
    
                        }
                        
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أقل من 221  للمصابين";
                         document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                      
                      document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                      document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "
    
                      document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                          = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                      document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                      document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                          = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                      document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                      document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                  
                    }
                     else {
                         // alert('مشكلة');
                         
    
                     }

                    
                 //end pressure    
                    if (WaistlineInput < 69) {
                        document.getElementById('RequiredFieldSpanForWaistline').innerHTML
                            = "ادخال غير صحيح ، محيط الخصر للنساء يجب أن يكون فوق 79";
                        document.getElementById('RequiredFieldSpanForWaistline').style.display = "inline";
                    }
                    else if (WaistlineInput >= 70 && WaistlineInput <= 80) {
                        document.getElementById('Waistline_result').innerHTML = "طبيعي" + " " + WaistlineInput;
                        document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleNat;
                        var isEmptyW1 = document.getElementById('WaistlineNatHigh').innerHTML==="";
                        var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";
                        document.getElementById('WaistlineMessure').style.display="block";
                        document.getElementById('WaistlineHideAndShow').style.display="block";
                        if(isEmptyW1 &&  isEmptyW2) {
                            document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineNat').style.display = "block";
                        }
                        else {
                            document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineNat').style.display = "block";
    
                            document.getElementById('WaistlineNatHigh').style.display = "none";
                            document.getElementById('WaistlineVeryHigh').style.display = "none";
    
                        }
        
    
    
                        document.getElementById('Waistline_icon').className = "flaticon-good";
                    }
    
                    else if (WaistlineInput >= 81 && WaistlineInput <= 87) {
                        document.getElementById('Waistline_result').innerHTML = "مرتفع" + " " + WaistlineInput;
                        document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleHighNot;
                        document.getElementById('WaistlineMessure').style.display="block";
                        document.getElementById('WaistlineHideAndShow').style.display="block";
    
                        var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                        var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";
    
                        if(isEmptyW3 && isEmptyW2) {
                            document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineNatHigh').style.display = "block";
                        }
                        else {
                            document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineNatHigh').style.display = "block";
    
                            document.getElementById('WaistlineNat').style.display = "none";
                            document.getElementById('WaistlineVeryHigh').style.display = "none";
                        }
    
    
                        document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    }
    
    
                    else if (WaistlineInput >= 88 && WaistlineInput <= 200) {
                        document.getElementById('Waistline_result').innerHTML = " مرتفع جدا" + " " + WaistlineInput;
                        document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleVeryHighNot;
                        var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                        var isEmptyW = document.getElementById('WaistlineNatHigh').innerHTML==="";
                        document.getElementById('WaistlineMessure').style.display="block";
                        document.getElementById('WaistlineHideAndShow').style.display="block";
                         if(isEmptyW3 && isEmptyW) {
                            document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineVeryHigh').style.display = "block";
                         }
                         else {
                            document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineVeryHigh').style.display = "block";
    
                            document.getElementById('WaistlineNat').style.display = "none";
                            document.getElementById('WaistlineNatHigh').style.display = "none";
    
                         }
    
    
    
                    }
                    else {
                        WaistlinePressureMessagesForFemale();
                    }
                    

                }

            }
        }
    }



}
function HasNoDiabetesTwoHoursChoiceAndHasPressureFemale() {
    var isFemale = document.getElementById('female').checked;
    var hasNoDiabtes = document.getElementById('no_ihavenot').checked;
    var afterTwoHour = document.getElementById('afterTwoHours').checked;
    var hasPressure = document.getElementById('yes_ihaveP').checked;

    if (isFemale == true) {
        if (hasNoDiabtes == true) {
            if (hasPressure == true) {

            
            if (afterTwoHour == true) {
                //alert('male do not have diabetes and fast');

                var HbA1cAfterTwoHoursInput = parseFloat(document.getElementById('HbA1cAfterTwoHours').value);
                var DiastolicPressureInput = parseFloat(document.getElementById('DiastolicPressure').value);
                var SystolicPressureInput = parseFloat(document.getElementById('SystolicPressure').value);
                var WaistlineInput = parseFloat(document.getElementById('Waistline').value);


                //start  of diabetes two hour choice
                if (HbA1cAfterTwoHoursInput < 50) {
                    document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').innerHTML =
                    " تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').style.display = "inline";

                "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').setAttribute("hidden", false);

                    document.getElementById('HbA1c_result4').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message4').innerHTML =
                    "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                    document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute("hidden", true);
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute("hidden", true);
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute("hidden", true);
                    
                    document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";

                    }


                }

                else if (HbA1cAfterTwoHoursInput >= 50 && HbA1cAfterTwoHoursInput <= 70) {
                    document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";

                    }

                        
                    document.getElementById('HbA1c_result4').innerHTML = "منخفض" + " " + HbA1cAfterTwoHoursInput + " ملجم/دسل ";
                    document.getElementById('HbA1c_message4').innerHTML = hasNoDiabetesMale;

                   //alert ('1- ' + hasNoDiabetesMale);
                   //alert(document.getElementById('HbA1c_message').innerHTML);

                    var dia1 = document.getElementById('dbiNat2').innerHTML==="";
                    var dia2 = document.getElementById('beforeDia2').innerHTML==="";
                    var dia3 = document.getElementById('gotDia2').innerHTML==="";

                    if(dia1 && dia2 && dia3) {
                      

                        document.getElementById('dbiLow2').innerHTML=  HbA1cAfterTwoHoursInput;
                        document.getElementById('dbiLow2').style.display="inline";
                       
                    }
                    else {
                        document.getElementById('dbiLow2').innerHTML=  HbA1cAfterTwoHoursInput;
                        document.getElementById('dbiLow2').style.display="inline";

                        document.getElementById('dbiNat2').style.display="none";
                        document.getElementById('beforeDia2').style.display="none";
                        document.getElementById('gotDia2').style.display="none";


                    }
                   


                }

                else if (HbA1cAfterTwoHoursInput >= 71 && HbA1cAfterTwoHoursInput <= 139) {
                    document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";

                    }

                    document.getElementById('HbA1c_result4').innerHTML = "طبيعي" + " " + HbA1cAfterTwoHoursInput + " ملجم/دسل ";
                    document.getElementById('HbA1c_message4').innerHTML = hasNosDiabetesNatMale;
             
                    var dia1 = document.getElementById('dbiLow2').innerHTML==="";
                    var dia2 = document.getElementById('beforeDia2').innerHTML==="";
                    var dia3 = document.getElementById('gotDia2').innerHTML==="";

                    if(dia1 && dia2 && dia3) {
                      

                        document.getElementById('dbiNat2').innerHTML=HbA1cAfterTwoHoursInput;
                        document.getElementById('dbiNat2').style.display="inline";
                       
                    }
                    else {
                        document.getElementById('dbiNat2').innerHTML=HbA1cAfterTwoHoursInput;
                        document.getElementById('dbiNat2').style.display="inline";

                        document.getElementById('dbiLow2').style.display="none";
                        document.getElementById('beforeDia2').style.display="none";
                        document.getElementById('gotDia2').style.display="none";


                    }

                  
                }
                else if (HbA1cAfterTwoHoursInput >= 140 && HbA1cAfterTwoHoursInput <= 199) {
                    document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";

                    }

                    document.getElementById('HbA1c_result4').innerHTML = "ماقبل الإصابة" + " " + HbA1cAfterTwoHoursInput + " ملجم/دسل ";
                    document.getElementById('HbA1c_message4').innerHTML = hasNosDiabetesBeforeMale;



          
                    var dia1 = document.getElementById('dbiLow2').innerHTML==="";
                    var dia2 = document.getElementById('dbiNat2').innerHTML==="";
                    var dia3 = document.getElementById('gotDia2').innerHTML==="";

                    if(dia1 && dia2 && dia3) {
                      

                        document.getElementById('beforeDia2').innerHTML=HbA1cAfterTwoHoursInput;
                        document.getElementById('beforeDia2').style.display="inline";
                       
                    }
                    else {
                        document.getElementById('beforeDia2').innerHTML=HbA1cAfterTwoHoursInput;
                        document.getElementById('beforeDia2').style.display="inline";

                        document.getElementById('dbiLow2').style.display="none";
                        document.getElementById('dbiNat2').style.display="none";
                        document.getElementById('gotDia2').style.display="none";


                    }

                }

                else if (HbA1cAfterTwoHoursInput >= 200 && HbA1cAfterTwoHoursInput <= 600) {
                    document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";

                    }

                    document.getElementById('HbA1c_result4').innerHTML = "مصاب" + " " + HbA1cAfterTwoHoursInput + " ملجم/دسل ";
                    document.getElementById('HbA1c_message4').innerHTML = hasNosDiabetesGotDiabetesMale;



               

                    var dia1 = document.getElementById('dbiLow2').innerHTML==="";
                    var dia2 = document.getElementById('dbiNat2').innerHTML==="";
                    var dia3 = document.getElementById('beforeDia2').innerHTML==="";

                    if(dia1 && dia2 && dia3) {
                      

                        document.getElementById('gotDia2').innerHTML=HbA1cAfterTwoHoursInput;
                        document.getElementById('gotDia2').style.display="inline";
                       
                    }
                    else {
                        document.getElementById('gotDia2').innerHTML=HbA1cAfterTwoHoursInput;
                        document.getElementById('gotDia2').style.display="inline";

                        document.getElementById('dbiLow2').style.display="none";
                        document.getElementById('dbiNat2').style.display="none";
                        document.getElementById('beforeDia2').style.display="none";


                    }
                }

             
                else {
                    document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').innerHTML =
                    " تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').style.display = "inline";

                "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').setAttribute("hidden", false);

                    document.getElementById('HbA1c_result4').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message4').innerHTML =
                    "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";

                    document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";

                    }

                    
                }
             
             
                //end of diabetes two hour choice

                //start pressure
                        
                if (DiastolicPressureInput < 20) {
                    //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                            document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أكبر من 20  للمصابين";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                    
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                    document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
              document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";

                    document.getElementById('hasPressure').style.display="block";
                    document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                   
                    
                    document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasNoPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasPressureProgressBarD').style.display="none";
                        document.getElementById('hasPressureProgressBarS').style.display="none";

                        
                    }
                    else {
                       document.getElementById('hasPressureProgressBarD').style.display="none";
                       document.getElementById('hasPressureProgressBarS').style.display="none";

                        document.getElementById('hasNoPressureProgressBarS').style.display="none";
                        document.getElementById('hasNoPressureProgressBarD').style.display="none";

                    }
                }
              
                if (SystolicPressureInput < 50) {
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                    = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أكبر من 50  للمصابين";
                document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                        
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";

                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                        
                        document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    
                        var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                        var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                        if(h1) {

                            document.getElementById('hasPressure').style.display="block";

                        }
                        else {
                        
                            document.getElementById('hasPressure').style.display="block";
                            document.getElementById('hasNoPressure').style.display="none";
                        


                        }

                        if (hp1 && hp2) {
                            document.getElementById('hasPressureProgressBarD').style.display="none";
                            document.getElementById('hasPressureProgressBarS').style.display="none";

                            
                        }
                        else {
                        document.getElementById('hasPressureProgressBarD').style.display="none";
                        document.getElementById('hasPressureProgressBarS').style.display="none";

                            document.getElementById('hasNoPressureProgressBarS').style.display="none";
                            document.getElementById('hasNoPressureProgressBarD').style.display="none";

                        }
                }
              

                 if (DiastolicPressureInput >= 20 && DiastolicPressureInput <= 59
                    && SystolicPressureInput >= 50 && SystolicPressureInput <= 89) {
                    //alert("ضغط الدم لديك منخفض عليك مراجعة الطبيب");
                    document.getElementById('pressure_result1').innerHTML = "منخفض " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message1').innerHTML = hasPressureLowMale;

                     document.getElementById('hasPressure').style.display="block";
                     document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                     
                     document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasPressureProgressBarD').style.display="block";
                         document.getElementById('hasPressureProgressBarS').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                         document.getElementById('hasNoPressureProgressBarS').style.display="none";
                         document.getElementById('hasNoPressureProgressBarD').style.display="none";
 
                     }
                     

                     var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                     var isEmptyPnatd = document.getElementById('natPressureS').innerHTML==="";

                     var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                     var isEmptyPhighd = document.getElementById('HighPressureD').innerHTML==="";

                     var isEmptyPveryhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                     var isEmptyPveryhighd = document.getElementById('VeryHighPressureD').innerHTML==="";

                     if(isEmptyPnats && isEmptyPnatd && isEmptyPhighs && isEmptyPhighd && isEmptyPveryhighs && isEmptyPveryhighd) {
                        document.getElementById('lowPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('lowPressureS').style.display = "block";
                        document.getElementById('lowPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('lowPressureD').style.display = "block";
                     }
                     else {
                        document.getElementById('lowPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('lowPressureS').style.display = "block";
                        document.getElementById('lowPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('lowPressureD').style.display = "block";

                         document.getElementById('natPressureS').style.display="none";
                         document.getElementById('natPressureS').style.display="none";

                         document.getElementById('natPressureD').style.display="none";
                         document.getElementById('natPressureD').style.display="none";
   
                         document.getElementById('HighPressureS').style.display="none";
                         document.getElementById('HighPressureD').style.display="none";
   
                         document.getElementById('VeryHighPressureS').style.display="none";
                         document.getElementById('VeryHighPressureD').style.display="none";
   
                     }

                     
                    document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";

                }
               




              else  if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 89
                    && SystolicPressureInput >= 90 && SystolicPressureInput <= 139) {
                    document.getElementById('pressure_result').innerHTML = "طبيعي " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message').innerHTML = hasPressureNatMale;
                      

                    document.getElementById('pressure_icon').className = "flaticon-good";


                     var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                     var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";

                     var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                     var isEmptyPhighd = document.getElementById('HighPressureS').innerHTML==="";

                     var isEmptyPveryhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                     var isEmptyPveryhighd = document.getElementById('VeryHighPressureD').innerHTML==="";

                     if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPveryhighs && isEmptyPveryhighd) {

                       
                        document.getElementById('natPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('natPressureS').style.display = "block";
                        document.getElementById('natPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('natPressureD').style.display = "block";
                        }
                        else {
                        document.getElementById('natPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('natPressureS').style.display = "block";
                        document.getElementById('natPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('natPressureD').style.display = "block";

                        document.getElementById('lowPressureS').style.display="none";
                        document.getElementById('lowPressureD').style.display="none";
  
                        document.getElementById('HighPressureS').style.display="none";
                        document.getElementById('HighPressureD').style.display="none";
  
                        document.getElementById('VeryHighPressureS').style.display="none";
                        document.getElementById('VeryHighPressureD').style.display="none";

                        }

                }

                

 
              


               else  if (DiastolicPressureInput >= 90 && DiastolicPressureInput <= 109
                    && SystolicPressureInput >= 140 && SystolicPressureInput <= 179) {
                    document.getElementById('pressure_result1').innerHTML = "مرتفع " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message1').innerHTML = hasPressureKindOfMale;
                        
                     document.getElementById('hasPressure').style.display="block";
                     document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                     
                     document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasPressureProgressBarD').style.display="block";
                         document.getElementById('hasPressureProgressBarS').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                         document.getElementById('hasNoPressureProgressBarS').style.display="none";
                         document.getElementById('hasNoPressureProgressBarD').style.display="none";
 
                     }
                     

                    var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                    var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";

                    var isEmptyPhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                    var isEmptyPhighd = document.getElementById('VeryHighPressureD').innerHTML==="";

                    var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                    var isEmptyPnatd = document.getElementById('natPressureD').innerHTML==="";

                    if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPnats && isEmptyPnatd) {
                        document.getElementById('HighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('HighPressureS').style.display = "block";
                        document.getElementById('HighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('HighPressureD').style.display = "block";
                    }
                    else {
                        document.getElementById('HighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('HighPressureS').style.display = "block";
                        document.getElementById('HighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('HighPressureD').style.display = "block";

                        document.getElementById('lowPressureS').style.display="none";
                        document.getElementById('lowPressureD').style.display="none";
  
                        document.getElementById('VeryHighPressureS').style.display="none";
                        document.getElementById('VeryHighPressureD').style.display="none";
  
                        document.getElementById('natPressureS').style.display="none";
                        document.getElementById('natPressureD').style.display="none";

                    }

                   
                    

                }

              
            

              else  if (DiastolicPressureInput >= 110 && DiastolicPressureInput <= 180
                    && SystolicPressureInput >= 180 && SystolicPressureInput <= 220) {
                    document.getElementById('pressure_result1').innerHTML = " مرتفع جدا " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message1').innerHTML = hasPressureVeryHighMale;

                     document.getElementById('hasPressure').style.display="block";
                     document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                     
                     document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasPressureProgressBarD').style.display="block";
                         document.getElementById('hasPressureProgressBarS').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                         document.getElementById('hasNoPressureProgressBarS').style.display="none";
                         document.getElementById('hasNoPressureProgressBarD').style.display="none";
 
                     }
                     
                  

                    var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                    var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";

                    var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                    var isEmptyPhighd = document.getElementById('HighPressureD').innerHTML==="";

                    var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                    var isEmptyPnatd = document.getElementById('natPressureD').innerHTML==="";
                    
                    if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPnats && isEmptyPnatd) {
                        document.getElementById('VeryHighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('VeryHighPressureS').style.display = "block";
                        document.getElementById('VeryHighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('VeryHighPressureD').style.display = "block";
                        
                    }
                    else {
                        document.getElementById('VeryHighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('VeryHighPressureS').style.display = "block";
                        document.getElementById('VeryHighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('VeryHighPressureD').style.display = "block";

                        document.getElementById('lowPressureS').style.display="none";
                        document.getElementById('lowPressureD').style.display="none";
  
                        document.getElementById('HighPressureS').style.display="none";
                        document.getElementById('HighPressureD').style.display="none";
  
                        document.getElementById('natPressureS').style.display="none";
                        document.getElementById('natPressureD').style.display="none";

                    }

                    
                }
             
            

                 else if (DiastolicPressureInput > 180) {

                    document.getElementById('hasPressure').style.display="block";
                    document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                   
                    
                    document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasNoPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasPressureProgressBarD').style.display="block";
                       document.getElementById('hasPressureProgressBarS').style.display="block";

                        document.getElementById('hasNoPressureProgressBarS').style.display="none";
                        document.getElementById('hasNoPressureProgressBarD').style.display="none";

                    }
                    
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أقل من 181 للمصابين ";
                     document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                     document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                     document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                         = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                     document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                     document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                         = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                     document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                     document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                 

                    
                }
                 else if (SystolicPressureInput > 220) {

                    document.getElementById('hasPressure').style.display="block";
                    document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                   
                    
                    document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasNoPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasPressureProgressBarD').style.display="block";
                       document.getElementById('hasPressureProgressBarS').style.display="block";

                        document.getElementById('hasNoPressureProgressBarS').style.display="none";
                        document.getElementById('hasNoPressureProgressBarD').style.display="none";

                    }
                    
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أقل من 221  للمصابين";
                     document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                  
                  document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                  document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                  document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                      = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                  document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                  document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                      = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                  document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                  document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
              
                }
                 else {
                     // alert('مشكلة');
                     

                 }
             
                //end pressure
                if (WaistlineInput < 69) {
                    document.getElementById('RequiredFieldSpanForWaistline').innerHTML
                        = "ادخال غير صحيح ، محيط الخصر للنساء يجب أن يكون فوق 79";
                    document.getElementById('RequiredFieldSpanForWaistline').style.display = "inline";
                }
                else if (WaistlineInput >= 70 && WaistlineInput <= 80) {
                    document.getElementById('Waistline_result').innerHTML = "طبيعي" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleNat;
                    var isEmptyW1 = document.getElementById('WaistlineNatHigh').innerHTML==="";
                    var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                    if(isEmptyW1 &&  isEmptyW2) {
                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";
                    }
                    else {
                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";

                        document.getElementById('WaistlineNatHigh').style.display = "none";
                        document.getElementById('WaistlineVeryHigh').style.display = "none";

                    }
    


                    document.getElementById('Waistline_icon').className = "flaticon-good";
                }

                else if (WaistlineInput >= 81 && WaistlineInput <= 87) {
                    document.getElementById('Waistline_result').innerHTML = "مرتفع" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleHighNot;
                       
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                    var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                    var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";

                    if(isEmptyW3 && isEmptyW2) {
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";
                    }
                    else {
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";

                        document.getElementById('WaistlineNat').style.display = "none";
                        document.getElementById('WaistlineVeryHigh').style.display = "none";
                    }


                    document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                }


                else if (WaistlineInput >= 88 && WaistlineInput <= 200) {
                    document.getElementById('Waistline_result').innerHTML = " مرتفع جدا" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleVeryHighNot;
                    var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                    var isEmptyW = document.getElementById('WaistlineNatHigh').innerHTML==="";
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                     if(isEmptyW3 && isEmptyW) {
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";
                     }
                     else {
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";

                        document.getElementById('WaistlineNat').style.display = "none";
                        document.getElementById('WaistlineNatHigh').style.display = "none";

                     }



                }
                else {
                    WaistlinePressureMessagesForFemale();
                }
                

              
            }
            }
        }
    }
}
function HasNoDiabetesHbA1cAndHasPressureFemale() {
    var isFemale = document.getElementById('female').checked;
    var hasNoDiabtes = document.getElementById('no_ihavenot').checked;
    var hasPressure = document.getElementById('yes_ihaveP').checked;
    var HbA1cNodiabetes = document.getElementById('HbA1cNoDiabetes').checked;

    if (isFemale == true) {
        if (hasNoDiabtes == true) {
            if (hasPressure == true) {
                if(HbA1cNodiabetes) {

                
                //alert('male do not have diabetes and fast');

                var HbA1cInput = parseFloat(document.getElementById('HbA1cNoDiabetesId').value);
                var DiastolicPressureInput = parseFloat(document.getElementById('DiastolicPressure').value);
                var SystolicPressureInput = parseFloat(document.getElementById('SystolicPressure').value);
                var WaistlineInput = parseFloat(document.getElementById('Waistline').value);

                
                 //start diabetes 

                 if (HbA1cInput < 2.9) {
                    document.getElementById('HbA1cNoDiabetesSpan').innerHTML = "الإدخال غير صحيح ، يجب أن يكون فوق 2.9 للمصاب بالسكر";
                    document.getElementById('HbA1cNoDiabetesSpan').style.display = "block";
                    document.getElementById('HbA1c_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    document.getElementById('HbA1c_result3').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message3').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 2.9 ودون 15.1";
                        document.getElementById('RequiredFieldSpanRadioAnswer2').style.display="none";

                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesHbA1c').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
               }



                else if (HbA1cInput >= 3 && HbA1cInput <= 5.6) {
                    document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    document.getElementById('RequiredFieldSpanRadioAnswer2').style.display="none";

                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                        
                    }


                    document.getElementById('HbA1c_result3').innerHTML = "طبيعي" + " " + HbA1cInput;
                    document.getElementById('HbA1c_message3').innerHTML = hasNosDiabetesNatMale;
                    var isEmptyH2  = document.getElementById('beforeDia3').innerHTML===""; 
                    var isEmptyH3  = document.getElementById('gotDia3').innerHTML==="";

                    if(isEmptyH1 && isEmptyH2) {
                     document.getElementById('dbiNat3').innerHTML = HbA1cInput;
                     document.getElementById('dbiNat3').style.display = "block";
                    }
                    else {
                     document.getElementById('dbiNat3').innerHTML = HbA1cInput;
                     document.getElementById('dbiNat3').style.display = "block";
                     document.getElementById('beforeDia3').style.display="none";
                     document.getElementById('gotDia3').style.display="none";

                    }
                     


                }
                else if (HbA1cInput >= 5.7 && HbA1cInput <= 6.4) {
                    document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    document.getElementById('RequiredFieldSpanRadioAnswer2').style.display="none";

                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                        
                    }
                    
                    document.getElementById('HbA1c_result3').innerHTML = "ماقبل الإصابة" + " " + HbA1cInput + " ملجم/دسل ";
                    document.getElementById('HbA1c_message3').innerHTML = hasNosDiabetesBeforeMale;
                    var isEmptyH2  = document.getElementById('dbiNat3').innerHTML===""; 
                    var isEmptyH3  = document.getElementById('gotDia3').innerHTML==="";
                    
                   if(isEmptyH2 && isEmptyH3 ) {
                       document.getElementById('beforeDia3').innerHTML = HbA1cInput;
                       document.getElementById('beforeDia3').style.display = "block";
                   }
                   else {
                       document.getElementById('beforeDia3').innerHTML = HbA1cInput;
                       document.getElementById('beforeDia3').style.display = "block";
                       document.getElementById('dbiNat3').style.display="none";
                       document.getElementById('gotDia3').style.display="none";

                   }

                }

                else if (HbA1cInput >= 6.5 && HbA1cInput <= 15) {

                    document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    document.getElementById('RequiredFieldSpanRadioAnswer2').style.display="none";

                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                        
                    }


                    document.getElementById('HbA1c_result3').innerHTML = "مصاب" + " " + HbA1cInput + " ملجم/دسل ";
                    document.getElementById('HbA1c_message3').innerHTML = hasNosDiabetesGotDiabetesMale;

                    var isEmptyH1  = document.getElementById('diaHigh3').innerHTML==="";
                    var isEmptyH2  = document.getElementById('dbiNat3').innerHTML===""; 
                    var isEmptyH3  = document.getElementById('beforeDia3').innerHTML==="";
                    
                   if(isEmptyH1 && isEmptyH2 && isEmptyH3 ) {
                        document.getElementById('gotDia3').innerHTML=HbA1cInput;
                        document.getElementById('gotDia3').style.display="inline";
                   }
                   else {
                       document.getElementById('gotDia3').innerHTML = HbA1cInput;
                       document.getElementById('gotDia3').style.display = "block";
                       document.getElementById('dbiNat3').style.display="none";
                       document.getElementById('beforeDia3').style.display="none";

                   }
                   
                }

                else {
                    document.getElementById('HbA1cNoDiabetesSpan').innerHTML = "الإدخال غير صحيح ، يجب أن يكون فوق 2.9 للمصاب بالسكر ودون 15";
                    document.getElementById('HbA1cNoDiabetesSpan').style.display = "block";
                    document.getElementById('HbA1c_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    document.getElementById('HbA1c_result3').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message3').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 2.9 ودون 15.1";

                        document.getElementById('RequiredFieldSpanRadioAnswer2').style.display="none";

                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesHbA1c').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
                }



                 //end diabetes

                  //start pressure
                                 
                if (DiastolicPressureInput < 20) {
                    //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                            document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أكبر من 20  للمصابين";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                    
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                    document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
              document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";

                    document.getElementById('hasPressure').style.display="block";
                    document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                   
                    
                    document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasNoPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasPressureProgressBarD').style.display="none";
                        document.getElementById('hasPressureProgressBarS').style.display="none";

                        
                    }
                    else {
                       document.getElementById('hasPressureProgressBarD').style.display="none";
                       document.getElementById('hasPressureProgressBarS').style.display="none";

                        document.getElementById('hasNoPressureProgressBarS').style.display="none";
                        document.getElementById('hasNoPressureProgressBarD').style.display="none";

                    }
                }
              
                if (SystolicPressureInput < 50) {
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                    = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أكبر من 50  للمصابين";
                document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                        
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";

                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                        
                        document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    
                        var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                        var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                        if(h1) {

                            document.getElementById('hasPressure').style.display="block";

                        }
                        else {
                        
                            document.getElementById('hasPressure').style.display="block";
                            document.getElementById('hasNoPressure').style.display="none";
                        


                        }

                        if (hp1 && hp2) {
                            document.getElementById('hasPressureProgressBarD').style.display="none";
                            document.getElementById('hasPressureProgressBarS').style.display="none";

                            
                        }
                        else {
                        document.getElementById('hasPressureProgressBarD').style.display="none";
                        document.getElementById('hasPressureProgressBarS').style.display="none";

                            document.getElementById('hasNoPressureProgressBarS').style.display="none";
                            document.getElementById('hasNoPressureProgressBarD').style.display="none";

                        }
                }
              

                 if (DiastolicPressureInput >= 20 && DiastolicPressureInput <= 59
                    && SystolicPressureInput >= 50 && SystolicPressureInput <= 89) {
                    //alert("ضغط الدم لديك منخفض عليك مراجعة الطبيب");
                    document.getElementById('pressure_result1').innerHTML = "منخفض " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message1').innerHTML = hasPressureLowMale;

                     document.getElementById('hasPressure').style.display="block";
                     document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                     
                     document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasPressureProgressBarD').style.display="block";
                         document.getElementById('hasPressureProgressBarS').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                         document.getElementById('hasNoPressureProgressBarS').style.display="none";
                         document.getElementById('hasNoPressureProgressBarD').style.display="none";
 
                     }
                     

                     var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                     var isEmptyPnatd = document.getElementById('natPressureS').innerHTML==="";

                     var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                     var isEmptyPhighd = document.getElementById('HighPressureD').innerHTML==="";

                     var isEmptyPveryhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                     var isEmptyPveryhighd = document.getElementById('VeryHighPressureD').innerHTML==="";

                     if(isEmptyPnats && isEmptyPnatd && isEmptyPhighs && isEmptyPhighd && isEmptyPveryhighs && isEmptyPveryhighd) {
                        document.getElementById('lowPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('lowPressureS').style.display = "block";
                        document.getElementById('lowPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('lowPressureD').style.display = "block";
                     }
                     else {
                        document.getElementById('lowPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('lowPressureS').style.display = "block";
                        document.getElementById('lowPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('lowPressureD').style.display = "block";

                         document.getElementById('natPressureS').style.display="none";
                         document.getElementById('natPressureS').style.display="none";

                         document.getElementById('natPressureD').style.display="none";
                         document.getElementById('natPressureD').style.display="none";
   
                         document.getElementById('HighPressureS').style.display="none";
                         document.getElementById('HighPressureD').style.display="none";
   
                         document.getElementById('VeryHighPressureS').style.display="none";
                         document.getElementById('VeryHighPressureD').style.display="none";
   
                     }

                     
                    document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";

                }
               




              else  if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 89
                    && SystolicPressureInput >= 90 && SystolicPressureInput <= 139) {
                    document.getElementById('pressure_result').innerHTML = "طبيعي " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message').innerHTML = hasPressureNatMale;
                      

                    document.getElementById('pressure_icon').className = "flaticon-good";


                     var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                     var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";

                     var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                     var isEmptyPhighd = document.getElementById('HighPressureS').innerHTML==="";

                     var isEmptyPveryhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                     var isEmptyPveryhighd = document.getElementById('VeryHighPressureD').innerHTML==="";

                     if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPveryhighs && isEmptyPveryhighd) {

                       
                        document.getElementById('natPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('natPressureS').style.display = "block";
                        document.getElementById('natPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('natPressureD').style.display = "block";
                        }
                        else {
                        document.getElementById('natPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('natPressureS').style.display = "block";
                        document.getElementById('natPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('natPressureD').style.display = "block";

                        document.getElementById('lowPressureS').style.display="none";
                        document.getElementById('lowPressureD').style.display="none";
  
                        document.getElementById('HighPressureS').style.display="none";
                        document.getElementById('HighPressureD').style.display="none";
  
                        document.getElementById('VeryHighPressureS').style.display="none";
                        document.getElementById('VeryHighPressureD').style.display="none";

                        }

                }

                

 
              


               else  if (DiastolicPressureInput >= 90 && DiastolicPressureInput <= 109
                    && SystolicPressureInput >= 140 && SystolicPressureInput <= 179) {
                    document.getElementById('pressure_result1').innerHTML = "مرتفع " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message1').innerHTML = hasPressureKindOfMale;
                        
                     document.getElementById('hasPressure').style.display="block";
                     document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                     
                     document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasPressureProgressBarD').style.display="block";
                         document.getElementById('hasPressureProgressBarS').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                         document.getElementById('hasNoPressureProgressBarS').style.display="none";
                         document.getElementById('hasNoPressureProgressBarD').style.display="none";
 
                     }
                     

                    var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                    var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";

                    var isEmptyPhighs = document.getElementById('VeryHighPressureS').innerHTML==="";
                    var isEmptyPhighd = document.getElementById('VeryHighPressureD').innerHTML==="";

                    var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                    var isEmptyPnatd = document.getElementById('natPressureD').innerHTML==="";

                    if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPnats && isEmptyPnatd) {
                        document.getElementById('HighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('HighPressureS').style.display = "block";
                        document.getElementById('HighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('HighPressureD').style.display = "block";
                    }
                    else {
                        document.getElementById('HighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('HighPressureS').style.display = "block";
                        document.getElementById('HighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('HighPressureD').style.display = "block";

                        document.getElementById('lowPressureS').style.display="none";
                        document.getElementById('lowPressureD').style.display="none";
  
                        document.getElementById('VeryHighPressureS').style.display="none";
                        document.getElementById('VeryHighPressureD').style.display="none";
  
                        document.getElementById('natPressureS').style.display="none";
                        document.getElementById('natPressureD').style.display="none";

                    }

                   
                    

                }

              
            

              else  if (DiastolicPressureInput >= 110 && DiastolicPressureInput <= 180
                    && SystolicPressureInput >= 180 && SystolicPressureInput <= 220) {
                    document.getElementById('pressure_result1').innerHTML = " مرتفع جدا " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message1').innerHTML = hasPressureVeryHighMale;

                     document.getElementById('hasPressure').style.display="block";
                     document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                    
                     
                     document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasNoPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasPressure').style.display="block";
                         document.getElementById('hasNoPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasPressureProgressBarD').style.display="block";
                         document.getElementById('hasPressureProgressBarS').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                         document.getElementById('hasNoPressureProgressBarS').style.display="none";
                         document.getElementById('hasNoPressureProgressBarD').style.display="none";
 
                     }
                     
                  

                    var isEmptyPlows = document.getElementById('lowPressureS').innerHTML==="";
                    var isEmptyPlowd = document.getElementById('lowPressureD').innerHTML==="";

                    var isEmptyPhighs = document.getElementById('HighPressureS').innerHTML==="";
                    var isEmptyPhighd = document.getElementById('HighPressureD').innerHTML==="";

                    var isEmptyPnats = document.getElementById('natPressureS').innerHTML==="";
                    var isEmptyPnatd = document.getElementById('natPressureD').innerHTML==="";
                    
                    if(isEmptyPlows && isEmptyPlowd && isEmptyPhighs && isEmptyPhighd && isEmptyPnats && isEmptyPnatd) {
                        document.getElementById('VeryHighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('VeryHighPressureS').style.display = "block";
                        document.getElementById('VeryHighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('VeryHighPressureD').style.display = "block";
                        
                    }
                    else {
                        document.getElementById('VeryHighPressureS').innerHTML = SystolicPressureInput;
                        document.getElementById('VeryHighPressureS').style.display = "block";
                        document.getElementById('VeryHighPressureD').innerHTML = DiastolicPressureInput;
                        document.getElementById('VeryHighPressureD').style.display = "block";

                        document.getElementById('lowPressureS').style.display="none";
                        document.getElementById('lowPressureD').style.display="none";
  
                        document.getElementById('HighPressureS').style.display="none";
                        document.getElementById('HighPressureD').style.display="none";
  
                        document.getElementById('natPressureS').style.display="none";
                        document.getElementById('natPressureD').style.display="none";

                    }

                    
                }
             
            

                 else if (DiastolicPressureInput > 180) {

                    document.getElementById('hasPressure').style.display="block";
                    document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                   
                    
                    document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasNoPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasPressureProgressBarD').style.display="block";
                       document.getElementById('hasPressureProgressBarS').style.display="block";

                        document.getElementById('hasNoPressureProgressBarS').style.display="none";
                        document.getElementById('hasNoPressureProgressBarD').style.display="none";

                    }
                    
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أقل من 181 للمصابين ";
                     document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                     document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                     document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                         = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                     document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                     document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                         = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                     document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                     document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                 

                    
                }
                 else if (SystolicPressureInput > 220) {

                    document.getElementById('hasPressure').style.display="block";
                    document.getElementById('hasNoPressure').setAttribute('style', 'display: none !important;');
                   
                    
                    document.getElementById('hasNoPressureProgressBarS').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoPressureProgressBarD').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasNoPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasNoPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasNoPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasPressure').style.display="block";
                        document.getElementById('hasNoPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasPressureProgressBarD').style.display="block";
                        document.getElementById('hasPressureProgressBarS').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasPressureProgressBarD').style.display="block";
                       document.getElementById('hasPressureProgressBarS').style.display="block";

                        document.getElementById('hasNoPressureProgressBarS').style.display="none";
                        document.getElementById('hasNoPressureProgressBarD').style.display="none";

                    }
                    
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أقل من 221  للمصابين";
                     document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                  
                  document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                  document.getElementById('pressure_result1').innerHTML = "مشكلة في الأرقام المدخلة "

                  document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                      = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                  document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                  document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                      = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                  document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                  document.getElementById('pressure_message1').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
              
                }
                 else {
                     // alert('مشكلة');
                     

                 }
             

                //end pressure

                

                if (WaistlineInput < 69) {
                    document.getElementById('RequiredFieldSpanForWaistline').innerHTML
                        = "ادخال غير صحيح ، محيط الخصر للنساء يجب أن يكون فوق 69";
                    document.getElementById('RequiredFieldSpanForWaistline').style.display = "inline";
                }
                else if (WaistlineInput >= 70 && WaistlineInput <= 80) {
                    document.getElementById('Waistline_result').innerHTML = "طبيعي" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleNat;

                    var isEmptyW1 = document.getElementById('WaistlineNatHigh').innerHTML==="";
                    var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                    if(isEmptyW1 &&  isEmptyW2) {
                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";
                    }
                    else {
                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";

                        document.getElementById('WaistlineNatHigh').style.display = "none";
                        document.getElementById('WaistlineVeryHigh').style.display = "none";

                    } 

                    document.getElementById('Waistline_icon').className = "flaticon-good";
                }
                else if (WaistlineInput >= 81 && WaistlineInput <= 87) {
                    document.getElementById('Waistline_result').innerHTML = "مرتفع" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleKindOfHigh;

                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                    var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                    var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";

                    if(isEmptyW3 && isEmptyW2) {
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";
                    }
                    else {
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";

                        document.getElementById('WaistlineNat').style.display = "none";
                        document.getElementById('WaistlineVeryHigh').style.display = "none";
                    }


                    document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                }


                else if (WaistlineInput >= 88 && WaistlineInput <= 200) {
                    document.getElementById('Waistline_result').innerHTML = " مرتفع جدا" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleVeryHigh;
                    var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                    var isEmptyW = document.getElementById('WaistlineNatHigh').innerHTML==="";
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                     if(isEmptyW3 && isEmptyW) {
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";
                     }
                     else {
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";

                        document.getElementById('WaistlineNat').style.display = "none";
                        document.getElementById('WaistlineNatHigh').style.display = "none";

                     }



                    document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                }
                else {
                    WaistlinePressureMessagesForFemale();
                }
            }

                

            }
        }
    }
}
function HasNoDiabetesAndNoPressureFemaleHbA1cChoice() {
    var isFemale = document.getElementById('female').checked;
    var hasNoDiabtes = document.getElementById('no_ihavenot').checked;
    var hasNoPressure = document.getElementById('no_ihavnotP').checked;
    var HbA1cNodiabetes = document.getElementById('HbA1cNoDiabetes').checked;

    if (isFemale == true) {
        if (hasNoDiabtes == true) {
            if (hasNoPressure == true) {
                if(HbA1cNodiabetes) {

                
                document.getElementById('RequiredFieldSpanRadioAnswer2').style.display = "none";

                //alert('has no diabetes and no pressure female');
                var HbA1cInput = parseFloat(document.getElementById('HbA1cNoDiabetesId').value);
                var DiastolicPressureInput = parseFloat(document.getElementById('DiastolicPressure').value);
                var SystolicPressureInput = parseFloat(document.getElementById('SystolicPressure').value);
                var WaistlineInput = parseFloat(document.getElementById('Waistline').value);

                 //diabetres start


                 if (HbA1cInput < 2.9) {
                    document.getElementById('HbA1cNoDiabetesSpan').innerHTML = "الإدخال غير صحيح ، يجب أن يكون فوق 2.9 للمصاب بالسكر";
                    document.getElementById('HbA1cNoDiabetesSpan').style.display = "block";
                    document.getElementById('HbA1c_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    document.getElementById('HbA1c_result3').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message3').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 2.9 ودون 15.1";
                        document.getElementById('RequiredFieldSpanRadioAnswer2').style.display="none";

                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesHbA1c').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
               }



                else if (HbA1cInput >= 3 && HbA1cInput <= 5.6) {
                    document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    document.getElementById('RequiredFieldSpanRadioAnswer2').style.display="none";

                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                        
                    }


                    document.getElementById('HbA1c_result3').innerHTML = "طبيعي" + " " + HbA1cInput;
                    document.getElementById('HbA1c_message3').innerHTML = hasNosDiabetesNatMale;
                    var isEmptyH2  = document.getElementById('beforeDia3').innerHTML===""; 
                    var isEmptyH3  = document.getElementById('gotDia3').innerHTML==="";

                    if(isEmptyH1 && isEmptyH2) {
                     document.getElementById('dbiNat3').innerHTML = HbA1cInput;
                     document.getElementById('dbiNat3').style.display = "block";
                    }
                    else {
                     document.getElementById('dbiNat3').innerHTML = HbA1cInput;
                     document.getElementById('dbiNat3').style.display = "block";
                     document.getElementById('beforeDia3').style.display="none";
                     document.getElementById('gotDia3').style.display="none";

                    }
                     


                }
                else if (HbA1cInput >= 5.7 && HbA1cInput <= 6.4) {
                    document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    document.getElementById('RequiredFieldSpanRadioAnswer2').style.display="none";

                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                        
                    }
                    
                    document.getElementById('HbA1c_result3').innerHTML = "ماقبل الإصابة" + " " + HbA1cInput + " ملجم/دسل ";
                    document.getElementById('HbA1c_message3').innerHTML = hasNosDiabetesBeforeMale;
                    var isEmptyH2  = document.getElementById('dbiNat3').innerHTML===""; 
                    var isEmptyH3  = document.getElementById('gotDia3').innerHTML==="";
                    
                   if(isEmptyH2 && isEmptyH3 ) {
                       document.getElementById('beforeDia3').innerHTML = HbA1cInput;
                       document.getElementById('beforeDia3').style.display = "block";
                   }
                   else {
                       document.getElementById('beforeDia3').innerHTML = HbA1cInput;
                       document.getElementById('beforeDia3').style.display = "block";
                       document.getElementById('dbiNat3').style.display="none";
                       document.getElementById('gotDia3').style.display="none";

                   }

                }

                else if (HbA1cInput >= 6.5 && HbA1cInput <= 15) {

                    document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                    document.getElementById('RequiredFieldSpanRadioAnswer2').style.display="none";

                    document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    
                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                        
                    }


                    document.getElementById('HbA1c_result3').innerHTML = "مصاب" + " " + HbA1cInput + " ملجم/دسل ";
                    document.getElementById('HbA1c_message3').innerHTML = hasNosDiabetesGotDiabetesMale;

                    var isEmptyH1  = document.getElementById('diaHigh3').innerHTML==="";
                    var isEmptyH2  = document.getElementById('dbiNat3').innerHTML===""; 
                    var isEmptyH3  = document.getElementById('beforeDia3').innerHTML==="";
                    
                   if(isEmptyH1 && isEmptyH2 && isEmptyH3 ) {
                        document.getElementById('gotDia3').innerHTML=HbA1cInput;
                        document.getElementById('gotDia3').style.display="inline";
                   }
                   else {
                       document.getElementById('gotDia3').innerHTML = HbA1cInput;
                       document.getElementById('gotDia3').style.display = "block";
                       document.getElementById('dbiNat3').style.display="none";
                       document.getElementById('beforeDia3').style.display="none";

                   }
                   
                }

                else {
                    document.getElementById('HbA1cNoDiabetesSpan').innerHTML = "الإدخال غير صحيح ، يجب أن يكون فوق 2.9 للمصاب بالسكر ودون 15";
                    document.getElementById('HbA1cNoDiabetesSpan').style.display = "block";
                    document.getElementById('HbA1c_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    document.getElementById('HbA1c_result3').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message3').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 2.9 ودون 15.1";

                        document.getElementById('RequiredFieldSpanRadioAnswer2').style.display="none";

                        document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesHbA1c').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesHbA1c').style.display="block";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
                            
                        }
                }



                 //diabetes end
                 



                //pressure start
                if (DiastolicPressureInput < 20) {
                    //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق أو يساوي 20 للمصابين بالضغط ";
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";

                       
                    document.getElementById('hasNoPressure').style.display="block";
                    document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                    
                    
                    document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasNoPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasNoPressureProgressBarS').style.display="none";
                       document.getElementById('hasNoPressureProgressBarD').style.display="none";

                        document.getElementById('hasPressureProgressBarS').style.display="none";
                        document.getElementById('hasPressureProgressBarD').style.display="none";

                    }
                }

                if (SystolicPressureInput < 50) {
                    //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانقباضي فوق  أو يساوي 50 للمصابين بالضغط ";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";

                       
                    document.getElementById('hasNoPressure').style.display="block";
                    document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                    
                    
                    document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasNoPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasNoPressureProgressBarS').style.display="none";
                       document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        document.getElementById('hasPressureProgressBarS').style.display="none";
                        document.getElementById('hasPressureProgressBarD').style.display="none";

                    }
                }


                 if (DiastolicPressureInput >= 20 && DiastolicPressureInput <= 59
                    && SystolicPressureInput >= 50 && SystolicPressureInput <= 89) {
                    //alert("ضغط الدم لديك منخفض عليك مراجعة الطبيب");
                    document.getElementById('pressure_result2').innerHTML = "منخفض " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleLow;

                     
                     document.getElementById('hasNoPressure').style.display="block";
                     document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                     
                     
                     document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasNoPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasNoPressureProgressBarS').style.display="block";
                         document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         document.getElementById('hasPressureProgressBarS').style.display="none";
                         document.getElementById('hasPressureProgressBarD').style.display="none";
 
                     }
                     

                     var pressureD1 = document.getElementById('natPressureS2').innerHTML==="";
                     var pressureS1 = document.getElementById('natPressureD2').innerHTML==="";
                     var pressureD2 = document.getElementById('kindofPressureS2').innerHTML==="";
                     var pressureS2 = document.getElementById('kindofPressureD2').innerHTML==="";

                     var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                     var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                     var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                     var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                     var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                     var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";

                      if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                        document.getElementById('lowPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('lowPressureS2').style.display = "block";
                        document.getElementById('lowPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('lowPressureD2').style.display = "block";
                      }
                      else {
                        document.getElementById('lowPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('lowPressureS2').style.display = "block";
                        document.getElementById('lowPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('lowPressureD2').style.display = "block";

                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('kindofPressureS2').style.display = "none";
                        document.getElementById('kindofPressureD2').style.display = "none";
                        document.getElementById('VeryHighPressureS2').style.display = "none";
                        document.getElementById('VeryHighPressureD2').style.display = "none";
                        document.getElementById('emerPressureS2').style.display = "none";
                        document.getElementById('emerPressureD2').style.display = "none";

                        document.getElementById('HighPressureS2').style.display = "none";
                        document.getElementById('HighPressureD2').style.display = "none";
                      }

                }

                else if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 79
                    && SystolicPressureInput >= 90 && SystolicPressureInput <= 119) {
                    document.getElementById('pressure_result2').innerHTML = "طبيعي " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasPressureMaleNat;

   
                     document.getElementById('hasNoPressure').style.display="block";
                     document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                     
                     
                     document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasNoPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasNoPressureProgressBarS').style.display="block";
                         document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         document.getElementById('hasPressureProgressBarS').style.display="none";
                         document.getElementById('hasPressureProgressBarD').style.display="none";
 
                     }
                     var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                     var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                     var pressureD2 = document.getElementById('kindofPressureS2').innerHTML==="";
                     var pressureS2 = document.getElementById('kindofPressureD2').innerHTML==="";

                     var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                     var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                     var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                     var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                     var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                     var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";


                      if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                            document.getElementById('natPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('natPressureS2').style.display = "block";
                            document.getElementById('natPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('natPressureD2').style.display = "block";
    
    
                      }
                      else {
                        document.getElementById('natPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('natPressureS2').style.display = "block";
                        document.getElementById('natPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('natPressureD2').style.display = "block";


                        document.getElementById('lowPressureS2').style.display = "none";
                        document.getElementById('lowPressureD2').style.display = "none";
                        document.getElementById('kindofPressureS2').style.display = "none";
                        document.getElementById('kindofPressureD2').style.display = "none";
                        document.getElementById('VeryHighPressureS2').style.display = "none";
                        document.getElementById('VeryHighPressureD2').style.display = "none";
                        document.getElementById('emerPressureS2').style.display = "none";
                        document.getElementById('emerPressureD2').style.display = "none";
                        document.getElementById('HighPressureS2').style.display = "none";
                        document.getElementById('HighPressureD2').style.display = "none";
                      }
                       
                       
                    
                }

                else if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 79
                    && SystolicPressureInput >= 120 && SystolicPressureInput <= 129) {
                    document.getElementById('pressure_result2').innerHTML = "مرتفع قليلا   " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleKindOf;
                        
                     document.getElementById('hasNoPressure').style.display="block";
                     document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                     
                     
                     document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasNoPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasNoPressureProgressBarS').style.display="block";
                         document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         document.getElementById('hasPressureProgressBarS').style.display="none";
                         document.getElementById('hasPressureProgressBarD').style.display="none";
 
                     }

                     var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                     var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                     var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                     var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";

                     var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                     var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                     var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                     var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                     var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                     var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
                     


                     
                     if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                            document.getElementById('kindofPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('kindofPressureS2').style.display = "block";
                            document.getElementById('kindofPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('kindofPressureD2').style.display = "block";
                      }
                      else {
                        document.getElementById('kindofPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('kindofPressureS2').style.display = "block";
                        document.getElementById('kindofPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('kindofPressureD2').style.display = "block";


                        document.getElementById('lowPressureS2').style.display = "none";
                        document.getElementById('lowPressureD2').style.display = "none";
                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('natPressureD2').style.display = "none";
                        document.getElementById('VeryHighPressureS2').style.display = "none";
                        document.getElementById('VeryHighPressureD2').style.display = "none";
                        document.getElementById('emerPressureS2').style.display = "none";
                        document.getElementById('emerPressureD2').style.display = "none";
                        document.getElementById('HighPressureS2').style.display = "none";
                        document.getElementById('HighPressureD2').style.display = "none";
                      }
                       



    
                  
                    document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                }


                else if (DiastolicPressureInput >= 80 && DiastolicPressureInput <= 89
                    && SystolicPressureInput >= 130 && SystolicPressureInput <= 139) {
                    document.getElementById('pressure_result2').innerHTML = " مرتفع  " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleHigh;
                    document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
   
                    document.getElementById('hasNoPressure').style.display="block";
                    document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                    
                    
                    document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasNoPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasNoPressureProgressBarS').style.display="block";
                       document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        document.getElementById('hasPressureProgressBarS').style.display="none";
                        document.getElementById('hasPressureProgressBarD').style.display="none";

                    }

                    var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                    var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                    var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                    var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";

                    var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                    var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                    var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                    var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                    var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                    var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";

                    if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                            document.getElementById('HighPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('HighPressureS2').style.display = "block";
                            document.getElementById('HighPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('HighPressureD2').style.display = "block";
                      }
                      else {
                        document.getElementById('HighPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('HighPressureS2').style.display = "block";
                        document.getElementById('HighPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('HighPressureD2').style.display = "block";


                        document.getElementById('lowPressureS2').style.display = "none";
                        document.getElementById('lowPressureD2').style.display = "none";
                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('natPressureD2').style.display = "none";
                        document.getElementById('VeryHighPressureS2').style.display = "none";
                        document.getElementById('VeryHighPressureD2').style.display = "none";
                        document.getElementById('emerPressureS2').style.display = "none";
                        document.getElementById('emerPressureD2').style.display = "none";
                        document.getElementById('kindofPressureD2').style.display = "none";
                        document.getElementById('kindofPressureS2').style.display = "none";
                      }
                       

                }


                else if (DiastolicPressureInput >= 90 && DiastolicPressureInput <= 119
                    && SystolicPressureInput >= 140 && SystolicPressureInput <= 179) {
                    document.getElementById('pressure_result2').innerHTML = " مرتفع جدا  " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasNoPressureVeryHighMale;
                       
                       document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";


   
                       document.getElementById('hasNoPressure').style.display="block";
                       document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                       
                       
                       document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                       document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                     
                       var h1 = document.getElementById('hasPressure').style.display==="none";
                      
                       var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                       var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
   
                       if(h1) {
   
                           document.getElementById('hasNoPressure').style.display="block";
   
                       }
                       else {
                          
                           document.getElementById('hasNoPressure').style.display="block";
                           document.getElementById('hasPressure').style.display="none";
                          
   
   
                       }
   
                       if (hp1 && hp2) {
                           document.getElementById('hasNoPressureProgressBarS').style.display="block";
                           document.getElementById('hasNoPressureProgressBarD').style.display="block";
  
                           
                       }
                       else {
                          document.getElementById('hasNoPressureProgressBarS').style.display="block";
                          document.getElementById('hasNoPressureProgressBarD').style.display="block";
  
                           document.getElementById('hasPressureProgressBarS').style.display="none";
                           document.getElementById('hasPressureProgressBarD').style.display="none";
   
                       }

                       var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                       var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                       var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                       var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";
   
                       var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                       var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                       var pressureD4 = document.getElementById('HighPressureS2').innerHTML==="";
                       var pressureS4 = document.getElementById('HighPressureS2').innerHTML==="";
                       var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                       var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
   

                       if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                                document.getElementById('VeryHighPressureS2').innerHTML = SystolicPressureInput;
                                document.getElementById('VeryHighPressureS2').style.display = "block";
                                document.getElementById('VeryHighPressureD2').innerHTML = DiastolicPressureInput;
                                document.getElementById('VeryHighPressureD2').style.display = "block";
                        }
                      else {
                        document.getElementById('VeryHighPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('VeryHighPressureS2').style.display = "block";
                        document.getElementById('VeryHighPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('VeryHighPressureD2').style.display = "block";

                        document.getElementById('lowPressureS2').style.display = "none";
                        document.getElementById('lowPressureD2').style.display = "none";
                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('natPressureD2').style.display = "none";
                        document.getElementById('HighPressureS2').style.display = "none";
                        document.getElementById('HighPressureD2').style.display = "none";
                        document.getElementById('emerPressureS2').style.display = "none";
                        document.getElementById('emerPressureD2').style.display = "none";
                        document.getElementById('kindofPressureD2').style.display = "none";
                        document.getElementById('kindofPressureS2').style.display = "none";
                      }
                      
                    

                }


                else if (DiastolicPressureInput >= 120 && DiastolicPressureInput <= 180
                    && SystolicPressureInput >= 180 && SystolicPressureInput <= 220) {
                    document.getElementById('pressure_result2').innerHTML = " ارتفاع طارئ  " + " ( " + SystolicPressureInput + "/ "
                        + DiastolicPressureInput + ")";
                     document.getElementById('pressure_message2').innerHTML = hasNoPressureEmergencyHighMale;

                        
                     document.getElementById('hasNoPressure').style.display="block";
                     document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                     
                     
                     document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                     document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                   
                     var h1 = document.getElementById('hasPressure').style.display==="none";
                    
                     var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                     var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
 
                     if(h1) {
 
                         document.getElementById('hasNoPressure').style.display="block";
 
                     }
                     else {
                        
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').style.display="none";
                        
 
 
                     }
 
                     if (hp1 && hp2) {
                         document.getElementById('hasNoPressureProgressBarS').style.display="block";
                         document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         
                     }
                     else {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                         document.getElementById('hasPressureProgressBarS').style.display="none";
                         document.getElementById('hasPressureProgressBarD').style.display="none";
 
                     }

                    var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                    var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                    var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                    var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";

                    var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                    var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                    var pressureD4 = document.getElementById('HighPressureS2').innerHTML==="";
                    var pressureS4 = document.getElementById('HighPressureS2').innerHTML==="";
                    var pressureD5 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                    var pressureS5 = document.getElementById('VeryHighPressureD2').innerHTML==="";



                      if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                        && pressureS4 &&  pressureD5 && pressureS5) {
                            document.getElementById('emerPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('emerPressureS2').style.display = "block";
                            document.getElementById('emerPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('emerPressureD2').style.display = "block";
                        }
                      else {
                        document.getElementById('emerPressureS2').innerHTML = SystolicPressureInput;
                        document.getElementById('emerPressureS2').style.display = "block";
                        document.getElementById('emerPressureD2').innerHTML = DiastolicPressureInput;
                        document.getElementById('emerPressureD2').style.display = "block";

                        document.getElementById('lowPressureS2').style.display = "none";
                        document.getElementById('lowPressureD2').style.display = "none";
                        document.getElementById('natPressureS2').style.display = "none";
                        document.getElementById('natPressureD2').style.display = "none";
                        document.getElementById('HighPressureS2').style.display = "none";
                        document.getElementById('HighPressureD2').style.display = "none";
                        document.getElementById('VeryHighPressureS2').style.display = "none";
                        document.getElementById('VeryHighPressureD2').style.display = "none";
                        document.getElementById('kindofPressureD2').style.display = "none";
                        document.getElementById('kindofPressureS2').style.display = "none";
                      }
                      


                       
                }
                else {
                    if (SystolicPressureInput > 220) {
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أقل من 221  للمصابين";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('pressure_result2').innerHTML = "مشكلة في الأرقام المدخلة "
    
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                        document.getElementById('pressure_message2').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                        document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                           
                        document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasNoPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasNoPressureProgressBarS').style.display="none";
                           document.getElementById('hasNoPressureProgressBarD').style.display="none";
    
                            document.getElementById('hasPressureProgressBarS').style.display="none";
                            document.getElementById('hasPressureProgressBarD').style.display="none";
    
                        }
                    }

                         
                 if (DiastolicPressureInput > 180) {
                    document.getElementById('pressure_result2').innerHTML = "مشكلة في الأرقام المدخلة "

                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                        = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                    document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                    document.getElementById('pressure_message2').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                    document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                       
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                        = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أقل من 181 للمصابين ";
                    document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";

                    document.getElementById('hasNoPressure').style.display="block";
                    document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                    
                    
                    document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                  
                    var h1 = document.getElementById('hasPressure').style.display==="none";
                   
                    var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                    var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";

                    if(h1) {

                        document.getElementById('hasNoPressure').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').style.display="none";
                       


                    }

                    if (hp1 && hp2) {
                        document.getElementById('hasNoPressureProgressBarS').style.display="block";
                        document.getElementById('hasNoPressureProgressBarD').style.display="block";

                        
                    }
                    else {
                       document.getElementById('hasNoPressureProgressBarS').style.display="none";
                       document.getElementById('hasNoPressureProgressBarD').style.display="none";

                        document.getElementById('hasPressureProgressBarS').style.display="none";
                        document.getElementById('hasPressureProgressBarD').style.display="none";

                    }
                }



                }

           

              

                //pressure ends


                if (WaistlineInput < 69) {
                    document.getElementById('RequiredFieldSpanForWaistline').innerHTML
                        = "ادخال غير صحيح ، محيط الخصر للنساء يجب أن يكون فوق 79";
                    document.getElementById('RequiredFieldSpanForWaistline').style.display = "inline";
                }
                else if (WaistlineInput >= 70 && WaistlineInput <= 80) {
                    document.getElementById('Waistline_result').innerHTML = "طبيعي" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleNat;
                    var isEmptyW1 = document.getElementById('WaistlineNatHigh').innerHTML==="";
                    var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                    if(isEmptyW1 &&  isEmptyW2) {
                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";
                    }
                    else {
                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";

                        document.getElementById('WaistlineNatHigh').style.display = "none";
                        document.getElementById('WaistlineVeryHigh').style.display = "none";

                    }


                    document.getElementById('Waistline_icon').className = "flaticon-good";
                }

                else if (WaistlineInput >= 81 && WaistlineInput <= 87) {
                    document.getElementById('Waistline_result').innerHTML = "مرتفع" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleHighNot;

                    var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                    var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                    if(isEmptyW3 && isEmptyW2) {
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";
                    }
                    else {
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";

                        document.getElementById('WaistlineNat').style.display = "none";
                        document.getElementById('WaistlineVeryHigh').style.display = "none";
                    }


                    document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                }


                else if (WaistlineInput >= 88 && WaistlineInput <= 200) {
                    document.getElementById('Waistline_result').innerHTML = " مرتفع جدا" + " " + WaistlineInput;
                    document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleVeryHighNot;
    
                    var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                    var isEmptyW = document.getElementById('WaistlineNatHigh').innerHTML==="";
                    document.getElementById('WaistlineMessure').style.display="block";
                    document.getElementById('WaistlineHideAndShow').style.display="block";
                     if(isEmptyW3 && isEmptyW) {
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";
                     }
                     else {
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";

                        document.getElementById('WaistlineNat').style.display = "none";
                        document.getElementById('WaistlineNatHigh').style.display = "none";

                     }

                }
                else {
                    WaistlinePressureMessagesForFemale();
                }


            }
            }
        }
    }


}

function HasNoDiabetesAndNoPressureFemaleFastChoice() {
    var isFemale = document.getElementById('female').checked;
    var hasNoDiabtes = document.getElementById('no_ihavenot').checked;
    var isFast = document.getElementById('fast').checked;
    var hasNoPressure = document.getElementById('no_ihavnotP').checked;

    if (isFemale == true) {
        if (hasNoDiabtes == true) {
            if (hasNoPressure == true) {


                if (isFast == true) {
                    //alert('male do not have diabetes and fast');

                    var HbA1cForFastInput = parseFloat(document.getElementById('HbA1cForFast').value);
                    var DiastolicPressureInput = parseFloat(document.getElementById('DiastolicPressure').value);
                    var SystolicPressureInput = parseFloat(document.getElementById('SystolicPressure').value);
                    var WaistlineInput = parseFloat(document.getElementById('Waistline').value);

                    //start diabetes 
                    if (HbA1cForFastInput < 50) {
                        document.getElementById('RequiredFieldSpanHbA1cForFast').innerHTML =
                        " تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                    document.getElementById('RequiredFieldSpanHbA1cForFast').style.display = "inline";
                    document.getElementById('hasNoDiabetesFastChoice').setAttribute("hidden", false);

                    document.getElementById('hasDiabetesHbA1c').setAttribute("hidden", true);
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute("hidden", true);
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute("hidden", true);

                    document.getElementById('HbA1c_result2').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message2').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";


                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }
    

                    }

                    else if (HbA1cForFastInput >= 50 && HbA1cForFastInput <= 70) {
                    document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                    document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                    
                    document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                    document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');

                    var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                    var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                    var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";

                    var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                    var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                    var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";

                    if(h1 && h2 && h3) {

                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";

                    }
                    else {
                       
                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                        document.getElementById('hasDiabetesHbA1c').style.display="none";


                    }

                    if (hp1 && hp2 && hp3) {
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
                        
                    }
                    else {
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";

                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                        document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";

                    }




                        
                        
                        document.getElementById('HbA1c_result2').innerHTML = "منخفض" + " " + HbA1cForFastInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message2').innerHTML = hasNoDiabetesMale;

                       //alert ('1- ' + hasNoDiabetesMale);
                       //alert(document.getElementById('HbA1c_message').innerHTML);

                        var dia1 = document.getElementById('dbiNat4').innerHTML==="";
                        var dia2 = document.getElementById('beforeDia4').innerHTML==="";
                        var dia3 = document.getElementById('gotDia4').innerHTML==="";

                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('dbiLow4').innerHTML=  HbA1cForFastInput;
                            document.getElementById('dbiLow4').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('dbiLow4').innerHTML=  HbA1cForFastInput;
                            document.getElementById('dbiLow4').style.display="inline";

                            document.getElementById('dbiNat4').style.display="none";
                            document.getElementById('beforeDia4').style.display="none";
                            document.getElementById('gotDia4').style.display="none";


                        }
                       


                    }

                    else if (HbA1cForFastInput >= 71 && HbA1cForFastInput <= 99) {
                        
                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }

                        document.getElementById('HbA1c_result2').innerHTML = "طبيعي" + " " + HbA1cForFastInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message2').innerHTML = hasNosDiabetesNatMale;
                    

                        var dia1 = document.getElementById('dbiLow4').innerHTML==="";
                        var dia2 = document.getElementById('beforeDia4').innerHTML==="";
                        var dia3 = document.getElementById('gotDia4').innerHTML==="";

                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('dbiNat4').innerHTML=HbA1cForFastInput;
                            document.getElementById('dbiNat4').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('dbiNat4').innerHTML=HbA1cForFastInput;
                            document.getElementById('dbiNat4').style.display="inline";

                            document.getElementById('dbiLow4').style.display="none";
                            document.getElementById('beforeDia4').style.display="none";
                            document.getElementById('gotDia4').style.display="none";


                        }

                      
                    }
                    else if (HbA1cForFastInput >= 100 && HbA1cForFastInput <= 125) {
                  
                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }

                        document.getElementById('HbA1c_result2').innerHTML = "ماقبل الإصابة" + " " + HbA1cForFastInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message2').innerHTML = hasNosDiabetesBeforeMale;

                      

                        document.getElementById('beforeDia4').innerHTML=HbA1cForFastInput;
                        document.getElementById('beforeDia4').style.display="inline";

                        var dia1 = document.getElementById('dbiLow4').innerHTML==="";
                        var dia2 = document.getElementById('dbiNat4').innerHTML==="";
                        var dia3 = document.getElementById('gotDia4').innerHTML==="";

                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('beforeDia2').innerHTML=HbA1cForFastInput;
                            document.getElementById('beforeDia2').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('beforeDia4').innerHTML=HbA1cForFastInput;
                            document.getElementById('beforeDia4').style.display="inline";

                            document.getElementById('dbiLow4').style.display="none";
                            document.getElementById('dbiNat4').style.display="none";
                            document.getElementById('gotDia4').style.display="none";


                        }

                    }

                    else if (HbA1cForFastInput >= 126 && HbA1cForFastInput <= 600) {
                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="block";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }

                        document.getElementById('HbA1c_result2').innerHTML = "مصاب" + " " + HbA1cForFastInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message2').innerHTML = hasNosDiabetesGotDiabetesMale;



                        document.getElementById('gotDia4').innerHTML=HbA1cForFastInput;
                        document.getElementById('gotDia4').style.display="inline";


                        var dia1 = document.getElementById('dbiLow4').innerHTML==="";
                        var dia2 = document.getElementById('dbiNat4').innerHTML==="";
                        var dia3 = document.getElementById('beforeDia4').innerHTML==="";

                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('gotDia4').innerHTML=HbA1cForFastInput;
                            document.getElementById('gotDia4').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('gotDia4').innerHTML=HbA1cForFastInput;
                            document.getElementById('gotDia4').style.display="inline";

                            document.getElementById('dbiLow4').style.display="none";
                            document.getElementById('dbiNat4').style.display="none";
                            document.getElementById('beforeDia4').style.display="none";


                        }
                    }

                  
                    else {
                        document.getElementById('RequiredFieldSpanHbA1cForFast').innerHTML =
                        " تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                    document.getElementById('RequiredFieldSpanHbA1cForFast').style.display = "inline";
                    document.getElementById('hasDiabetesHbA1c').setAttribute("hidden", true);
                    document.getElementById('hasNoDiabetesHbA1c').setAttribute("hidden", true);
                    document.getElementById('hasNoDiabetesTwoHours').setAttribute("hidden", true);
                
                    document.getElementById('HbA1c_result2').innerHTML = "مشكلة في الرقم المدخل ";
                    document.getElementById('HbA1c_message2').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute("hidden", false);


                        document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesTwoHours').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesTwoHoursProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
    
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesTwoHours').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesFastChoice').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesTwoHours').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }

                       
    
                    }
                    //end diabetes



                    //pressure 
                    if (DiastolicPressureInput < 20) {
                        //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق أو يساوي 20 للمصابين بالضغط ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
    
                           
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                        
                        
                        document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasNoPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasNoPressureProgressBarS').style.display="none";
                           document.getElementById('hasNoPressureProgressBarD').style.display="none";
    
                            document.getElementById('hasPressureProgressBarS').style.display="none";
                            document.getElementById('hasPressureProgressBarD').style.display="none";
    
                        }
                    }
    
                    if (SystolicPressureInput < 50) {
                        //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانقباضي فوق  أو يساوي 50 للمصابين بالضغط ";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
    
                           
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                        
                        
                        document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasNoPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasNoPressureProgressBarS').style.display="none";
                           document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            document.getElementById('hasPressureProgressBarS').style.display="none";
                            document.getElementById('hasPressureProgressBarD').style.display="none";
    
                        }
                    }
    
    
                     if (DiastolicPressureInput >= 20 && DiastolicPressureInput <= 59
                        && SystolicPressureInput >= 50 && SystolicPressureInput <= 89) {
                        //alert("ضغط الدم لديك منخفض عليك مراجعة الطبيب");
                        document.getElementById('pressure_result2').innerHTML = "منخفض " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleLow;
    
                         
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                         
                         
                         document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasNoPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasNoPressure').style.display="block";
                             document.getElementById('hasPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasNoPressureProgressBarS').style.display="block";
                             document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             document.getElementById('hasPressureProgressBarS').style.display="none";
                             document.getElementById('hasPressureProgressBarD').style.display="none";
     
                         }
                         
    
                         var pressureD1 = document.getElementById('natPressureS2').innerHTML==="";
                         var pressureS1 = document.getElementById('natPressureD2').innerHTML==="";
                         var pressureD2 = document.getElementById('kindofPressureS2').innerHTML==="";
                         var pressureS2 = document.getElementById('kindofPressureD2').innerHTML==="";
    
                         var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                         var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                         var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                         var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                         var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                         var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
    
                          if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                            document.getElementById('lowPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('lowPressureS2').style.display = "block";
                            document.getElementById('lowPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('lowPressureD2').style.display = "block";
                          }
                          else {
                            document.getElementById('lowPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('lowPressureS2').style.display = "block";
                            document.getElementById('lowPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('lowPressureD2').style.display = "block";
    
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('kindofPressureS2').style.display = "none";
                            document.getElementById('kindofPressureD2').style.display = "none";
                            document.getElementById('VeryHighPressureS2').style.display = "none";
                            document.getElementById('VeryHighPressureD2').style.display = "none";
                            document.getElementById('emerPressureS2').style.display = "none";
                            document.getElementById('emerPressureD2').style.display = "none";
    
                            document.getElementById('HighPressureS2').style.display = "none";
                            document.getElementById('HighPressureD2').style.display = "none";
                          }
    
                    }
    
                    else if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 79
                        && SystolicPressureInput >= 90 && SystolicPressureInput <= 119) {
                        document.getElementById('pressure_result2').innerHTML = "طبيعي " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasPressureMaleNat;
    
       
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                         
                         
                         document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasNoPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasNoPressure').style.display="block";
                             document.getElementById('hasPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasNoPressureProgressBarS').style.display="block";
                             document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             document.getElementById('hasPressureProgressBarS').style.display="none";
                             document.getElementById('hasPressureProgressBarD').style.display="none";
     
                         }
                         var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                         var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                         var pressureD2 = document.getElementById('kindofPressureS2').innerHTML==="";
                         var pressureS2 = document.getElementById('kindofPressureD2').innerHTML==="";
    
                         var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                         var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                         var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                         var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                         var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                         var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
    
    
                          if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                                document.getElementById('natPressureS2').innerHTML = SystolicPressureInput;
                                document.getElementById('natPressureS2').style.display = "block";
                                document.getElementById('natPressureD2').innerHTML = DiastolicPressureInput;
                                document.getElementById('natPressureD2').style.display = "block";
        
        
                          }
                          else {
                            document.getElementById('natPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('natPressureS2').style.display = "block";
                            document.getElementById('natPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('natPressureD2').style.display = "block";
    
    
                            document.getElementById('lowPressureS2').style.display = "none";
                            document.getElementById('lowPressureD2').style.display = "none";
                            document.getElementById('kindofPressureS2').style.display = "none";
                            document.getElementById('kindofPressureD2').style.display = "none";
                            document.getElementById('VeryHighPressureS2').style.display = "none";
                            document.getElementById('VeryHighPressureD2').style.display = "none";
                            document.getElementById('emerPressureS2').style.display = "none";
                            document.getElementById('emerPressureD2').style.display = "none";
                            document.getElementById('HighPressureS2').style.display = "none";
                            document.getElementById('HighPressureD2').style.display = "none";
                          }
                           
                           
                        
                    }
    
                    else if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 79
                        && SystolicPressureInput >= 120 && SystolicPressureInput <= 129) {
                        document.getElementById('pressure_result2').innerHTML = "مرتفع قليلا   " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleKindOf;
                            
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                         
                         
                         document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasNoPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasNoPressure').style.display="block";
                             document.getElementById('hasPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasNoPressureProgressBarS').style.display="block";
                             document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             document.getElementById('hasPressureProgressBarS').style.display="none";
                             document.getElementById('hasPressureProgressBarD').style.display="none";
     
                         }
    
                         var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                         var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                         var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                         var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";
    
                         var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                         var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                         var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                         var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                         var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                         var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
                         
    
    
                         
                         if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                                document.getElementById('kindofPressureS2').innerHTML = SystolicPressureInput;
                                document.getElementById('kindofPressureS2').style.display = "block";
                                document.getElementById('kindofPressureD2').innerHTML = DiastolicPressureInput;
                                document.getElementById('kindofPressureD2').style.display = "block";
                          }
                          else {
                            document.getElementById('kindofPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('kindofPressureS2').style.display = "block";
                            document.getElementById('kindofPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('kindofPressureD2').style.display = "block";
    
    
                            document.getElementById('lowPressureS2').style.display = "none";
                            document.getElementById('lowPressureD2').style.display = "none";
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('natPressureD2').style.display = "none";
                            document.getElementById('VeryHighPressureS2').style.display = "none";
                            document.getElementById('VeryHighPressureD2').style.display = "none";
                            document.getElementById('emerPressureS2').style.display = "none";
                            document.getElementById('emerPressureD2').style.display = "none";
                            document.getElementById('HighPressureS2').style.display = "none";
                            document.getElementById('HighPressureD2').style.display = "none";
                          }
                           
    
    
    
        
                      
                        document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    }
    
    
                    else if (DiastolicPressureInput >= 80 && DiastolicPressureInput <= 89
                        && SystolicPressureInput >= 130 && SystolicPressureInput <= 139) {
                        document.getElementById('pressure_result2').innerHTML = " مرتفع  " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleHigh;
                        document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
       
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                        
                        
                        document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasNoPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasNoPressureProgressBarS').style.display="block";
                           document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            document.getElementById('hasPressureProgressBarS').style.display="none";
                            document.getElementById('hasPressureProgressBarD').style.display="none";
    
                        }
    
                        var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                        var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                        var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                        var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";
    
                        var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                        var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                        var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                        var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                        var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                        var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
    
                        if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                                document.getElementById('HighPressureS2').innerHTML = SystolicPressureInput;
                                document.getElementById('HighPressureS2').style.display = "block";
                                document.getElementById('HighPressureD2').innerHTML = DiastolicPressureInput;
                                document.getElementById('HighPressureD2').style.display = "block";
                          }
                          else {
                            document.getElementById('HighPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('HighPressureS2').style.display = "block";
                            document.getElementById('HighPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('HighPressureD2').style.display = "block";
    
    
                            document.getElementById('lowPressureS2').style.display = "none";
                            document.getElementById('lowPressureD2').style.display = "none";
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('natPressureD2').style.display = "none";
                            document.getElementById('VeryHighPressureS2').style.display = "none";
                            document.getElementById('VeryHighPressureD2').style.display = "none";
                            document.getElementById('emerPressureS2').style.display = "none";
                            document.getElementById('emerPressureD2').style.display = "none";
                            document.getElementById('kindofPressureD2').style.display = "none";
                            document.getElementById('kindofPressureS2').style.display = "none";
                          }
                           
    
                    }
    
    
                    else if (DiastolicPressureInput >= 90 && DiastolicPressureInput <= 119
                        && SystolicPressureInput >= 140 && SystolicPressureInput <= 179) {
                        document.getElementById('pressure_result2').innerHTML = " مرتفع جدا  " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasNoPressureVeryHighMale;
                           
                           document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
    
    
       
                           document.getElementById('hasNoPressure').style.display="block";
                           document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                           
                           
                           document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                           document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                         
                           var h1 = document.getElementById('hasPressure').style.display==="none";
                          
                           var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                           var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
       
                           if(h1) {
       
                               document.getElementById('hasNoPressure').style.display="block";
       
                           }
                           else {
                              
                               document.getElementById('hasNoPressure').style.display="block";
                               document.getElementById('hasPressure').style.display="none";
                              
       
       
                           }
       
                           if (hp1 && hp2) {
                               document.getElementById('hasNoPressureProgressBarS').style.display="block";
                               document.getElementById('hasNoPressureProgressBarD').style.display="block";
      
                               
                           }
                           else {
                              document.getElementById('hasNoPressureProgressBarS').style.display="block";
                              document.getElementById('hasNoPressureProgressBarD').style.display="block";
      
                               document.getElementById('hasPressureProgressBarS').style.display="none";
                               document.getElementById('hasPressureProgressBarD').style.display="none";
       
                           }
    
                           var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                           var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                           var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                           var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";
       
                           var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                           var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                           var pressureD4 = document.getElementById('HighPressureS2').innerHTML==="";
                           var pressureS4 = document.getElementById('HighPressureS2').innerHTML==="";
                           var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                           var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
       
    
                           if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                                    document.getElementById('VeryHighPressureS2').innerHTML = SystolicPressureInput;
                                    document.getElementById('VeryHighPressureS2').style.display = "block";
                                    document.getElementById('VeryHighPressureD2').innerHTML = DiastolicPressureInput;
                                    document.getElementById('VeryHighPressureD2').style.display = "block";
                            }
                          else {
                            document.getElementById('VeryHighPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('VeryHighPressureS2').style.display = "block";
                            document.getElementById('VeryHighPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('VeryHighPressureD2').style.display = "block";
    
                            document.getElementById('lowPressureS2').style.display = "none";
                            document.getElementById('lowPressureD2').style.display = "none";
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('natPressureD2').style.display = "none";
                            document.getElementById('HighPressureS2').style.display = "none";
                            document.getElementById('HighPressureD2').style.display = "none";
                            document.getElementById('emerPressureS2').style.display = "none";
                            document.getElementById('emerPressureD2').style.display = "none";
                            document.getElementById('kindofPressureD2').style.display = "none";
                            document.getElementById('kindofPressureS2').style.display = "none";
                          }
                          
                        
    
                    }
    
    
                    else if (DiastolicPressureInput >= 120 && DiastolicPressureInput <= 180
                        && SystolicPressureInput >= 180 && SystolicPressureInput <= 220) {
                        document.getElementById('pressure_result2').innerHTML = " ارتفاع طارئ  " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasNoPressureEmergencyHighMale;
    
                            
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                         
                         
                         document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasNoPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasNoPressure').style.display="block";
                             document.getElementById('hasPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasNoPressureProgressBarS').style.display="block";
                             document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             document.getElementById('hasPressureProgressBarS').style.display="none";
                             document.getElementById('hasPressureProgressBarD').style.display="none";
     
                         }
    
                        var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                        var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                        var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                        var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";
    
                        var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                        var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                        var pressureD4 = document.getElementById('HighPressureS2').innerHTML==="";
                        var pressureS4 = document.getElementById('HighPressureS2').innerHTML==="";
                        var pressureD5 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                        var pressureS5 = document.getElementById('VeryHighPressureD2').innerHTML==="";
    
    
    
                          if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                                document.getElementById('emerPressureS2').innerHTML = SystolicPressureInput;
                                document.getElementById('emerPressureS2').style.display = "block";
                                document.getElementById('emerPressureD2').innerHTML = DiastolicPressureInput;
                                document.getElementById('emerPressureD2').style.display = "block";
                            }
                          else {
                            document.getElementById('emerPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('emerPressureS2').style.display = "block";
                            document.getElementById('emerPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('emerPressureD2').style.display = "block";
    
                            document.getElementById('lowPressureS2').style.display = "none";
                            document.getElementById('lowPressureD2').style.display = "none";
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('natPressureD2').style.display = "none";
                            document.getElementById('HighPressureS2').style.display = "none";
                            document.getElementById('HighPressureD2').style.display = "none";
                            document.getElementById('VeryHighPressureS2').style.display = "none";
                            document.getElementById('VeryHighPressureD2').style.display = "none";
                            document.getElementById('kindofPressureD2').style.display = "none";
                            document.getElementById('kindofPressureS2').style.display = "none";
                          }
                          
    
    
                           
                    }
                    else {
                        if (SystolicPressureInput > 220) {
                            document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                                = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أقل من 221  للمصابين";
                            document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                            
                            document.getElementById('pressure_result2').innerHTML = "مشكلة في الأرقام المدخلة "
        
                            document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                                = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                            document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                            document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                                = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                            document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                            document.getElementById('pressure_message2').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                            document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                               
                            document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                            document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                          
                            var h1 = document.getElementById('hasPressure').style.display==="none";
                           
                            var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                            var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
        
                            if(h1) {
        
                                document.getElementById('hasNoPressure').style.display="block";
        
                            }
                            else {
                               
                                document.getElementById('hasNoPressure').style.display="block";
                                document.getElementById('hasPressure').style.display="none";
                               
        
        
                            }
        
                            if (hp1 && hp2) {
                                document.getElementById('hasNoPressureProgressBarS').style.display="block";
                                document.getElementById('hasNoPressureProgressBarD').style.display="block";
        
                                
                            }
                            else {
                               document.getElementById('hasNoPressureProgressBarS').style.display="none";
                               document.getElementById('hasNoPressureProgressBarD').style.display="none";
        
                                document.getElementById('hasPressureProgressBarS').style.display="none";
                                document.getElementById('hasPressureProgressBarD').style.display="none";
        
                            }
                        }
    
                             
                     if (DiastolicPressureInput > 180) {
                        document.getElementById('pressure_result2').innerHTML = "مشكلة في الأرقام المدخلة "
    
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                        document.getElementById('pressure_message2').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                        document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                           
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أقل من 181 للمصابين ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
    
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                        
                        
                        document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasNoPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasNoPressureProgressBarS').style.display="none";
                           document.getElementById('hasNoPressureProgressBarD').style.display="none";
    
                            document.getElementById('hasPressureProgressBarS').style.display="none";
                            document.getElementById('hasPressureProgressBarD').style.display="none";
    
                        }
                    }
    
    
    
                    }
    
               
    
                          
                     //end pressure
                  


                    if (WaistlineInput < 69) {
                        document.getElementById('RequiredFieldSpanForWaistline').innerHTML
                            = "ادخال غير صحيح ، محيط الخصر للنساء يجب أن يكون فوق 79";
                        document.getElementById('RequiredFieldSpanForWaistline').style.display = "inline";
                    }
                    else if (WaistlineInput >= 70 && WaistlineInput <= 80) {
                        document.getElementById('Waistline_result').innerHTML = "طبيعي" + " " + WaistlineInput;
                        document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleNat;
                        document.getElementById('WaistlineMessure').style.display="block";
                        document.getElementById('WaistlineHideAndShow').style.display="block";
                        var isEmptyW1 = document.getElementById('WaistlineNatHigh').innerHTML==="";
                        var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";
    
                        if(isEmptyW1 &&  isEmptyW2) {
                            document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineNat').style.display = "block";
                        }
                        else {
                            document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineNat').style.display = "block";
    
                            document.getElementById('WaistlineNatHigh').style.display = "none";
                            document.getElementById('WaistlineVeryHigh').style.display = "none";
    
                        }

                        document.getElementById('Waistline_icon').className = "flaticon-good";
                    }

                    else if (WaistlineInput >= 81 && WaistlineInput <= 87) {
                        document.getElementById('Waistline_result').innerHTML = "مرتفع" + " " + WaistlineInput;
                        document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleHighNot;
                        var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                        var isEmptyW2 = document.getElementById('WaistlineVeryHigh').innerHTML==="";
                        document.getElementById('WaistlineMessure').style.display="block";
                        document.getElementById('WaistlineHideAndShow').style.display="block";
                        if(isEmptyW3 && isEmptyW2) {
                            document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineNatHigh').style.display = "block";
                        }
                        else {
                            document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineNatHigh').style.display = "block";
    
                            document.getElementById('WaistlineNat').style.display = "none";
                            document.getElementById('WaistlineVeryHigh').style.display = "none";
                        }


                        document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    }


                    else if (WaistlineInput >= 88 && WaistlineInput <= 200) {
                        document.getElementById('Waistline_result').innerHTML = " مرتفع جدا" + " " + WaistlineInput;
                        document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleVeryHighNot;

                        var isEmptyW3 = document.getElementById('WaistlineNat').innerHTML==="";
                        var isEmptyW = document.getElementById('WaistlineNatHigh').innerHTML==="";
                        document.getElementById('WaistlineMessure').style.display="block";
                        document.getElementById('WaistlineHideAndShow').style.display="block";
                         if(isEmptyW3 && isEmptyW) {
                            document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineVeryHigh').style.display = "block";
                         }
                         else {
                            document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                            document.getElementById('WaistlineVeryHigh').style.display = "block";
    
                            document.getElementById('WaistlineNat').style.display = "none";
                            document.getElementById('WaistlineNatHigh').style.display = "none";
    
                         }

                    }
                    else {
                        WaistlinePressureMessagesForFemale();
                    }
                }
            }
        }
    }

}

function HasNoDiabetesAndNoPressureFemaleAfterTwoHours() {
    var isFemale = document.getElementById('female').checked;
    var hasNoDiabtes = document.getElementById('no_ihavenot').checked;
    var afterTwoHour = document.getElementById('afterTwoHours').checked;
    var hasNoPressure = document.getElementById('no_ihavnotP').checked;

    if (isFemale == true) {
        if (hasNoDiabtes == true) {
            if (hasNoPressure == true) {


                if (afterTwoHour == true) {
                    //alert('male do not have diabetes and fast');

                    var HbA1cAfterTwoHoursInput = parseFloat(document.getElementById('HbA1cAfterTwoHours').value);
                    var DiastolicPressureInput = parseFloat(document.getElementById('DiastolicPressure').value);
                    var SystolicPressureInput = parseFloat(document.getElementById('SystolicPressure').value);
                    var WaistlineInput = parseFloat(document.getElementById('Waistline').value);

                    //start diabetes 
                    if (HbA1cAfterTwoHoursInput < 50) {
                        document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').innerHTML =
                        " تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                    document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').style.display = "inline";
    
                    "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                    document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').setAttribute("hidden", false);
    
                        document.getElementById('HbA1c_result4').innerHTML = "مشكلة في الرقم المدخل ";
                        document.getElementById('HbA1c_message4').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute("hidden", true);
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute("hidden", true);
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute("hidden", true);
                        
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }
    
    
                    }
    
                    else if (HbA1cAfterTwoHoursInput >= 50 && HbA1cAfterTwoHoursInput <= 70) {
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
    
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }
    
                            
                        document.getElementById('HbA1c_result4').innerHTML = "منخفض" + " " + HbA1cAfterTwoHoursInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message4').innerHTML = hasNoDiabetesMale;
    
                       //alert ('1- ' + hasNoDiabetesMale);
                       //alert(document.getElementById('HbA1c_message').innerHTML);
    
                        var dia1 = document.getElementById('dbiNat2').innerHTML==="";
                        var dia2 = document.getElementById('beforeDia2').innerHTML==="";
                        var dia3 = document.getElementById('gotDia2').innerHTML==="";
    
                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('dbiLow2').innerHTML=  HbA1cAfterTwoHoursInput;
                            document.getElementById('dbiLow2').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('dbiLow2').innerHTML=  HbA1cAfterTwoHoursInput;
                            document.getElementById('dbiLow2').style.display="inline";
    
                            document.getElementById('dbiNat2').style.display="none";
                            document.getElementById('beforeDia2').style.display="none";
                            document.getElementById('gotDia2').style.display="none";
    
    
                        }
                       
    
    
                    }
    
                    else if (HbA1cAfterTwoHoursInput >= 71 && HbA1cAfterTwoHoursInput <= 139) {
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
    
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }
    
                        document.getElementById('HbA1c_result4').innerHTML = "طبيعي" + " " + HbA1cAfterTwoHoursInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message4').innerHTML = hasNosDiabetesNatMale;
                 
                        var dia1 = document.getElementById('dbiLow2').innerHTML==="";
                        var dia2 = document.getElementById('beforeDia2').innerHTML==="";
                        var dia3 = document.getElementById('gotDia2').innerHTML==="";
    
                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('dbiNat2').innerHTML=HbA1cAfterTwoHoursInput;
                            document.getElementById('dbiNat2').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('dbiNat2').innerHTML=HbA1cAfterTwoHoursInput;
                            document.getElementById('dbiNat2').style.display="inline";
    
                            document.getElementById('dbiLow2').style.display="none";
                            document.getElementById('beforeDia2').style.display="none";
                            document.getElementById('gotDia2').style.display="none";
    
    
                        }
    
                      
                    }
                    else if (HbA1cAfterTwoHoursInput >= 140 && HbA1cAfterTwoHoursInput <= 199) {
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
    
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }
    
                        document.getElementById('HbA1c_result4').innerHTML = "ماقبل الإصابة" + " " + HbA1cAfterTwoHoursInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message4').innerHTML = hasNosDiabetesBeforeMale;
    
    
    
              
                        var dia1 = document.getElementById('dbiLow2').innerHTML==="";
                        var dia2 = document.getElementById('dbiNat2').innerHTML==="";
                        var dia3 = document.getElementById('gotDia2').innerHTML==="";
    
                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('beforeDia2').innerHTML=HbA1cAfterTwoHoursInput;
                            document.getElementById('beforeDia2').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('beforeDia2').innerHTML=HbA1cAfterTwoHoursInput;
                            document.getElementById('beforeDia2').style.display="inline";
    
                            document.getElementById('dbiLow2').style.display="none";
                            document.getElementById('dbiNat2').style.display="none";
                            document.getElementById('gotDia2').style.display="none";
    
    
                        }
    
                    }
    
                    else if (HbA1cAfterTwoHoursInput >= 200 && HbA1cAfterTwoHoursInput <= 600) {
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="block";
    
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }
    
                        document.getElementById('HbA1c_result4').innerHTML = "مصاب" + " " + HbA1cAfterTwoHoursInput + " ملجم/دسل ";
                        document.getElementById('HbA1c_message4').innerHTML = hasNosDiabetesGotDiabetesMale;
    
    
    
                   
    
                        var dia1 = document.getElementById('dbiLow2').innerHTML==="";
                        var dia2 = document.getElementById('dbiNat2').innerHTML==="";
                        var dia3 = document.getElementById('beforeDia2').innerHTML==="";
    
                        if(dia1 && dia2 && dia3) {
                          
    
                            document.getElementById('gotDia2').innerHTML=HbA1cAfterTwoHoursInput;
                            document.getElementById('gotDia2').style.display="inline";
                           
                        }
                        else {
                            document.getElementById('gotDia2').innerHTML=HbA1cAfterTwoHoursInput;
                            document.getElementById('gotDia2').style.display="inline";
    
                            document.getElementById('dbiLow2').style.display="none";
                            document.getElementById('dbiNat2').style.display="none";
                            document.getElementById('beforeDia2').style.display="none";
    
    
                        }
                    }
    
                 
                    else {
                        document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').innerHTML =
                        " تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                    document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').style.display = "inline";
    
                    "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
                    document.getElementById('RequiredFieldSpanHbA1cAfterTwoHours').setAttribute("hidden", false);
    
                        document.getElementById('HbA1c_result4').innerHTML = "مشكلة في الرقم المدخل ";
                        document.getElementById('HbA1c_message4').innerHTML =
                        "تأكد من المدخل الخاص بقياس السكر  ،  يجب أن يكون فوق 50 ودون 600";
    
                        document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                        document.getElementById('hasDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1c').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesFastChoice').setAttribute('style', 'display: none !important;');
                        
                        document.getElementById('hasNoDiabetesFastChoiceProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasNoDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasDiabetesHbA1cProgressBar').setAttribute('style', 'display: none !important;');
                        
                        var h1 = document.getElementById('hasDiabetesHbA1c').style.display==="none";
                        var h2 = document.getElementById('hasNoDiabetesHbA1c').style.display==="none";
                        var h3 = document.getElementById('hasNoDiabetesFastChoice').style.display==="none";
    
                        var hp1 = document.getElementById('hasDiabetesHbA1cProgressBar').style.display==="none";
                        var hp2 = document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display==="none";
                        var hp3 = document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display==="none";
    
                        if(h1 && h2 && h3) {
    
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoDiabetesTwoHours').style.display="block";
                            document.getElementById('hasNoDiabetesHbA1c').style.display="none";
                            document.getElementById('hasNoDiabetesFastChoice').style.display="none";
                            document.getElementById('hasDiabetesHbA1c').style.display="none";
    
    
                        }
    
                        if (hp1 && hp2 && hp3) {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
                            
                        }
                        else {
                            document.getElementById('hasNoDiabetesTwoHoursProgressBar').style.display="none";
    
                            document.getElementById('hasNoDiabetesFastChoiceProgressBar').style.display="none";
                            document.getElementById('hasNoDiabetesHbA1cProgressBar').style.display="none";
                            document.getElementById('hasDiabetesHbA1cProgressBar').style.display="none";
    
                        }
    
                        
                    }
 
                    //end diabetes

                    


                      //pressure 


                      if (DiastolicPressureInput < 20) {
                        //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق أو يساوي 20 للمصابين بالضغط ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
    
                           
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                        
                        
                        document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasNoPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasNoPressureProgressBarS').style.display="none";
                           document.getElementById('hasNoPressureProgressBarD').style.display="none";
    
                            document.getElementById('hasPressureProgressBarS').style.display="none";
                            document.getElementById('hasPressureProgressBarD').style.display="none";
    
                        }
                    }
    
                    if (SystolicPressureInput < 50) {
                        //alert("الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانبساطي فوق 20 للمصابين بالضغط");
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "الإدخال غير صحيح ، يجب أن يكون قياس الضغط الانقباضي فوق  أو يساوي 50 للمصابين بالضغط ";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
    
                           
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                        
                        
                        document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasNoPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasNoPressureProgressBarS').style.display="none";
                           document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            document.getElementById('hasPressureProgressBarS').style.display="none";
                            document.getElementById('hasPressureProgressBarD').style.display="none";
    
                        }
                    }
    
    
                     if (DiastolicPressureInput >= 20 && DiastolicPressureInput <= 59
                        && SystolicPressureInput >= 50 && SystolicPressureInput <= 89) {
                        //alert("ضغط الدم لديك منخفض عليك مراجعة الطبيب");
                        document.getElementById('pressure_result2').innerHTML = "منخفض " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleLow;
    
                         
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                         
                         
                         document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasNoPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasNoPressure').style.display="block";
                             document.getElementById('hasPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasNoPressureProgressBarS').style.display="block";
                             document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             document.getElementById('hasPressureProgressBarS').style.display="none";
                             document.getElementById('hasPressureProgressBarD').style.display="none";
     
                         }
                         
    
                         var pressureD1 = document.getElementById('natPressureS2').innerHTML==="";
                         var pressureS1 = document.getElementById('natPressureD2').innerHTML==="";
                         var pressureD2 = document.getElementById('kindofPressureS2').innerHTML==="";
                         var pressureS2 = document.getElementById('kindofPressureD2').innerHTML==="";
    
                         var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                         var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                         var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                         var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                         var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                         var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
    
                          if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                            document.getElementById('lowPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('lowPressureS2').style.display = "block";
                            document.getElementById('lowPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('lowPressureD2').style.display = "block";
                          }
                          else {
                            document.getElementById('lowPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('lowPressureS2').style.display = "block";
                            document.getElementById('lowPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('lowPressureD2').style.display = "block";
    
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('kindofPressureS2').style.display = "none";
                            document.getElementById('kindofPressureD2').style.display = "none";
                            document.getElementById('VeryHighPressureS2').style.display = "none";
                            document.getElementById('VeryHighPressureD2').style.display = "none";
                            document.getElementById('emerPressureS2').style.display = "none";
                            document.getElementById('emerPressureD2').style.display = "none";
    
                            document.getElementById('HighPressureS2').style.display = "none";
                            document.getElementById('HighPressureD2').style.display = "none";
                          }
    
                    }
    
                    else if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 79
                        && SystolicPressureInput >= 90 && SystolicPressureInput <= 119) {
                        document.getElementById('pressure_result2').innerHTML = "طبيعي " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasPressureMaleNat;
    
       
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                         
                         
                         document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasNoPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasNoPressure').style.display="block";
                             document.getElementById('hasPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasNoPressureProgressBarS').style.display="block";
                             document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             document.getElementById('hasPressureProgressBarS').style.display="none";
                             document.getElementById('hasPressureProgressBarD').style.display="none";
     
                         }
                         var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                         var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                         var pressureD2 = document.getElementById('kindofPressureS2').innerHTML==="";
                         var pressureS2 = document.getElementById('kindofPressureD2').innerHTML==="";
    
                         var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                         var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                         var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                         var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                         var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                         var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
    
    
                          if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                                document.getElementById('natPressureS2').innerHTML = SystolicPressureInput;
                                document.getElementById('natPressureS2').style.display = "block";
                                document.getElementById('natPressureD2').innerHTML = DiastolicPressureInput;
                                document.getElementById('natPressureD2').style.display = "block";
        
        
                          }
                          else {
                            document.getElementById('natPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('natPressureS2').style.display = "block";
                            document.getElementById('natPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('natPressureD2').style.display = "block";
    
    
                            document.getElementById('lowPressureS2').style.display = "none";
                            document.getElementById('lowPressureD2').style.display = "none";
                            document.getElementById('kindofPressureS2').style.display = "none";
                            document.getElementById('kindofPressureD2').style.display = "none";
                            document.getElementById('VeryHighPressureS2').style.display = "none";
                            document.getElementById('VeryHighPressureD2').style.display = "none";
                            document.getElementById('emerPressureS2').style.display = "none";
                            document.getElementById('emerPressureD2').style.display = "none";
                            document.getElementById('HighPressureS2').style.display = "none";
                            document.getElementById('HighPressureD2').style.display = "none";
                          }
                           
                           
                        
                    }
    
                    else if (DiastolicPressureInput >= 60 && DiastolicPressureInput <= 79
                        && SystolicPressureInput >= 120 && SystolicPressureInput <= 129) {
                        document.getElementById('pressure_result2').innerHTML = "مرتفع قليلا   " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleKindOf;
                            
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                         
                         
                         document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasNoPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasNoPressure').style.display="block";
                             document.getElementById('hasPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasNoPressureProgressBarS').style.display="block";
                             document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             document.getElementById('hasPressureProgressBarS').style.display="none";
                             document.getElementById('hasPressureProgressBarD').style.display="none";
     
                         }
    
                         var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                         var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                         var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                         var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";
    
                         var pressureD3 = document.getElementById('HighPressureS2').innerHTML==="";
                         var pressureS3 = document.getElementById('HighPressureD2').innerHTML==="";
                         var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                         var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                         var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                         var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
                         
    
    
                         
                         if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                                document.getElementById('kindofPressureS2').innerHTML = SystolicPressureInput;
                                document.getElementById('kindofPressureS2').style.display = "block";
                                document.getElementById('kindofPressureD2').innerHTML = DiastolicPressureInput;
                                document.getElementById('kindofPressureD2').style.display = "block";
                          }
                          else {
                            document.getElementById('kindofPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('kindofPressureS2').style.display = "block";
                            document.getElementById('kindofPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('kindofPressureD2').style.display = "block";
    
    
                            document.getElementById('lowPressureS2').style.display = "none";
                            document.getElementById('lowPressureD2').style.display = "none";
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('natPressureD2').style.display = "none";
                            document.getElementById('VeryHighPressureS2').style.display = "none";
                            document.getElementById('VeryHighPressureD2').style.display = "none";
                            document.getElementById('emerPressureS2').style.display = "none";
                            document.getElementById('emerPressureD2').style.display = "none";
                            document.getElementById('HighPressureS2').style.display = "none";
                            document.getElementById('HighPressureD2').style.display = "none";
                          }
                           
    
    
    
        
                      
                        document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    }
    
    
                    else if (DiastolicPressureInput >= 80 && DiastolicPressureInput <= 89
                        && SystolicPressureInput >= 130 && SystolicPressureInput <= 139) {
                        document.getElementById('pressure_result2').innerHTML = " مرتفع  " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasNoPressureMaleHigh;
                        document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
       
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                        
                        
                        document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasNoPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasNoPressureProgressBarS').style.display="block";
                           document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            document.getElementById('hasPressureProgressBarS').style.display="none";
                            document.getElementById('hasPressureProgressBarD').style.display="none";
    
                        }
    
                        var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                        var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                        var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                        var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";
    
                        var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                        var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                        var pressureD4 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                        var pressureS4 = document.getElementById('VeryHighPressureD2').innerHTML==="";
                        var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                        var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
    
                        if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                                document.getElementById('HighPressureS2').innerHTML = SystolicPressureInput;
                                document.getElementById('HighPressureS2').style.display = "block";
                                document.getElementById('HighPressureD2').innerHTML = DiastolicPressureInput;
                                document.getElementById('HighPressureD2').style.display = "block";
                          }
                          else {
                            document.getElementById('HighPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('HighPressureS2').style.display = "block";
                            document.getElementById('HighPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('HighPressureD2').style.display = "block";
    
    
                            document.getElementById('lowPressureS2').style.display = "none";
                            document.getElementById('lowPressureD2').style.display = "none";
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('natPressureD2').style.display = "none";
                            document.getElementById('VeryHighPressureS2').style.display = "none";
                            document.getElementById('VeryHighPressureD2').style.display = "none";
                            document.getElementById('emerPressureS2').style.display = "none";
                            document.getElementById('emerPressureD2').style.display = "none";
                            document.getElementById('kindofPressureD2').style.display = "none";
                            document.getElementById('kindofPressureS2').style.display = "none";
                          }
                           
    
                    }
    
    
                    else if (DiastolicPressureInput >= 90 && DiastolicPressureInput <= 119
                        && SystolicPressureInput >= 140 && SystolicPressureInput <= 179) {
                        document.getElementById('pressure_result2').innerHTML = " مرتفع جدا  " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasNoPressureVeryHighMale;
                           
                           document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
    
    
       
                           document.getElementById('hasNoPressure').style.display="block";
                           document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                           
                           
                           document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                           document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                         
                           var h1 = document.getElementById('hasPressure').style.display==="none";
                          
                           var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                           var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
       
                           if(h1) {
       
                               document.getElementById('hasNoPressure').style.display="block";
       
                           }
                           else {
                              
                               document.getElementById('hasNoPressure').style.display="block";
                               document.getElementById('hasPressure').style.display="none";
                              
       
       
                           }
       
                           if (hp1 && hp2) {
                               document.getElementById('hasNoPressureProgressBarS').style.display="block";
                               document.getElementById('hasNoPressureProgressBarD').style.display="block";
      
                               
                           }
                           else {
                              document.getElementById('hasNoPressureProgressBarS').style.display="block";
                              document.getElementById('hasNoPressureProgressBarD').style.display="block";
      
                               document.getElementById('hasPressureProgressBarS').style.display="none";
                               document.getElementById('hasPressureProgressBarD').style.display="none";
       
                           }
    
                           var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                           var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                           var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                           var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";
       
                           var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                           var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                           var pressureD4 = document.getElementById('HighPressureS2').innerHTML==="";
                           var pressureS4 = document.getElementById('HighPressureS2').innerHTML==="";
                           var pressureD5 = document.getElementById('emerPressureS2').innerHTML==="";
                           var pressureS5 = document.getElementById('emerPressureD2').innerHTML==="";
       
    
                           if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                                    document.getElementById('VeryHighPressureS2').innerHTML = SystolicPressureInput;
                                    document.getElementById('VeryHighPressureS2').style.display = "block";
                                    document.getElementById('VeryHighPressureD2').innerHTML = DiastolicPressureInput;
                                    document.getElementById('VeryHighPressureD2').style.display = "block";
                            }
                          else {
                            document.getElementById('VeryHighPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('VeryHighPressureS2').style.display = "block";
                            document.getElementById('VeryHighPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('VeryHighPressureD2').style.display = "block";
    
                            document.getElementById('lowPressureS2').style.display = "none";
                            document.getElementById('lowPressureD2').style.display = "none";
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('natPressureD2').style.display = "none";
                            document.getElementById('HighPressureS2').style.display = "none";
                            document.getElementById('HighPressureD2').style.display = "none";
                            document.getElementById('emerPressureS2').style.display = "none";
                            document.getElementById('emerPressureD2').style.display = "none";
                            document.getElementById('kindofPressureD2').style.display = "none";
                            document.getElementById('kindofPressureS2').style.display = "none";
                          }
                          
                        
    
                    }
    
    
                    else if (DiastolicPressureInput >= 120 && DiastolicPressureInput <= 180
                        && SystolicPressureInput >= 180 && SystolicPressureInput <= 220) {
                        document.getElementById('pressure_result2').innerHTML = " ارتفاع طارئ  " + " ( " + SystolicPressureInput + "/ "
                            + DiastolicPressureInput + ")";
                         document.getElementById('pressure_message2').innerHTML = hasNoPressureEmergencyHighMale;
    
                            
                         document.getElementById('hasNoPressure').style.display="block";
                         document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                         
                         
                         document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                         document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                       
                         var h1 = document.getElementById('hasPressure').style.display==="none";
                        
                         var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                         var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
     
                         if(h1) {
     
                             document.getElementById('hasNoPressure').style.display="block";
     
                         }
                         else {
                            
                             document.getElementById('hasNoPressure').style.display="block";
                             document.getElementById('hasPressure').style.display="none";
                            
     
     
                         }
     
                         if (hp1 && hp2) {
                             document.getElementById('hasNoPressureProgressBarS').style.display="block";
                             document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             
                         }
                         else {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                             document.getElementById('hasPressureProgressBarS').style.display="none";
                             document.getElementById('hasPressureProgressBarD').style.display="none";
     
                         }
    
                        var pressureD1 = document.getElementById('lowPressureS2').innerHTML==="";
                        var pressureS1 = document.getElementById('lowPressureD2').innerHTML==="";
                        var pressureD2 = document.getElementById('natPressureS2').innerHTML==="";
                        var pressureS2 = document.getElementById('natPressureD2').innerHTML==="";
    
                        var pressureD3 = document.getElementById('kindofPressureS2').innerHTML==="";
                        var pressureS3 = document.getElementById('kindofPressureD2').innerHTML==="";
                        var pressureD4 = document.getElementById('HighPressureS2').innerHTML==="";
                        var pressureS4 = document.getElementById('HighPressureS2').innerHTML==="";
                        var pressureD5 = document.getElementById('VeryHighPressureS2').innerHTML==="";
                        var pressureS5 = document.getElementById('VeryHighPressureD2').innerHTML==="";
    
    
    
                          if(pressureD1 && pressureS1 && pressureD2 &&  pressureS2 && pressureD3 && pressureS3 && pressureD4
                            && pressureS4 &&  pressureD5 && pressureS5) {
                                document.getElementById('emerPressureS2').innerHTML = SystolicPressureInput;
                                document.getElementById('emerPressureS2').style.display = "block";
                                document.getElementById('emerPressureD2').innerHTML = DiastolicPressureInput;
                                document.getElementById('emerPressureD2').style.display = "block";
                            }
                          else {
                            document.getElementById('emerPressureS2').innerHTML = SystolicPressureInput;
                            document.getElementById('emerPressureS2').style.display = "block";
                            document.getElementById('emerPressureD2').innerHTML = DiastolicPressureInput;
                            document.getElementById('emerPressureD2').style.display = "block";
    
                            document.getElementById('lowPressureS2').style.display = "none";
                            document.getElementById('lowPressureD2').style.display = "none";
                            document.getElementById('natPressureS2').style.display = "none";
                            document.getElementById('natPressureD2').style.display = "none";
                            document.getElementById('HighPressureS2').style.display = "none";
                            document.getElementById('HighPressureD2').style.display = "none";
                            document.getElementById('VeryHighPressureS2').style.display = "none";
                            document.getElementById('VeryHighPressureD2').style.display = "none";
                            document.getElementById('kindofPressureD2').style.display = "none";
                            document.getElementById('kindofPressureS2').style.display = "none";
                          }
                          
    
    
                           
                    }
                    else {
                        if (SystolicPressureInput > 220) {
                            document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                                = "ادخال غير صحيح ، الضغط الانقباضي يجب أن يكون أقل من 221  للمصابين";
                            document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                            
                            document.getElementById('pressure_result2').innerHTML = "مشكلة في الأرقام المدخلة "
        
                            document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                                = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                            document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                            document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                                = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                            document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                            document.getElementById('pressure_message2').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                            document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                               
                            document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                            document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                          
                            var h1 = document.getElementById('hasPressure').style.display==="none";
                           
                            var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                            var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
        
                            if(h1) {
        
                                document.getElementById('hasNoPressure').style.display="block";
        
                            }
                            else {
                               
                                document.getElementById('hasNoPressure').style.display="block";
                                document.getElementById('hasPressure').style.display="none";
                               
        
        
                            }
        
                            if (hp1 && hp2) {
                                document.getElementById('hasNoPressureProgressBarS').style.display="block";
                                document.getElementById('hasNoPressureProgressBarD').style.display="block";
        
                                
                            }
                            else {
                               document.getElementById('hasNoPressureProgressBarS').style.display="none";
                               document.getElementById('hasNoPressureProgressBarD').style.display="none";
        
                                document.getElementById('hasPressureProgressBarS').style.display="none";
                                document.getElementById('hasPressureProgressBarD').style.display="none";
        
                            }
                        }
    
                             
                     if (DiastolicPressureInput > 180) {
                        document.getElementById('pressure_result2').innerHTML = "مشكلة في الأرقام المدخلة "
    
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').innerHTML
                            = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي ";
                        document.getElementById('RequiredFieldSpanForSystolicPressure').style.display = "inline";
                        document.getElementById('pressure_message2').innerHTML = "تأكد من المدخلات الخاصة بالضغطين الانبساطي والانقباضي";
                        document.getElementById('pressure_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                           
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').innerHTML
                            = "ادخال غير صحيح ، الضغط الانبساطي يجب أن يكون أقل من 181 للمصابين ";
                        document.getElementById('RequiredFieldSpanForDiastolicPressure').style.display = "inline";
    
                        document.getElementById('hasNoPressure').style.display="block";
                        document.getElementById('hasPressure').setAttribute('style', 'display: none !important;');
                        
                        
                        document.getElementById('hasPressureProgressBarD').setAttribute('style', 'display: none !important;');
                        document.getElementById('hasPressureProgressBarS').setAttribute('style', 'display: none !important;');
                      
                        var h1 = document.getElementById('hasPressure').style.display==="none";
                       
                        var hp1 = document.getElementById('hasPressureProgressBarD').style.display==="none";
                        var hp2 = document.getElementById('hasPressureProgressBarS').style.display==="none";
    
                        if(h1) {
    
                            document.getElementById('hasNoPressure').style.display="block";
    
                        }
                        else {
                           
                            document.getElementById('hasNoPressure').style.display="block";
                            document.getElementById('hasPressure').style.display="none";
                           
    
    
                        }
    
                        if (hp1 && hp2) {
                            document.getElementById('hasNoPressureProgressBarS').style.display="block";
                            document.getElementById('hasNoPressureProgressBarD').style.display="block";
    
                            
                        }
                        else {
                           document.getElementById('hasNoPressureProgressBarS').style.display="none";
                           document.getElementById('hasNoPressureProgressBarD').style.display="none";
    
                            document.getElementById('hasPressureProgressBarS').style.display="none";
                            document.getElementById('hasPressureProgressBarD').style.display="none";
    
                        }
                    }
    
    
    
                    }
    
               
    
                     // end pressure 

                    if (WaistlineInput < 69) {
                        document.getElementById('RequiredFieldSpanForWaistline').innerHTML
                            = "ادخال غير صحيح ، محيط الخصر للنساء يجب أن يكون فوق 79";
                        document.getElementById('RequiredFieldSpanForWaistline').style.display = "inline";
                    }
                    else if (WaistlineInput >= 70 && WaistlineInput <= 80) {
                        document.getElementById('Waistline_result').innerHTML = "طبيعي" + " " + WaistlineInput;
                        document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleNat;

                        document.getElementById('WaistlineNat').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNat').style.display = "block";
                        document.getElementById('WaistlineMessure').style.display="block";
                        document.getElementById('WaistlineHideAndShow').style.display="block";

                        document.getElementById('Waistline_icon').className = "flaticon-good";
                    }

                    else if (WaistlineInput >= 81 && WaistlineInput <= 87) {
                        document.getElementById('Waistline_result').innerHTML = "مرتفع" + " " + WaistlineInput;
                        document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleHighNot;

                        document.getElementById('WaistlineMessure').style.display="block";
                        document.getElementById('WaistlineHideAndShow').style.display="block";
                        document.getElementById('WaistlineNatHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineNatHigh').style.display = "block";

                        document.getElementById('Waistline_icon').className = "flaticon-exclamation-mark-inside-a-circle";
                    }


                    else if (WaistlineInput >= 88 && WaistlineInput <= 200) {
                        document.getElementById('Waistline_result').innerHTML = " مرتفع جدا" + " " + WaistlineInput;
                        document.getElementById('Waistline_message').innerHTML = WaistlineForFemaleVeryHighNot;
                        document.getElementById('WaistlineMessure').style.display="block";
                        document.getElementById('WaistlineHideAndShow').style.display="block";
                        document.getElementById('WaistlineVeryHigh').innerHTML = WaistlineInput;
                        document.getElementById('WaistlineVeryHigh').style.display = "block";

                    }
                    else {
                        WaistlinePressureMessagesForFemale();
                    }
                }
            }
        }
    }
}
