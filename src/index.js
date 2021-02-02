import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'




//FIRST METHOD


const FrienrBookCard = () => {


  const [data, setData] = React.useState([]);
  
  function post(event) {
    event.preventDefault();
    
    let name = document.getElementById("FBname").value;
    let postText = document.getElementById("FBpostText").value;
    let time = new Date().toLocaleTimeString();
    let newData = {
      postText: postText,
      name: name,
      time: time
    }
    console.log(postText);

    setData((previousValue) => {
      return previousValue.concat([newData]);
    })
  }





  return  <div >



    {/* <h1> <img className={"profile"} src={"https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"} alt="profile"/></h1> */}
    
{/*     
    <p> {body}</p>
    <img className={"post-img"} src={imageUrl} alt="fbpostpic"/> */}


  
    <form className={"formStyle"} onSubmit={post}>

      <input required placeholder="name" type="text" id="FBname" />
      <br/>
      <textarea required placeholder="what is in your mind" type="text" id="FBpostText" />
      <br/>
      <button className={"formBtn"}> Post </button>
      </form>

      { console.log("data: ", data)}




    {data.map((eachItem, i) => {
        return (
          <div className={"body"} key={i}>
            
            {/* <h1>UserName</h1>    */}
            <div className={"userDetail"}>
            <img className={"profile"} src={"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-9/27332383_1479384265443534_5771716595031240578_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_eui2=AeGdDID8RdkbzZHgYgNiKIetgUI_ssXoavyBQj-yxehq_LgM4Fbs3kMWA-ciRMpOito-L3BQjAr_mmousC-1B53h&_nc_ohc=v-QNc6mXMaAAX9KNgAG&_nc_ht=scontent.fkhi17-1.fna&oh=3feaf0e0abb241d55d665d8282dcda42&oe=603EA995" } alt={"userprofile"}/>
            <h3 className={"userName"}> {eachItem.name}</h3>
            <div className="time">{eachItem.time}</div>
            
            </div>
            <br/>
            <h6 className={"poststyle"}>{eachItem.postText}</h6>
            
            <div className={"btn3"}>
            <button className={"like"}><FontAwesomeIcon icon={faThumbsUp} />Like</button>
            <button className={"comt"} ><FontAwesomeIcon icon={faComment} />Comment</button>
            <button className={"share"}><FontAwesomeIcon icon={faShare} />Share</button>
            
            </div> 
          </div>
          
        )
       })}









  </div>
}

ReactDOM.render(<FrienrBookCard/>,
  // <div>
  //   <Fbcard
  //   profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
  //   title="User Name"
  //   body="Natural Beauty 1"
  //   imageUrl ="https://hopeforthebrokenhearted.files.wordpress.com/2020/11/prayer-from-debbie-9.jpg"
  //   />
  //   <Fbcard
  //   profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
  //   title="User Name Post"
  //   body="Natural Beauty 1"
  //   imageUrl ="https://i.pinimg.com/originals/02/ae/74/02ae74b5ac0a32f60c3bf0d871831f8a.jpg"
  //   />
  //   <Fbcard
  //   profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
  //   title="Facebook Post"
  //   body="Natural Beauty 1"
  //   imageUrl ="https://upload.wikimedia.org/wikipedia/en/e/e3/Konaseema_greenery_1.JPG"
  //   />
  // </div>,
    document.getElementById("root")
);
