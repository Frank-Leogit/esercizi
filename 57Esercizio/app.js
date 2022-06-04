function init(){
    catsPrinter();
    const arr = [1, 2, 3, 4];
    // for(let i=0; i<arr.length; i++){
    //     const elem = arr[i];
    //     console.log(elem);
    // }
    // arr.forEach((elem,i, arr) => {
    //     console.log(i,elem,arr);
    // })

    // const employees = [
    //     {
    //     'name': 'mario',
    //     'lastname': 'rossi',
    //     'salary': 3000
    // },
    // {
    //     'name': 'ezio',
    //     'lastname': 'greggio',
    //     'salary': 5000
    // },
    // {
    //     'name': 'enzo',
    //     'lastname': 'ferrari',
    //     'salary': 9000
    // }];
    // const salaries = employees.map(employee => employee['salary']);
    // console.log(salaries);
    // const filteredEmps = [];
    // for(var i = 0; i<employees.length; i++){
    //     const employee = employees[i];
    //     if(employee['salary']>3500){
    //         filteredEmps.push(employee);
    //     }
    // // }
    // console.log(filteredEmps);
    // const filteredEmps = employees.filter(employee => employee['salary']>3500);
    // console.log(filteredEmps);



}
$(init);
function catsPrinter(){
    const cats = [
        {
            'name':'gattino1',
            'age': 5,
            'color': 'blue',
            'genre':'male'
        },
        {
            'name':'gattino2',
            'age': 3,
            'color': 'yellow',
            'genre':'female'
        },
        {
            'name':'gattino3',
            'age': 6,
            'color': 'green',
            'genre':'male'
        },
        {
            'name':'gattino4',
            'age': 8,
            'color': 'purple',
            'genre':'female'
        }
    ];
    let maleCat=[];
    let femaleCat=[];
    cats.forEach(cat =>{})
    // milestone
    cats.forEach(cat => {
        let str = `${cat['name']} ${cat['color']}`;
        if(cat['genre']=='female'){
            str += '<div class="box bg-green"';
            femaleCat.push({
                'name': cat['name'],
                'color': cat['color'],
                'opacity': cat['age']*10
            })
        }else{
            str += '<div class="box bg-red"';
            maleCat.push({
                'name': cat['name'],
                'color': cat['color'],
                'opacity': cat['age']*10
            })
        }
        str += `style="opacity: ${cat['age']*10}%"`;
        str += '></div>';
        console.log(str);
            $('#cats').append(`<li>${str}</li>`);
    });
    console.log(maleCat,femaleCat);
    
        
    };
