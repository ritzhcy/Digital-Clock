function clickme()
{
    var time=new Date();
    var hours=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am=(hours<12) ? "AM" : "PM";
    
    hours = (hours >12)? hours-12 :hours;
    hours = (hours <10)?"0"+hours:hours;
    mins = (mins <10)?"0"+mins:mins;
    secs = (secs <10)?"0"+secs:secs;

    document.getElementById("hours").innerHTML = hours+"<br> hrs";
    document.getElementById("mins").innerHTML = mins+"<br> min";
    document.getElementById("secs").innerHTML = secs+"<br> sec";
    document.getElementById("ampm").innerHTML = am;

    document.getElementById("hours").style.fontSize="30px";
    document.getElementById("mins").style.fontSize="30px";
    document.getElementById("secs").style.fontSize="30px";
    document.getElementById("ampm").style.fontSize="35px";
}
setInterval(clickme,1000);

function setDisplay()
{
    var wakeup_time = document.getElementById("wakeuptime").value;
    var lunch_time = document.getElementById("lunchtime").value;
    var nap_time = document.getElementById("naptime").value;
    var night_time = document.getElementById("nighttime").value;
    var current_hours = new Date().getHours();
    
    if(wakeup_time == current_hours)
    {
        document.getElementById("img").style.backgroundImage= "url(Goodmorning.svg)";
        document.getElementById("text1").innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("msgtext").innerHTML="GOOD MORNING!! WAKE UP!!";
    }
    
    if(lunch_time == current_hours)
    {
        document.getElementById("img").style.backgroundImage= "url(Goodafternoon.svg)";
        document.getElementById("text1").innerText="LET'S HAVE SOME LUNCH !!";
        document.getElementById("msgtext").innerHTML="GOOD AFTERNOON!! TAKE SOME REST";
    }
    
    if(nap_time == current_hours)
    {
        document.getElementById("img").style.backgroundImage= "url(Goodevening.png)";
        document.getElementById("text1").innerHTML="STOP YAWNING, GET SOME TEA...<br>IT'S JUST EVENING!!";
        document.getElementById("msgtext").innerHTML="GOOD EVENING!!";
    }
    
    if(night_time == current_hours)
    {
        document.getElementById("img").style.backgroundImage = "url(Goodnight.svg)";
        document.getElementById("text1").innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("msgtext").innerHTML="GOOD NIGHT!!";
    }
    
    
    var invalue1 = document.getElementById("wakeuptime");
    var value = invalue1.options[invalue1.selectedIndex].text;
    document.getElementById("descriptiontext1").innerHTML="Wake Up Time : " + value;
    
    var invalue2 = document.getElementById("lunchtime");
    var value = invalue2.options[invalue2.selectedIndex].text;
    document.getElementById("descriptiontext2").innerHTML="Lunch Time : " + value;
    
    
    var invalue3 = document.getElementById("naptime");
    var value = invalue3.options[invalue3.selectedIndex].text;
    document.getElementById("descriptiontext3").innerHTML="Nap Time : " + value;
    
    
    var invalue4 = document.getElementById("nighttimes");
    var value = invalue4.options[invalue4.selectedIndex].text;
    document.getElementById("descriptiontext4").innerHTML="Night Time : " + value;
}
    