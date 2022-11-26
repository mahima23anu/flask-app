const select=document.querySelectorAll('.div');
var index=0;
select[0].style.display="block";
function change(x){
    if(x==1){
        if(index+1 >= select.length){
            return;
        }
        else{
            select[index].style.display = "none";
            index+=1;
            select[index].style.display="block";
            update();
        }
    }
    else{
        if(index <=0){
            return;
        }
        else{
            select[index].style.display = "none";
            index-=1;
            select[index].style.display="block";
            update();
        }
    }
}

function update(){
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const complaint = document.getElementById('complaint').value;
    var today = new Date();
    var dd =String(today.getDate()).padStart(2,'0');
    var mm =String(today.getMonth()+1).padStart(2,'0');
    var yyyy=today.getFullYear();

    document.getElementById('check_name').innerText=name;
    document.getElementById('check_phone').innerText=phone;
    document.getElementById('check_address').innerText=address;
    document.getElementById('check_complaint').innerText=complaint;
    document.getElementById('check_date').innerText=dd + "/" +mm +"/" +yyyy;
}