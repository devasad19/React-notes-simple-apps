import React from 'react';

const About = () =>{
    return (
        <div className="card mt-5 mb-5">
            <div className="card-body">
                <h3>About Us</h3>
                <p>In this example we have 3 “pages” handled by the router: a home page, an about page,
                    and a users page. As you click around on the different s, the router renders 
                    the matching .Note: Behind the scenes a > renders an  with a real href, 
                    so people using the keyboard for navigation or screen readers will still be able to
                    use this app.
                </p>
                
                <p>In this example we have 3 “pages” handled by the router: a home page, an about page,
                    and a users page. As you click around on the different s, the router renders 
                    the matching .Note: Behind the scenes a > renders an  with a real href, 
                    so people using the keyboard for navigation or screen readers will still be able to
                    use this app.
                </p>
            </div>
        </div>
    )
}

export default About;