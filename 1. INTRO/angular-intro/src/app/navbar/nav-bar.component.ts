//telling angular this should create or aprt of angular component angular /core
import { Component } from "@angular/core";


@Component({
  //render the component inside browser
  selector: 'app-navbar',

  /*loaded inside browser inside nav-bar component as a part of html

 // template: '<h1> Nav-bar component </h1>',

//  for multiple line have to use backtick (``)

template: `<h1> Nav-bar component </h1>
           <h2> template</h2>`,

  //all style should be single line
 // styles: ['h1{ color: red; size: 5px}']

  // for multiple line have to use backtick (``)
  styles: [`h1{
    color: red;
    font-size: 5px}`]
    */
   // now replace all the noisy code to standard or file manner

   templateUrl: './nav-bar.component.html',
   styleUrls: ['./nav-bar.component.css']
}
)
export class NavbarComponent {

  /*
  instead of create all those file  & add on app.module.ts , we can run "ng g c post" command ,
  allthose file + configuration will create by angular for us to save our time
  */
}
