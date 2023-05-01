let IsDOBopen=false;
const dob=document.getElementById("dobbutton");
const settingsCon=document.getElementById("settingsContent");
const settingIco=document.getElementById("settingIcon");

const toggleDOB=()=>{
 if(IsDOBopen)
 {
    settingsCon.classList.add("hide");
 }
 else
 {
    settingsCon.classList.remove("hide");
 }
 IsDOBopen=!IsDOBopen;
 console.log("Toggle",IsDOBopen)
};

settingIco.addEventListener("click",toggleDOB);