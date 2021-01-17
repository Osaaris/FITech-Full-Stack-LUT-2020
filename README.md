Assignment returnings for FITech course: "Software development skills: Full-stack"
____

Näissä osioissa on "Software development skills: Full-stack" -kurssin tehtävien palautukset.

Kurssin järjestää LUT-yliopisto ja sen laajuus on 3 op.

https://fitech.io/fi/opinnot/software-development-skills-full-stack/

____
- Oppimispäiväkirja löytyy alapuolelta
- Linkki videoon: https://drive.google.com/file/d/1N-jY-ZAmRQJGn4Gvm_bQHreiqHnRN2tO/view?usp=sharing
- Module task -kansiossa ovat kurssitehtävät
- Projekti löytyy Project-kansiosta.


____
____


**Lappeenrannan teknillinen yliopisto**
**School of Business and Management**






S**ofware Development Skills**

Olli Saaristo, **********


LEARNING DIARY,
Anytime-course: Software Development Skills: Full-Stack 2020-21 MODULE
 
LEARNING DIARY

**30.11.2020**
(link to my GitHub) https://github.com/Osaaris/FITech-Full-Stack-LUT-2020

(video)
https://drive.google.com/file/d/1N-jY-ZAmRQJGn4Gvm_bQHreiqHnRN2tO/view?usp=sharing

**Node.js**

I was familiar with Git and many text editors, but I decided to use good old VS Code, because I'm most experienced with it. I prefer VS Code over Atom, Notepad++, Editra, SublimeText, etc. because it's simple and easy to use and has a lot of great extensions. I have also decided to use GitHub over Bitbucket, mainly because I want to keep my repositories in one place.

I learned a lot of new things today, despite the fact that I've done Full Stack previously. For instance, the fact that you can write node codes directly to CMD was new to me. I really like the choice of this course's YouTube video tutorials; they are much better quality when compared to some other tutorials I've watched.

shortcuts for VS Code I learned from the video:
-	Toggle line comment //
o	Ctrl+' 
o	Ctrl+K+C (undo Ctrl+K+U)

I created Heroku user, but I'll rather use my GitHub to store the codes.
I watched the video entirely, and learned a lot of new information about how the node modules work and how to create them as on your own. All I can say is that thank god we don't have to create them, when we can download them with npm.

**30.11.2020
MongoDB**

I learned few new things about MongoDB and installed MongoDB Compass.
I copy and pasted the useful commands from GitHub document to my local notes.
https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6

I have also enrolled to another course by another organization, and I have access to FrontEnd Masters web-site. I have watched similar videos there.



**1.12.2020
Angular**
https://angular.io/tutorial

This is my first time when I'm using Angular. The CLI was easy to install. I haven't worked with .ts files before and the syntax is different I've used to.
Following the tutorial (Tour of Heroes) is a nice way to get familiar with Angular.

I had some difficulties with tutorial, mostly because I put the code parts into wrong section. Although Angular seems powerful tool, I'm not very good to use it, yet at least.
Creating components with CLI seems handy and useful feature.

All of the commands used in CLI were new to me (with Angular).
Most important ones are
ng serve --open
ng serve
ng generate service ####
	ng generate component

After completing the tutorial I can say that it's not my favorite tool... But maybe I'm not seeing the full picture of its benefits. I read an article that said it's good when making dynamical websites, and it's from Google, which is a plus.
The tutorial itself was nice, but there's so much new information to me that I may have to read it again at some point.



**2.12.2020
ExpressJS**
https://www.youtube.com/watch?v=L72fhGm1tfE

Dealing with APIs is not my strong suit, but I learned new information about the structure and how to make API calls. Backend in general is something I need to study more.
What did I learn from the video? First, I learned couple shortcut tricks in VS Code, second I learned more about how the folder and file structure should be done.
I also learned a bit more of npm libraries and got good practice.

I struggle with API things in general, so it's something I need to work on.
The video used Postman for the exercises, but I used Insomnia because I'm more familiar with it. 


**7.12.2020
ExpressJS**
I continued the tutorial. I had some problems with the connections to database, couple typos and one of the functions was outdated in the video. Luckily someone commented on YouTube comment section, that the password had to be "toString()" instead of just "String".

password: {
	// This didn't work
        type: String,
        required: true
    }

password: {
	// But this fixed the problem
        type: toString(),
        required: true
    }

I ran into problems with Insomnia, it kept crashing npm and I don't know why. I decided to copy the source entirely from the git. (Meaning I changed String back, but I edited the ExtractJwt.fromAuthHeaderWithScheme("jwt")).

I was having problems with CSS because the method that was used in the video didn't work anymore, the URL has been moved and I couldn't find a working one. I created some basic CSS straight into the file, but it's not as pretty as in the video.
I managed to get part 6, but I'm done for the day, it's quite exhausting to chase errors and problems.
Other problems I had was that Angular CLI didn't work properly. Task said that the old CLI should be used, but I couldn't manage to make it work, after a long fight, I installed the current CLI and changed the configurations (they were in different file).

I had more technical difficulties than before as the video was outdated and some commands didn't work the same way. I'm slow with debugging because it takes time to figure out how things work, but I also think it's educational.



**15.12.2020
MEAN-Stack**
I completed the rest of the videos today, but the code doesn't work properly... I will have to check the final code and see if I can find some differences.
I did all except the Heroku push part, since I don't want to push it there. I noticed that he used MLab, which I have used too.

Everything with Angular was new to me, so these videos came really handy and I learned a lot from them. Now I need to fix my errors and start to build my own app for the course.





**16.12.2020
MEAN-Stack**
I started to make the project app, and started from the beginning with the tutorial videos. Knowing what to except from the tutorials, it's easier to follow and understand what is going on.
I was thinking on building a simple blog or text-based website with the necessary logins and backend.


**17.12.2020**
I had problems with Insomnia (again) but thankfully one of the YouTube comments was able to fix the situation (bolded):

Greyson Yee
3 years ago (edited)
For those who have an error of "Expected "payload" to be a plain object.",  modify the line in users.js
from->const token = jwt.sign(user, config.secret,{
                    expiresIn: 604800 //1 week
                });
to -> const token = jwt.sign({data:user}, config.secret,{
                    expiresIn: 604800 //1 week
                });

For those who got error of "fromAuthHeader() is not a function", change this line in passport.js.
from -> opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
to -> opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');

For those who unable to get data with authenticated token, apply the change above, and the following line in passport.js as well
from -> User.getUserById(jwt_payload._doc._id,(err,user)=>{ //bla bla bla
to -> User.getUserById(jwt_payload.data._id,(err,user)=>{ //bla bla bla

I was missing ".data" and therefore it didn't work.


I did more debugging and when making "register.component.html", Angular was giving an error. To fix it I added 
import { FormsModule } from '@angular/forms';
[...]

@NgModule({
  imports: [
    [...]
    FormsModule
  ],
  [...]
})

as instructed in here:
https://stackoverflow.com/questions/38892771/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input


**17.1.2021**
I'm returning the course project. I couldn't get the backend to work properly, so the register and login forms are not working properly.
This is the best I can do with my current skills.

Video link:
https://drive.google.com/file/d/1N-jY-ZAmRQJGn4Gvm_bQHreiqHnRN2tO/view?usp=sharing
