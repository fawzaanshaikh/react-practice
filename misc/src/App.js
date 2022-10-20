import './App.css';

function App() {
  
  return (
    <>
      <div className="container text-center">
        <div className="container-within row text-center my-5">
          <div className="col text-center white-bg"  id="module-banner"><span id="banner-text">Module Banner</span></div>
          <div className="col text-center white-bg" id="badge"><span id="badge-text">C4 Badge</span></div>
        </div>

        <div className="line">-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
        
        <div className="row text-center my-5">
          <div className="col text-center mx-5 white-bg videos"><span className="video-text">Video 1<br/>Course Learnings</span></div>
          <div className="col text-center mx-5 white-bg videos"><span className="video-text">Video 2<br/>Course Outcomes</span></div>
        </div>

        <div className="row text-center my-5 schedule">
          <div className="col text-center my-5">Schedule your class</div>
        </div>

        <div className="container-within row text-center my-3">
          <div className="col text-center mx-5 white-bg option"><span className="option-text">Resources</span></div>
          <div className="col text-center mx-5 white-bg option"><span className="option-text">Quizzes</span></div>
        </div>
        <div className="container-within row text-center my-3">
          <div className="col text-center mx-5 white-bg option"><span className="option-text">Peer-review asn</span></div>
          <div className="col text-center mx-5 white-bg option"><span className="option-text">Sim Arena 1</span></div>
        </div>

        <div className="row text-center my-5 finish-row">
          <button type="submit" className="btn btn-primary finish">Finish</button>
        </div>
      </div>
    </>
  );
}

export default App;
