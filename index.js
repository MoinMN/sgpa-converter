let select = document.getElementsByName('select');
let cgpa = document.getElementById('cgpa');
let percent = document.getElementById('percent');

let start=()=>{
    if(select[0].checked)   {
        percent.style.display = 'none';
        cgpa.style.display = 'block'; 
    }
    if(select[1].checked)    {
        percent.style.display = 'block'; 
        cgpa.style.display = 'none';
    }
}

let restart=()=>{
    percent.style.display = 'none'; 
    cgpa.style.display = 'none';
    select[0].checked = false;
    select[1].checked = false;
}


let calculate_cgpa=()=>{
    let total_sem_cgpa = document.getElementById('total-sem-cgpa').value;
    let sum_sgpa_cgpa = document.getElementById('sum-sgpa-cgpa').value;

    let result = sum_sgpa_cgpa / total_sem_cgpa;
    document.getElementById('result-cgpa').value = result;
}


let calculate_percent=()=>{
    let sum_sgpa_percent = document.getElementById('sum-sgpa-percent').value;
    let result = (sum_sgpa_percent - 0.75) * 10;
    document.getElementById('result-percent').value = result+"%";
}