
// const datA = ['Иван' , 'Иванов' , ' Отдел разработки' , ' Программист' , 2000];

//     function func(emp) {

        
//         let [name, surname, department, position, salary] = data
        
//         console.log( name , surname, department, position, salary);
//     }    
// func(datA)



const [name, surname, department, position, salary] = 
['Иван' , 'Иванов' , ' Отдел разработки' , ' Программист' , 2000];
    console.log(name, surname, department, position, salary);
    
    const data = ['Иван' , 'Иванов' , ' Отдел разработки' , ' Программист' , 2000];

    function func(emp) {

        
        let [name, surname, info] = data
        
        console.log( name , surname, info);
    }    
func(data)

const newInfo = ['Иван' , 'Иванов' , ' Отдел разработки']

function func(emp){

let name = emp[0]
let surname = emp[1]
let department = emp[2]

let [position = 'Junior'] = emp[3]
    console.log( name, surname, department, position);
}
func(newInfo)


// const obj = {
//     color: 'red',
//     width: 400,
//     height:500
// };

// function func(optons){

//     let {color, width, heigth} = options.obj
//     console.log(color, width, heigth);
// }

// func(obj)
