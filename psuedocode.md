# What starting data does the application need to run
- Current day and time
    - current hour of the day

# What data will the application interact with

- localStorage
    - saved text for each hour of the day
    Dont: localStorage.setItem ( 'tasks;, {'9': "value"})
    Do: localStorage.setItem ( 'hour-9', "hour 9 text value") this way you don't need to JSON.stringify
    Use textarea tag for the input boxes 