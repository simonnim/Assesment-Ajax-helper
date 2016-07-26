## Part 2: AJAX Sinatra Challenge

This is an application that keeps track of Penelope's horses.

### Release 0

A horse has a name, age, and breed. Create the validations and models for the horse.

### Release 1

Go ahead and create, migrate, and seed your database. **Add any ids, classes, or partials you need to complete the requirements.**

First, AJAX the rendering of the form that's used to create a new horse so that it is dynamically loaded. For example, after clicking the "Create a new horse" link, the following should appear:

![Horse Form](http://i.imgur.com/DpLoZD5.png)

You will need to update your controller and your HTML markup to accomplish this. Right now, the `<form>` and `<a>` tags do not go anywhere.

### Release 2

Upon submission of this form that was dynamically added, we want to append the new Horse to the existing list of horses, like so:

![Horse Inputs](http://i.imgur.com/LVnGaVC.png)

![Append Horse](http://i.imgur.com/uT1r91B.png)

Be sure to remove the form after a new Horse is created.

### Release 3

When clicking on an individual Horse, let's have the details of that Horse appear right beneath that Horse's name, like so:

![Horse Deets](http://i.imgur.com/HrHn0Eq.png)

### Release 4

Done? Refactor your JavaScript to make it more organized. Also, double check your controller methods to make sure they are as organized as possible and control for if a method is evaluated from an AJAX call or a normal HTTP request.

**Finished?** Be sure to commit your code, but please don't push it up to Github until time is called.







