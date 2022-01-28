function displayTime() {
    var dateTime=new Date();
    var hr=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var session=document.getElementById('ampm');
    document.getElementById('hour').innerHTML=hr;
    document.getElementById('minute').innerHTML=min;
    document.getElementById('second').innerHTML=sec;

    
    
    
    if(hr>=12){
        session.innerHTML='PM';
        
       
    }
    else{
        session.innerHTML='AM';
    }
    if(hr>12){
        hr=hr-12;
        document.getElementById('hour').innerHTML=hr;
    }
    
}
setInterval(displayTime, 10);