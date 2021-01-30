import React,{Component} from 'react'
import AvatarList from './AvatarList';
import './Avatar.css'

class Avatar extends Component{
  constructor(props){
    super(props);
    this.state = {
      txt : "welcome to Avatarrrrrrr World !!!!!! jhakasss...."
    }
  }

  changeTxt = () => {
    this.setState({txt : "Khub Bhaloo ....!"});
  }

  render(){

    const avatararr = [
      {
        id  : "1",
        name:  "K@rishmaAG",
        work:  "fullStackDEV"
      },
      {
        id  : "2",
        name:  "nannnuuuu.",
        work:  "MY FAV"
      },
      {
        id : "3",
        name:  "disha",
        work:  "hr"
      },
      {
        id : "4",
        name :  "mommy",
        work :  "sbi"
      }
  ]

    const avatarcardarr = avatararr.map((avatarCard,i) =>{
      return <AvatarList id = {avatararr[i].id}
      name = {avatararr[i].name}
      work = {avatararr[i].work}/>
    })

    return(
      <div className="mainpage">
        <h1>{this.state.txt}</h1>
        {avatarcardarr}
        <button type="button" onClick={this.changeTxt}>Subscibe to my channel</button>
      </div>
    );
  }
}

export default Avatar;
