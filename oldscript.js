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
        this.buttonOptions = [ {color:'green',score:0,displayText:'Good'}, {color:'red',score:0,displayText:'Bad'},{color:'gray',score:0,displayText:'Neutral'}]
    }


    render = (day) => {
        const dayContainer = document.createElement('div');
        this.daysContainer.insertBefore(dayContainer, this.daysContainer.firstChild)
        const displays = [];
        
        day.forEach(element => {
            const dayLine = document.createElement('div');
            const hourDisplay = document.createElement('div');
            const input = document.createElement('input')

            //const goodBtn = document.createElement('button');
            //goodBtn.color = 'green';
            // goodBtn.style.background = goodBtn.color;

            //const badBtn = document.createElement('button');
            // badBtn.color = 'red';
            // badBtn.style.background = badBtn.color;

            //const neutralBtn = document.createElement('button');
            // neutralBtn.color = 'gray';
            // neutralBtn.style.background = neutralBtn.color;
            input.type = 'text';
            hourDisplay.textContent = element;

            
            dayContainer.appendChild(dayLine);
 
            
            dayLine.appendChild(hourDisplay);
            dayLine.appendChild(input);
            const buttons = [];
            
            //dayLine.appendChild(goodBtn);
            //dayLine.appendChild(badBtn);
            //dayLine.appendChild(neutralBtn);

            this.buttonOptions.forEach(option => {
                const button = this.createButton(option);
                dayLine.appendChild(button);
                buttons.push(button);

                
                button.addEventListener('click' , () =>{
                    dayLine.style.background = button.style.background;
                    option.score++;
                    console.log(option.score);
                    buttons.forEach(button =>{
                        button.style.display = "none";
                    })
                    this.updateScoreDisplay(displays,1,option.score);
                })

            })

            
            //const buttons = dayLine.querySelectorAll('button')

            // buttons.forEach(button =>{
            //    button.addEventListener('click', () => {
            //        dayLine.style.background = button.color;
                    
                    
            //        buttons.forEach(button => {
            //            button.style.display = "none";
            //        })
            //    })

                
            //})

        });

        const total = document.createElement('div');
        dayContainer.appendChild(total);
        
        this.buttonOptions.forEach(option => {
            const displayDiv = this.createDisplay(option);
            total.appendChild(displayDiv);
            displays.push(displayDiv);

        })



    }

    updateScoreDisplay = (array,index,optionScore) => {
        array[index].textContent = optionScore;
    }

    renderScore = () => {
        

    }
    buttonListener = () =>{
        this.startButton.addEventListener('click',  () => {
            const day = new Day();
            const dayArray = day.getDay();
            
            this.render(dayArray);
            
        })


    }

    createButton = (option) => {
        const button = document.createElement('button');
        button.style.background = option.color;

        return button;
    }

    createDisplay = (option) => {
        const displayOption = document.createElement('div');
        displayOption.textContent = option.displayText + ": " +  option.score;

        return displayOption;
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




