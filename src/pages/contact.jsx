import povar from './povar.jpg';

function Contact () {
    return(
        <div>
            <h1>Contact us!</h1>
            <img src={povar} alt=""/>
            <h5> If you have any ideas to improve the site, interesting recipes or some remarks contact us here:  </h5>
            <h5>phone: 8(999)-99-99</h5>
            <h5>email: recipes@eda.com</h5>
            
        </div>
      );
}

export { Contact }