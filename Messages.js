// the messages in Arabic Followed by English 


//global var for messages Arabic
var lblGenderMale = "";
var lblGenderFemale= "";
var lblAge = "";
var placeholderAge = "";
var diabetes = "";
var lblQuestionDiabetes = "";
var lblQuestionDiabetesYes = "";
var lblQuestionDiabetesNo = "";
var lblQuestionDiabetesFastOrAfterTwoHours = "";
var lblQuestionDiabetesFast = "";
var lblQuestionDiabetesAfterTwoHours = "";
var lblDiabetesForFast = "";
var placeholderDiabetesForFast = "";
var lblDiabetesAfterTwoHours = "";
var placeholderDiabetesAfterTwoHours = " ";
var lblDiabetesHbA1c = " ";
var placeholderHbA1c = "";
var pressure = "";
var lblPressureQuestion = "";
var lblPressureQuestionYes = "";
var lblPressureQuestionNo = "";
var lblDiastolicPressure = "";
var placeholderDiastolicPressure = "";
var lblSystolicPressure = "";
var placeholderSystolicPressure = "";
var Waistline = "";
var lblWaistline = "";
var placeholderWaistline = "";
var calculateButtonValue = "";
var printResultValue = "";
var result = "";
var HbA1cResultTitle = "";
var HbA1cResultMessageGoodHeader = "";
var HbA1cResultMessageGood = "";
var HbA1cResultMessagehigh = "";
var HbA1cResultMessagehighHeader = "";
var HbA1cResultMessageBefore = "";
var HbA1cResultMessageBeforeHeader = "";
var HbA1cResultMessageHasDiabetes = "";
var HbA1cResultMessageHasDiabetesHeader = "";
var HbA1cResultMessageLowHeader = "";
var HbA1cResultMessageLow = "";

// if the user has diabetes mele and female


var hasDiabetesNatMale =
    "رائع أنت متحكم بنسبة السكر لديك في الثلاث أشهر الماضية ،استمر في أخذ العلاج في الأوقات المحددة واتباع نمط حياة صحي";

var hasDiabetesNatFemale =
    "رائع أنت متحكمة بنسبة السكر لديك في الثلاث أشهر الماضية ،استمري في أخذ العلاج في الأوقات المحددة واتباع نمط حياة صحي";


var hasDiabetesHighAndVeryHighMale =
    "انتبه صحتك غالية. نسبة السكر لديك في الثلاث أشهر الماضية مرتفعة ، احرص على أخذ علاجك والمتابعة الدورية مع الطبيب ";


var hasDiabetesHighAndVeryHighFemale =
    "انتبهي صحتك غالية. نسبة السكر لديك في الثلاث أشهر الماضية مرتفعة ، احرصي على أخذ علاجك والمتابعة الدورية مع الطبيب ";


// if the user does not have a diabetes fast choice and after 2 hours of eating 

var hasNosDiabetesNatMale =
    "رائع أنت ضمن الحدود الطبيعية استمر في تناول الأغذية قليلة الملح والدهون والسكر وممارسة النشاط البدني 150 دقيقة اسبوعيا";

var hasNosDiabetesNatFemale =
    "رائع أنت ضمن الحدود الطبيعية استمري في تناول الأغذية قليلة الملح والدهون والسكر وممارسة النشاط البدني 150 دقيقة اسبوعيا";
var hasNoDiabetesMale = "مستوى السكر في الدم منخفض  عليك زيارة الطبيب";
var hasNoDiabetesFemale = "مستوى السكر في الدم منخفض  عليك زيارة الطبيب";
var hasNosDiabetesBeforeMale =

    "انتبه ، أنت في مرحلة ما قبل السكري ، لديك فرصة ذهبية لتجنب الإصابة من خلال انقاص الوزن واتباع نمط حياة صحي ،زيارتك للطبيب في هذه المرحلة مهمة لمعرفة كافة الخيارات المتاحة للوقاية";
var hasNosDiabetesBeforeFemale =
    "انتبهي ، أنت في مرحلة ما قبل السكري ، لديك فرصة ذهبية لتجنب الإصابة من خلال انقاص الوزن واتباع نمط حياة صحي ،زيارتك للطبيب في هذه المرحلة مهمة لمعرفة كافة الخيارات المتاحة للوقاية";

var hasNosDiabetesGotDiabetesMale =
    "القراءة لديك مرتفعة عليك زيارة أقرب مركز صحي لتحديد سبب الارتفاع";


var hasNosDiabetesGotDiabetesFemale =
    "القراءة لديك مرتفعة عليك زيارة أقرب مركز صحي لتحديد سبب الارتفاع";

// if the user has a pressure 

var hasPressureLowMale =
     "ضغطك منخفض عليك زيارة الطبيب";

var hasPressureLowFemale =
    "ضغطك منخفض عليك زيارة الطبيب ";

var hasPressureNatMale =
    "أنت متحكم بمستوى ضغط دمك استمر بالمحافظة على أخذ العلاج في الأوقات المحددة واتباع نمط غذائي مناسب  'حمية داش ' وممارسة الرياضة";

var hasPressureNatFemale =
    "أنت متحكمة بمستوى ضغط دمك استمري بالمحافظة على أخذ العلاج في الأوقات المحددة واتباع نمط غذائي مناسب  'حمية داش ' وممارسة الرياضة";
var hasPressureKindOfMale =
    " صحتك غالية ،ضغطك مرتفع احرص على الإلتزام بأخذ العلاج في الأوقات المحددة والمتابعة الدورية مع الطبيب واتباع نمط غذائي مناسب (حمية داش) وممارسة الرياضة";
var hasPressureKindOfFemale =
    "صحتك غالية ،ضغطك مرتفع احرص على الإلتزام بأخذ العلاج في الأوقات المحددة والمتابعة الدورية مع الطبيب واتباع نمط غذائي مناسب (حمية داش) وممارسة الرياضة";
