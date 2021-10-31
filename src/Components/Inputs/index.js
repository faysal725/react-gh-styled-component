import React, { Component } from 'react';

class Inputs extends Component {

    state = {
        name:"",
        country: "",
        bio: "",
        birthDay: "",
        gender: '',
        agree:false,
        skills:  []
    }

    handleChange = event => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    handleCheckBox = event =>{
        console.log(event.target.checked)
        this.setState({
            agree: event.target.checked
        })
    }
    handleSkillChange = event => {
        console.log(event.target.value)
        if(event.target.checked){
            this.setState({
                skills:   [...this.state.skills, event.target.value]
            })
            console.log(this.state)
        }
        else{
            const skills=this.state.skills.filter(skill => skill !== event.target.value)
            this.setState({
                skills: [...skills]
            })
        }
        
    }
    render() {
        const {name, country, bio, birthDay, agree, skills} = this.state
        return (
            <div>
                <input onChange={this.handleChange} className="form-control my-2" type="text" name='name' placeholder=" your name" value={name}/>
                <select onChange={this.handleChange} className="form-control my-2" name="country" value={country}>
                    <option >select country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="pakistan">pakistan</option>
                    <option value="china">china</option>
                </select>
                <textarea onChange={this.handleChange} name="bio" placeholder="Tell me about you" value={bio}></textarea>
                <input 
                    className="form-control my-2" 
                    type="date" 
                    name="birthDay" 
                    value={birthDay}
                    onChange={this.handleChange} 
                />
                <div>
                    <input type="radio" name="gender" value=" Male" onChange={this.handleChange} />Male
                    <input type="radio" name="gender" value="Female" onChange={this.handleChange} />Female
                    <input type="radio" name="gender" value="other" onChange={this.handleChange} />other
                </div>
                <div>
                    Skills: <br />
                    <input type="checkbox" name='skills' value="Java" checked={skills.includes('Java')} onChange={this.handleSkillChange} /> Java
                    
                    <input type="checkbox" name='skills' value="Javascript" checked={skills.includes('Javascript')} onChange={this.handleSkillChange} /> Javascript
                    
                    <input type="checkbox" name='skills' value="Ruby" checked={skills.includes('Ruby')} onChange={this.handleSkillChange} /> Ruby
                    
                    <input type="checkbox" name='skills' value="Perl" checked={skills.includes('Perl')} onChange={this.handleSkillChange} /> Perl
                </div>
                <div>
                    <input type="checkbox" name='agree' checked={agree}  onChange={this.handleCheckBox}/> I agree with all terms
                </div>
                <button onClick={() => console.log(this.state)}>Show data</button>
            </div>
        );
    }
}

export default Inputs;