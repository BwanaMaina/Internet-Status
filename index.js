try {
    window.addEventListener('load', function() {
        function checkStatus() {
            //assign either .online or .offline className
            //you can use an if statement to check
            //once assigned it will change the color to either green or red
            window.document.getElementById('status').className = navigator.onLine ? 'online' : 'offline';
            //display the current connection status
            //you can use an if statement or Conditional (ternary) Operator
            window.document.getElementById('status').innerHTML = 'You Are : ' + window.document.getElementById('status').className;
        }
        //detect whether browser is online
        //invoke the function to do the operation
        window.addEventListener('online', checkStatus);
        //detect whether browser is offline
        //invoke the function to do the operation
        window.addEventListener('offline', checkStatus);
    });
} catch (error) { window.console.log(error) }