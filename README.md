# Project Overview

This is Josh Pearson's submission for Udacity's Front End Web Developer Project 10.

In this project [Jasmine](http://jasmine.github.io/) is used to test an RSS feed website.



# Functionality

This application loads four different RSS feeds from Udacity and FeedBurner. The Udacity feed is loaded by default, and users can click on the menu options to load the other feeds. The app also tests its functionality in feedreader.js , the results of which are displayed at the bottom of the page.

Once the DOM is ready, feedreader.js tests if all the RSS feeds are defined and have names and urls. It then tests the functionality of the menu to ensure it is hidden by default and that it changes visibility when it is clicked. Finally feedreader.js tests that the initial call to load the RSS feed is working, and that the RSS feed successfully changes when a new feed is called.

To run this application on your localhost please open index.html in your web browser.

