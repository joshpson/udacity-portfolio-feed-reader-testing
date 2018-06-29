/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable has
         * been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the
         * URL is not empty.
         */
         it('urls are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var feed = allFeeds[i];
                expect(feed.url).toBeTruthy();
            }
         });

        /* Loops through each feed in the allFeeds
         * object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var feed = allFeeds[i];
                expect(feed.name).toBeTruthy();
            }
         });

    });

    /* Menu test suite */
    describe('The menu', function() {
        /* Ensures the menu element is hidden by default. */
         it('menu is hidden by default', function() {
            var initialBodyClass = document.body.classList;
            expect(initialBodyClass).toContain('menu-hidden');
         });

         /* Ensures the menu changes visibility when
          * the menu icon is clicked.
          */
        it('menu changes visibility on click', function() {
            var menuIcon = $('.menu-icon-link');
            var firstClick = function() {
                menuIcon.click();
                var clickedBodyClass = document.body.classList;
                expect(clickedBodyClass).not.toContain('menu-hidden');
            };
            var secondClick = function() {
                menuIcon.click();
                var clickedBodyClass = document.body.classList;
                expect(clickedBodyClass).toContain('menu-hidden');
            };
            firstClick();
            secondClick();
         });
    });

    /* Initial Entries test suite */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* Ensures when the loadFeed function is called
         * and completes its work, there is at least a
         * single .entry element within the .feed container.
         */
        it('at least one entry within the feed', function() {
            var entries = $('.feed .entry');
            expect(entries.length).toBeTruthy();
         });
    });

    /* New Feed Selection test suite*/
    describe('New Feed Selection', function() {
        /* Ensures when a new feed is loaded by the
         * loadFeed function that the content actually changes.
         */
        it('content changes when a new feed is loaded', function(done) {
            var firstFeed;
            var secondFeed;
            loadFeed(0, function() {
                firstFeed = $('.feed').children().text();
                loadFeed(1, function() {
                    secondFeed = $('.feed').children().text();
                    expect(firstFeed).not.toBe(secondFeed);
                    done();
                });
            });
        });
    });

}());