var hasPressureVeryHighMale =
    "قراءة الضغط لديك مرتفعة جدا ، عليك مراجعة طبيبك في أقرب فرصة ";
var hasPressureVeryHighFemale =
    "قراءة الضغط لديك مرتفعة جدا ، عليك مراجعة طبيبك في أقرب فرصة ";

// if the user does not have pressure

var hasNoPressureMaleLow =
    "ضغط الدم لديك منخفض ، عليك زيارة الطبيب ";


var hasNoPressureFemaleLow =
    "ضغط الدم لديك منخفض ، عليك زيارة الطبيب ";

var hasPressureMaleNat =
    "رائع أنت ضمن الحدود الطبيعية ، استمر في تناول الأغذية الصحية قليلة الملح والدهون والسكر وممارسة نشاط بدني 150 دقيقة اسبوعيا";

var hasNoPressureFemaleNat =
    "رائع أنت ضمن الحدود الطبيعية ، استمر في تناول الأغذية الصحية قليلة الملح والدهون والسكر وممارسة نشاط بدني 150 دقيقة اسبوعيا";


var hasNoPressureMaleKindOf =
    "القراءة لديك مرتفعة قليلا ، أنت في مرحلة ما قبل الإصابة ، ننصحك بإتباع نظام غذائي مناسب 'حمية داش ' وممارسة الرياضة ،" +
" زيارتك للطبيب في هذه المرحلة مهمة لمعرفة كافة الخيارات المتاحة للوقاية";


var hasNoPressureFemaleKindOf =
    "القراءة لديك مرتفعة قليلا ، أنت في مرحلة ما قبل الإصابة ، ننصحك بإتباع نظام غذائي مناسب 'حمية داش ' وممارسة الرياضة ،" +
" زيارتك للطبيب في هذه المرحلة مهمة لمعرفة كافة الخيارات المتاحة للوقاية";

var hasNoPressureMaleHigh =
    "القراءة لديك مرتفعة ، أنت في المرحلة الأولى  من ارتفاع الضغط ، ننصحك باتباع نظام غذائي مناسب 'حمية داش ' " +
    "وممارسة الرياضة يجب عليك زيارة الطبيب في هذه المرحلة لمعرفة سبب الارتفاع";


var hasNoPressureFemaleHigh =
    "القراءة لديك مرتفعة ، أنت في المرحلة الأولى  من ارتفاع الضغط ، ننصحك باتباع نظام غذائي مناسب 'حمية داش ' " +
    "وممارسة الرياضة يجب عليك زيارة الطبيب في هذه المرحلة لمعرفة سبب الارتفاع";

var hasNoPressureVeryHighMale =
    "القراءة لديك مرتفعة ، أنت في المرحلة الثانية  من ارتفاع الضغط ، ننصحك باتباع نظام غذائي مناسب 'حمية داش ' " +
    "وممارسة الرياضة يجب عليك زيارة الطبيب في هذه المرحلة لمعرفة سبب الارتفاع";

var hasNoPressureVeryHighFemale = "القراءة لديك مرتفعة ، أنت في المرحلة الثانية  من ارتفاع الضغط ، ننصحك باتباع نظام غذائي مناسب 'حمية داش ' " +
    "وممارسة الرياضة يجب عليك زيارة الطبيب في هذه المرحلة لمعرفة سبب الارتفاع";

var hasNoPressureEmergencyHighMale =
    "القراءة لديك مرتفعة جدا ، عليك زيارة أقرب مركز صحي لتحديد سبب الارتفاع";

var hasNoPressureEmergencyHighFemale =
    "القراءة لديك مرتفعة جدا ، عليك زيارة أقرب مركز صحي لتحديد سبب الارتفاع";


// Waistline

// if the user does not have a pressure or diabetes
var WaistlineForMaleNat = "رائع أنت ضمن الحدود الطبيعية استمر في تناول الأغذية الصحية قليلة السكر والملح والدهون وممارسة نشاط بدني 150 دقيقة أسبوعيا";
var WaistlineForFemaleNat = "رائع أنت ضمن الحدود الطبيعية استمري في تناول الأغذية الصحية قليلة السكر والملح والدهون وممارسة نشاط بدني 150 دقيقة أسبوعيا";
var WaistlineForMaleHighNot = "لديك زيادة في محيط الخصر وهذه الزيادة تجعلك معرضا للإصابة بالأمراض المزمنة عليك اتباع نمط حياة صحي";
var WaistlineForFemaleHighNot = "لديك زيادة في محيط الخصر وهذه الزيادة تجعلك معرضة للإصابة بالأمراض المزمنة عليك اتباع نمط حياة صحي";
var WaistlineForMaleVeryHighNot = "يوجد دهون عالية حول الخصر وهو ما يجعلك معرضا للأمراض المزمنة";
var WaistlineForFemaleVeryHighNot = "يوجد دهون عالية حول الخصر وهو ما يجعلك معرضة للأمراض المزمنة";


//// if the user  has a pressure or diabetes



var WaistlineForMaleKindOfHigh = "لديك زيادة في محيط الخصر  لا بد من خفض الوزن باتباع نمط حياة صحي";
var WaistlineForFemaleKindOfHigh = "لديك زيادة في محيط الخصر  لا بد من خفض الوزن باتباع نمط حياة صحي";
var WaistlineForMaleVeryHigh = " يوجد دهون عالية حول الخصر عليك اتباع نمط حياة صحي وممارسة الرياضة لخفض الوزن ";
var WaistlineForFemaleVeryHigh = "يوجد دهون عالية حول الخصر وهو ما يجعلك معرضة للأمراض المزمنة";





