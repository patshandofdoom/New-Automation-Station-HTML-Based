function overarchingTest() {
  Logger.log(testMeetingWithNew())
  Logger.log(testMeetingWithRepeat())
}


//A function to run the getRepeatDepositionData function with dummy data. It will send an email to me
function testMeetingWithNew(){
  let formattedDate=formatDateForTests()
  try{
    let depoObject = {
      orderedBy: 'orderedBy',
      orderedByEmail: 'prichardson0874@gmail.com',
      witnessName: '#witnessName',
      caseStyle: 'caseStyle',
      depoDate: formattedDate,
      depoHour: 10,
      depoMinute: 30,
      amPm: 'AM',
      firm: 'firm',
      attorney: 'attorney',
      attorneyEmail: 'attorneyEmail',
      attorneyPhone: '1234567',
      firmAddress1: 'firmAddress1',
      firmAddress2: 'firmAddress2',
      city: 'city',
      state: 'state',
      zip: 'zip',
      locationFirm: 'locationFirm',
      locationAddress1: 'locationAddress1',
      locationAddress2: 'locationAddress2',
      locationCity: 'locationCity',
      locationState: 'locationState',
      locationZip: 'locationZip',
      locationPhone: 'locationPhone',
      services: 'services',
      courtReporter: 'courtReporter',
      videographer: 'videographer',
      pip: false,
      copyAttorney: 'copyAttorney',
      copyFirm: 'copyFirm',
      copyAddress1: 'copyAddress1',
      copyAddress2: 'copyAddress2',
      copyCity: 'copyCity',
      copyState: 'copyState',
      copyZip: 'copyZip',
      copyPhone: 'copyPhone',
      copyEmail: 'copyEmail',
      sendConfirmation: false,
      confirmationCC: 'confirmationCC',
      videoPlatform: 'videoPlatform',
      salsAccount: 'salsAccount',
      conferenceDetails: 'conferenceDetails',
      depoFunction: "getNewDeposition"
    }
    Logger.log(depoObject.orderedByEmail)
    getNewDepositionData(depoObject);
    return "getNewDepositionData worked without error";
  }
  catch (error) {
    Logger.log(error);
    return "getNewDepositionData experienced an issue"+error;
  }
}

//does not work properly for some reason. variable line up with the function but it will no write data properly
function testMeetingWithRepeat(){
  let formattedDate=formatDateForTests()
  try{
    let  depoObject = {
      previousOrderer: 'orderedBy', 
      witnessName: '#witnessName',
      caseStyle: 'caseStyle',
      depoDate: formattedDate,
      depoHour: 10,
      depoMinute: 30,
      amPm: 'AM',
      locationFirm: 'locationFirm',
      locationAddress1: 'locationAddress1',
      locationAddress2: 'locationAddress2',
      locationCity: 'locationCity',
      locationState: 'locationState',
      locationZip: 'locationZip',
      locationPhone: 'locationPhone',
      services: 'services',
      courtReporter: 'courtReporter',
      videographer: 'videographer',
      pip: false,
      copyAttorney: 'copyAttorney',
      copyFirm: 'copyFirm',
      copyAddress1: 'copyAddress1',
      copyAddress2: 'copyAddress2',
      copyCity: 'copyCity',
      copyState: 'copyState',
      copyZip: 'copyZip',
      copyPhone: 'copyPhone',
      copyEmail: 'copyEmail',
      sendConfirmation: false,
      confirmationCC: 'confirmationCC',
      videoPlatform: 'videoPlatform',
      salsAccount: 'salsAccount',
      conferenceDetails: 'conferenceDetails',
      depoFunction: "getRepeatDeposition"
    }
   getRepeatDepositionData(depoObject);
   Logger.log("getRepeatDepositionData worked without error");
    return "getRepeatDepositionData worked without error";
  }
  catch(error){
    Logger.log(error);
    return "getRepeatDepositionData experienced an issue"+error;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////  UTILITIES  ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function formatDateForTests(){
  //format as 2020-01-30
  const date = new Date();
  Logger.log(date)
  
  var formattedDate = date.getFullYear()+"-"+("0"+(date.getMonth()+1)).slice(-2)+"-"+("0"+(date.getDate()+1)).slice(-2);
  return formattedDate;
}
