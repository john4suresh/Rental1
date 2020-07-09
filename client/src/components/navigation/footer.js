import React from 'react';
import "./footer.css";

const Footer = () => {
    return(

         <div className="main-footer">
          <div className="text"><h4>Home based appliances </h4></div> 
            <div className="container">
               <div className="row">

                
                  {/* column1 */}
                  <div className="col-md-3 col-sm-6">
                     
                   
                     <li>Washing machine</li>
                     <li>Refrigerator</li>
                     <li>Air conditioner</li>
                     <li>Cooler</li>
                     <li>Television</li>
                  </div>

                {/* column2 */}
                <div className="col-md-3 col-sm-6">
                   
                   
                   <li>Oven</li>
                   <li>Table</li>
                   <li>Fan</li>
                   <li>Mixer grinder</li>
                   <li>Television</li>
                </div>

                {/* column3 */}
                <div className="col-md-3 col-sm-6">
                 
                  
                   <li>Iron box</li>
                   <li>Portable coller</li>
                   <li>Rice cooker</li>
                   <li>Juice maker</li>
                   <li>Sewing machine</li>
                </div>
               </div>

               {/* Footer bottom */}
               <hr />
               <div className="footer-bottom">
                  <p className="text-xs-center">
                     &copy;{new Date().getFullYear()} city guide App - All Rights Reserved
                  </p>
               </div>
            </div>
         </div>
    )
}


export default Footer;