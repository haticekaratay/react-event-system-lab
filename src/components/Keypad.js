import React from "react"

class Keypad extends React.Component{

    hitEnter = () => {
        console.log("Entering password...")
    }

    render(){
        return(
            <div>
                <input 
                    onKeyUp={this.hitEnter} type="password" 
                />
            </div>
            
        )
    }
}

export default Keypad;