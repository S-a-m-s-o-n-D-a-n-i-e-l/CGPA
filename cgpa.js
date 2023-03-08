var l=0;
function Oncick()
{
    var x=document.getElementById("ipu1").value;
    l=x;
    document.getElementById("ipu1").value=0;
    var brek=document.createElement("br");
    var div = document.getElementById('main');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    if(x==0)
    {
        alert("Enter a Valid Number");
        return;
    }
    for(let i=1;i<=x;i++)
    {
        var brek=document.createElement("br");
        var ip=document.createElement("label");
        ip.setAttribute("id","label"+i);
        ip.innerText="Grade Points Earned in Semester-"+i;
        var txt=document.createElement("input");
        var lab2=document.createElement("Label");
        lab2.setAttribute("id","lab"+i);
        lab2.innerText=" Total Credits =";
        var txt1=document.createElement("input");
        txt1.setAttribute("type","text");
        txt1.setAttribute("id","txt1"+i);
        txt.setAttribute("type","text");
        txt.setAttribute("id","txt"+i);
        document.getElementById("main").appendChild(ip);
        document.getElementById("main").appendChild(txt);
        document.getElementById("main").appendChild(lab2);
        document.getElementById("main").appendChild(txt1);
        document.getElementById("main").appendChild(brek);

    }
    var but=document.createElement("button");
    but.setAttribute("id","butto1");
    but.textContent="Calculate";
    // but.appendChild(atag);
    but.setAttribute("type","submit");
    but.setAttribute("onclick","calculate()");
    document.getElementById("main").appendChild(brek);
    document.getElementById("main").appendChild(but);
    // x=0;
}
var b=document.createElement("label");
function calculate()
{
    var m=0;
    var x=0;
    for(let i=1;i<=l;i++)
    {
        var data=document.getElementById("txt"+i).value;
        var dataa=document.getElementById("txt1"+i).value;
        m+=parseInt(data);
        x+=parseInt(dataa);
    }
    var temp=(m/x);
    console.log(m,x);
    b.textContent="YOUR CGPA IS :- "+" "+temp;
    b.setAttribute("class","crank");
    document.getElementById("main").appendChild(b);
    temp=0;
    // alert(m);
}