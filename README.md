# Hello, Cloudflare Team!

Thank you for this opportunity to audition for your company. To run this app, please: 
  * clone the repo, then 
  * npm install, then
  * npm start
  * visit http://localhost:5050
  * click the links at the bottom of the pages to advance
  
Below are the reponses to your questions about the designs and the code.

**HTML & CSS Questions**

**Which design details are difficult to implement?**
  * There wasn't any particularly difficult one, but I was unable to implement the highlighting of links and table rows or the email and password validation without JavaScript. In general, ensuring cross-browser compatibility is always difficult.<br/>

**Which design details are impossible to implement?**
 * Nothing is impossible if you believe in yourself :) <br/>
 
**As regards to the designs themselves:** <br/>

  *Do they provide you with enough information to facilitate implementation?*
  * The designs could definitely use more information from the designer, such as hex codes for colors and specific typefaces.
  * The designs don't specify what should happen when the viewport/device size goes below 640px. It may never be necessary, but usually, I would implement a small size design that stacks components and/or drops some superfluous ones, but there was no mention of it, so I skipped it for now. The design also does not indicate how the table should look at 200px wide, so I gave it an overflow scroll, but I don't think it's very usable.<br/>
  
  *How would you change them? How might you seek confirmation or feedback?*
   * In a non-challenge setting, I would send this prototype to the designer with specific questions about colors, typefaces, scrolling, and expected small screen use. <br/>
  *Are they good designs? That is, in your opinion, do they contain design errors? If they were to be implemented as is, would they enhance or hinder the user experience?*
  * Aside from the lack of planning for smaller devices and table scrolling mentioned in the previous questions, I think they are nice, simple and legible designs.<br/>

**What browser-specific issues arise from the designs?**
 * The decision to maintain compatibility with IE9 means that flexbox, alpha color, et al. isn't fully supported. <br/>
 
**What compromises or changes would you make to facilitate cross-browser implementation?**
 * I chose to use flexbox with a simple polyfill, which tells flex-items to act like table-cells, to get around the IE9 incompatibility, but the layout of the page might be more cross-compatible if it were a bit blockier (especially since the background is white and the user won't be able to see that the widgets are floating on custom-sized boxes). That would be simpler to completely replace with a more backwards-compatible table structure. <br/>
<br/>
  
**JavaScript Questions**


**How can EventEmitter change to support wildcard tokens in the event key ( app.*.log )?**
* I'm not 100% sure if this is what you're looking for, but I think you could add a conditional that triggers when a wildcard is passed in to loop through all existing events, adding the function passed as the second parameter to all event callback arrays. This would only add the callback to existing events, though, so events added after that wildcard would not receive the callback. A solution to THAT might be to create * as its own event and keep an array of all the callbacks placed that way, and place all the callbacks in the array on to any future events created upon creation, along with the custom callback for that event.  


**Can EventEmitter be modified to support a limited number of callbacks for a given event key?**
* Yes! It would be very easy to limit the number to one by simply have the value of events[event] be a single function that gets replaced every time a new one is set with .on. Otherwise, to set a limit on the length of the array of functions in events[event], when checking for the existence of the array in the .on method, you could simultaneously check the length of the array, for example:
```  
if (this.events[event] === undefined) {
  this.events[event] = [cb];
} else if (this.events[event] && this.events[event] < X){
  this.events[event].push(cb);
} else {
  return 'Too many functions assigned to that event.'
}
```
