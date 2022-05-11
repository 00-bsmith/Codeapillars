// Here is the code fromt the FreeCodeCamp example that Scott sent in the chat. 

// var qs;
// var answers ; 
// let thing;
// var score = 0 ; 
// class Quiz extends React.Component{
//       constructor(props){
//         super(props);
        
//         this.state ={
//           correct: 0,
//         }
        
        
//       }
  
  
//       render(){
//         return (
//             <div className="box" > 
//             <h1 className=" display-3  borderbottom">Quiz app</h1><div id="box">
            
//             <QuizContent getAs={this.getAs} />
//               <button type="submit" onClick = {()=> evaluate()} className="btn btn-primary">Submit</button>
//             </div>
//             </div>
//         );
//       }
//     } 

//  class QuizContent extends React.Component {
//        constructor(props){
//          super(props);

//          this.state = {
//            questions: [],
//            answers: [],
//            possible_answers: []
//          };

//        }
//        componentDidMount(){
//        fetch('https://opentdb.com/api.php?amount=10&category=12').then(results => {return results.json();})
//          .then(data =>{ 

/////////////////HERE IS THE MEAT/////////////////////////
        
//             let qs = data.results.map((item, i) => {          
//          const entities = {
//             "&#039;": "'",
//             "&quot;": '"',
//             "&ntilde;": "ñ",
//             "&eacute;": "é",
//             "&amp;": "&",
//             "&uuml;": "ü"
//           };
//           const pItems = data.results[i].incorrect_answers.map((item, j) =><div><input type="radio" name={"question"+i} value={data.results[i]}/> <p key={j.toString()}>{item.replace(/&#?\w+;/g, match => entities[match])}</p></div>
//                                                               );
                                                               
//           return (
//             <div key={i.toString()}>
//               <div>
//                 {data.results[i].question.replace(/&#?\w+;/g, match => entities[match])}
//                 <br />
//                 <br />
//                 <div>
//                   {pItems}
//                   <input type="radio" name={"question"+i} value="correct_answer" /><p> {data.results[i].correct_answer.replace(/&#?\w+;/g, match => entities[match])}</p>
//                 </div>
//                 <br />
                
//               </div>
//             </div>
//           );
//         });
     
////////////////////END OF MEAT///////////////////////////


//             this.setState({
//                 questions: qs,

//               })
//            })

//           }
//       render(){
//           return(
//              <h2>{this.state.questions}</h2>

//              )
//            }
//          }
// function evaluate(data){
// for(var i = 0; i < 10; i++){
//   var Answers = document.getElementsByName("question"+i);
//     for(var j = 0; j< Answers.length; j++){
//     if (Answers[j].value  == "correct_answer" && Answers[j].checked){ score++; }  
    
//     }
      
//   }
//    return (document.getElementById("box").innerHTML =
//        "You have " +    score +  " out of 10 correct. Refresh the page to try a new quiz"
//            )  
// }

// ReactDOM.render(<Quiz />, document.getElementById("app")
// );