import '../App.css';

function Landing({ darkMode, toggleDarkMode }) {
  return (
    <>
      <nav>
        <a className="bear-link" href="https://twitter.com/intent/follow?screen_name=jh3yy" target="_blank" rel="noreferrer noopener">
          <svg className="w-9" viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="161.191" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20"></circle>
            <circle cx="806.809" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20"></circle>
            <circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor"></circle>
            <circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor"></circle>
            <path d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z" fill="currentColor"></path>
            <rect x="310.42" y="448.31" width="343.468" height="51.4986" fill="#FF1E1E"></rect>
            <path fillRule="evenodd" clipRule="evenodd" d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z" fill="currentColor"></path>
          </svg>
        </a>
      </nav>
      
      {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <header>
        <h1>SmartInvest<span> <p> Your One Stop Learning Platform </p> <p> Learn, Invest, Succeed</p></span></h1>
      </header>

      <main>
        <div className="content">
          <div className="tiles">
            <div style={{"--r": "45deg"}} className="tile"></div>
            <div style={{"--r": "275deg"}} className="tile"></div>
            <div style={{"--r": "190deg"}} className="tile"></div>
            <div style={{"--r": "45deg"}} className="tile"></div>
          </div>
          <section className="section--one">
            <article>
              <div className="title-wrap">
                <h2>Why Invest</h2>
              </div>
              <hr />
              <div className="content-wrap">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel rem dicta. 
                  Aut quidem, sed fugiat officiis inventore nostrum.
                </p>
              </div>
            </article>
            <article>
              <div className="title-wrap">
                <h2>Dissect Problems.</h2>
              </div>
              <hr />
              <div className="content-wrap">
                <p>
                  Obcaecati nam doloremque fugiat cum corporis eveniet atque, molestias molestiae 
                  quaerat nihil sint nostrum cumque itaque.
                </p>
              </div>
            </article>
            <article>
              <div className="title-wrap">
                <h2>Learn New Techniques.</h2>
              </div>
              <hr />
              <div className="content-wrap">
                <p>
                  Nulla atque voluptatum, a natus, ut illum voluptas incidunt ipsam reprehenderit 
                  illo perferendis. Possimus dolorem tempora minima.
                </p>
              </div>
            </article>
            <article>
              <div className="title-wrap">
                <h2>Profit.</h2>
              </div>
              <hr />
              <div className="content-wrap">
                <p>
                  Similique expedita nihil beatae sunt adipisci deserunt culpa, nostrum, 
                  amet quis veritatis aperiam, ducimus repellat.
                </p>
              </div>
            </article>
          </section>
        </div>
        <section className="section--two"></section>
        <section className="section--three"></section>
        <section className="section--four"></section>
        <section className="section--five centered">
          <h2>fin.</h2>
        </section>
      </main>
      <footer>ʕ •ᴥ•ʔ jhey &copy; 2024</footer>
    </>
  );
}

export default Landing;
