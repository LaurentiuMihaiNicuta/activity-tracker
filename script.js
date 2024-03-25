//for(let i = 0 ; i <= 24 ; i++){
//    if(i < 10){
//        console.log('0'+i+':00')}
//    else if(i>10){
//        console.log(i+':00')
//    };
//}

class UI{
    constructor(){
        this.startButton = document.getElementById('start-button');
        this.daysContainer = document.getElementById('days-container');
        this.buttonListener();

    }


    render = (day) => {
        const dayContainer = document.createElement('div');
        this.daysContainer.insertBefore(dayContainer, this.daysContainer.firstChild)

        day.forEach(element => {
            const dayLine = document.createElement('div');
            const hourDisplay = document.createElement('div');
            const input = document.createElement('input')
            const goodBtn = document.createElement('button');
            const badBtn = document.createElement('button');
            const neutralBtn = document.createElement('button');


            input.type = 'text';
           
            hourDisplay.textContent = element;

            
            dayContainer.appendChild(dayLine);

            
            dayLine.appendChild(hourDisplay);
            dayLine.appendChild(input);
            dayLine.appendChild(goodBtn);
            dayLine.appendChild(badBtn);
            dayLine.appendChild(neutralBtn);
           
        });
        
    }

    buttonListener = () =>{
        this.startButton.addEventListener('click',  () => {
            const day = new Day();
            const dayArray = day.getDay();
            
            this.render(dayArray);
        })


    }

}



class Day{
    constructor(){
        this.hours = 24;
        this.day = [];
        this.createDay();
    }

    createDay = () => {
       for(let i = 0 ; i <= this.hours; i++){
        if( i < 10){
            this.day.push('0'+i+':00')
        }else if(i > 10){
            this.day.push(i+":00")
        }

       }

    }

    getDay = () => {
        return this.day
    }

    alterDay = (hour) => {
        this.day.push(hour)
    }
}

const userInterface = new UI();




