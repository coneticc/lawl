(function() {
    // Function to click the 'Following' buttons
    function clickFollowingButtons() {
        // Find all buttons that match the 'Following' label
        const followButtons = Array.from(document.querySelectorAll('button[aria-label*="Following"]'));
        
        if (followButtons.length === 0) {
            console.log('No more "Following" buttons found.');
            return;
        }

        // Click each "Following" button
        followButtons.forEach(button => {
            button.click();
            console.log('Clicked a "Following" button.');
        });

        // Scroll down to load more buttons
        window.scrollBy(0, window.innerHeight);

        // Wait a bit for the new buttons to load and then call the function again
        setTimeout(clickFollowingButtons, 2000); // Adjust the timeout based on your page's speed
    }

    // Start the process
    clickFollowingButtons();
})();
