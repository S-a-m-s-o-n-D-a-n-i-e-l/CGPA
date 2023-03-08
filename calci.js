var arr=[1,1.5,2,3,4,0]
var grade=["O","A+","A","B+","B"]
var num=0;
function Oncick()
{
    var x=document.getElementById("ipu1").value;
    if(x==0)
    {
        alert("Enter a Valid Number");
        return;
    }
    var div = document.getElementById('main');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    num=x;
    document.getElementById("ipu1").value=0;
    for(let i=1;i<=x;i++)
    {
        // mk.setAttribute("min",0);
        // mk.setAttribute("max",100);

        var ip=document.createElement("label");
        var frm=document.createElement("form");
        frm.setAttribute("id","form1");
        var dp=document.createElement("select");
        dp.setAttribute("id","samson"+i);
        var but=document.createElement("button");
        but.setAttribute("id","butto1");
        var atag=document.createElement("a");
        atag.innerText="Calculate"
        atag.setAttribute("href","./goal.html");
        but.appendChild(atag);
        but.setAttribute("type","submit");
        but.setAttribute("onclick","calculate()");
        var brek=document.createElement("br");

        dp.className="select"
       
        for(let i=0;i<arr.length;i++)
        {
            const op=document.createElement("option")
            op.textContent=arr[i];
            dp.appendChild(op);
        }
        // mk.setAttribute("id","id"+i);
        ip.innerText="\n"+"Subject-"+i+"\n  ";
        but.textContent="Calculate";
        document.getElementById("main").appendChild(ip);
        for(let j=0;j<grade.length;j++)
        {
            var lab=document.createElement("label");
            lab.innerText=grade[j];
            document.getElementById("main").appendChild(lab);
            var mk=document.createElement("input");
            mk.setAttribute("type","radio");
            mk.setAttribute("value",grade[j]);
            mk.setAttribute("name","radio"+i);
            mk.setAttribute("id","rad"+i+j);
            mk.textContent=grade[j];
            document.getElementById("main").appendChild(mk);
        }
        // document.getElementById("main").appendChild(frm);
        // document.getElementById("main").appendChild(brek);
        document.getElementById("main").appendChild(dp);
    }
    document.getElementById("main").appendChild(brek);  
    document.getElementById("main").appendChild(but);
}
var arrr=[3,4];
let fin=0.0;
// var c=0;
var b=document.createElement("label");
function calculate()
{

    // var x=document.getElementById("ipu1").value;
    // if(c==0)
    // {
        var total=0;
        var credit=0;
        for(let i=1;i<=num;i++)
        {
            // var data=document.getElementById("id"+i).value;
            var cred=document.getElementById("samson"+i).value;
            // total+=parseInt(data);
            // var n="rad"+i;
            total+=parseInt(cred);
            var dat=document.getElementsByName("radio"+i);
            var ii=0;
            var data;
            for(ii=0;ii<dat.length;ii++)
            {
                if(dat[ii].checked)
                {
                    data=dat[ii].value;
                    // console.log(dat[ii]);
                }
            }
            // alert(data);
            if(data=="O")
                {
                    credit+=10*cred;
                }else if(data=="A+")
                {
                    credit+=9*cred;
                }else if(data=="A")
                {
                    credit+=8*cred;
                }else if(data=="B")
                {
                    credit+=6*cred;
                }
                else if(data=="B+")
                {
                    credit+=7*cred;
                }else{
                    credit=credit;
                }
        }
        var temp=(credit/total);
        // fin=temp;
        // console.log(fin);
        b.textContent="YOUR GPA IS :- "+temp;
        b.setAttribute("class","crank");
        document.getElementById("main").appendChild(b);
        temp=0;
    // }
    // c++;
    
    // alert(total);
    // alert(credit);
    
    
}
// document.getElementById("tie").innerHTML="Your CGPA is"+;

