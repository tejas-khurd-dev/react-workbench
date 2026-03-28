import Card from "./components/Card"
import User from "./components/User"

const App = () => {
  let arr1 = [10, 20, 30]
  console.log(arr1);
  
  arr1.map(function(ele){
    console.log(ele);
    
  })

  let arr2 = [
    {
      name: "Tejas",
      age: 10
    },
    {
      name: "Harsh",
      age: 12
    },
    {
      name: "vedant", 
      age: 16
    }
  ]
  console.log(arr2);
  

  arr2.map(function(ele){
    console.log(ele.age);
    
  })

  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      company: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Part-Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png",
      company: "Google",
      datePosted: "3 weeks ago",
      post: "Graphic Designer",
      tag1: "Part-Time",
      tag2: "Flexible Schedule",
      pay: "$150/hr",
      location: "Kochi, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/031/737/192/non_2x/dribble-icon-dribble-social-media-logo-dribble-set-of-social-media-logos-free-png.png",
      company: "Dribbble",
      datePosted: "18 days ago",
      post: "Senior Motion Designer",
      tag1: "Contract",
      tag2: "Remote",
      pay: "$85/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/256/6033/6033716.png",
      company: "Meta",
      datePosted: "2 days ago",
      post: "Product Designer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$140/hr",
      location: "Benglore, India"
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/256/0/747.png",
      company: "Apple",
      datePosted: "1 week ago",
      post: "Visual Designer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$130/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0dDdi3KJgMq_87aJt9us_0yh69ewaKgUzg&s",
      company: "Microsoft",
      datePosted: "9 days ago",
      post: "Design Technologist",
      tag1: "Part-Time",
      tag2: "Junior Level",
      pay: "$95/hr",
      location: "Bengaluru, India"
    }
  ];


  return (
    <>
      <div> 
        Study and Test 
        <User name={arr1[0]} />
        <User name={arr1[1]} />
        <User name={arr1[2]} />

        {arr1.map(function (){
          return "hello"
        })}

        OR 

        {arr1}

        OR 

        {arr1.map(function (ele){
          return ele
        })}

        OR 

        {arr1.map(function (ele){
          return <h1>{ele}</h1>
        })}

        OR

        {arr1.map(function (ele){
          return ele/5
        })}

        OR
        
        <div className="card-container">
          {arr1.map(function (){
          return <Card logo="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"  post="Visual Designer" tag1="Part-Time" tag2="Junior Level" pay="$95/hr" location="Bengaluru, India" company="Amazon" />
          })}
        </div>
        
      </div> 

      <h1>Real Work</h1>    

      <div className="card-container">

          {jobOpenings.map(function(ele, idx){
            console.log(idx);
            
            return (
              <div key={idx}> {/* idx means index no. is passed as keys to identity each card is unique by react and good is not to padd key to direct component here i.e card */}
                <Card company={ele.company} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} datePosted={ele.datePosted}  pay={ele.pay} location={ele.location} logo={ele.brandLogo} />
              </div>
            )
          })}

      </div>
    </>
    
  )
}

export default App