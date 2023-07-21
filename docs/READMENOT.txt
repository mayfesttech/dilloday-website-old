==================================
	Lets Get Started
==================================
// Not necessary in current React Architecture unless we go back to mongo
// start mongod
$ sudo mongod
// new terminal
$ grunt --force
// DEBUG: find mongo processes
Ps -ef | grep mongo
// DEBUG: kill processes
sudo kill <processID>

==================================
	Testing and Pushing
==================================
// after changes:
git add -A
git commit -m "."
git push

// push our changes to the staging site
heroku git:remote -a staging-mayfest
git push heroku master

// go to: http://staging-mayfest.herokuapp.com/
// credentials ?/?

heroku git:remote -a mayfest
git push heroku master

==================================
	Make A New Route
==================================
// new route in src

==================================
	Update the Lineup
==================================
// keystone credentials: ?/?
// 1. Make a new artist in Artists
// 2. Check "Can Display", enter all other info
// 3. Go to lineups
// 4. Lineup must be titled "Main Stage" to display current year
// 5. Add the artist by searching

Notes:
	-Check "Past Lineups" to send something to "about" page
	-Lineup.Coffee might call a different main stage (depending on sponsor)
		-Ex: 2018, "Postmates Main Stage"
		-Make sure that lineup.coffee matches with name on keystone

==================================
	Make a Splash
==================================
// 1. Write HTML in new mustache file
// 2. New coffee file that links to the new mustache file with res.render 'name'
// 3. link the mustache file / view in /routes/index.coffee

==================================
	Miscy Whiskey
==================================
// images go into build/images
// slide decks go into build/files

// do trivial changes work?
