import React from 'react';
// import './App.css';
	function App() {
  return (
    <div class='App'>
    <nav className="navbar navbar-default navbar-head">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      
        <a className="navbar-brand" href="#">
        <img src="pictures/logo.png" style={{height: "30px"}}></img>
        </a>
        
        <div className="flags">
        <img src="pictures/gh.svg"></img>
        <img src="pictures/ng.svg"></img>
        <img src="pictures/ke.svg"></img>
      </div> 
     
      </div>
  
      
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
         <ul className="nav navbar-nav navbar-right option">
          <li><a href="#">About us</a></li>
        </ul>
      </div>
    </div>
    </nav>
      
      <div className="container-fluid">
        <div className="row">
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
  
  
    <div className="carousel-inner carousel-content" role="listbox">
      <div className="item active">
        <img src="pictures/houses1.jpg" alt="homes"></img>
      </div>
      <div class="item">
      <img src="pictures/wow-suit.jpg" alt="homes"></img>
      </div>
      
    </div>
  
   
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2 className="text-center">Plans</h2>
        <div className="col-md-3 text-center">
          <div className="thumbnail">
        <img src="pictures/horizon1.jpg" alt="horizon"></img>
          <h4>VIRTUAL OFFICES</h4>
          <p>
            orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
    </div>
          <div className="col-md-3 text-center">
            <div className="thumbnail">
        <img src="pictures/horizon2.jpg" alt="horizon"></img>
          <h4>CUSTOMIZED OFFICES</h4>
          <p>
            orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        </div>
      </div>
   
  
          <div className="col-md-3 text-center">
             <div className="thumbnail">
        <img src="pictures/horizon3.jpg" alt="horizon"></img>
          <h4>SERVICED OFFICES</h4>
          <p>
            orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        </div>
      </div>
   
        
           <div className='col-md-3 text-center'>
              <div className="thumbnail">
        <img src="pictures/horizon4.jpg" alt="horizon"></img>
          <h4>MEETING ROOMS</h4>
          <p>
            orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        </div>
      </div>
    </div>
  </div>

  
  
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 text-center">
          <h5 style={{color: "brown"}}>VISIT US IN KENYA</h5>
          <h6  style={{color: "yellow"}}>Nairobi Kenya</h6>
          <p>Balgabia center,14 riverside drive.
             4th floor,off riverside drive
              Hanover center, 14 riverside drive
               6th floor off riverside drive</p>
        </div>
        <div className="col-md-4 text-center">
          <h5 style={{color: "brown"}}>VISIT US IN GHANA</h5>
          <h6  style={{color: "yellow"}}>Accra Ghana</h6>
          <p>one Airpot sqare, Airport city
              8th floor.</p>
          
        </div>
        <div className="col-md-4 text-center">
          <h5 style={{color: "brown"}}>VISIT US IN NIGERIA</h5>
          <h6 style={{color: "yellow"}}>Lagos Nigeria</h6>
          <p>Sterling bank building</p>
          
        </div>
      </div>
    </div>
  </div>
  </div>

   
  
  
  
  
      
  
  





  );
}

export default App;
