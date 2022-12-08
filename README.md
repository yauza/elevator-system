# Elevator System

## How to use
Open this <a href="https://yauza.github.io/elevator-system">link</a> and add as many elevators as you want using the `Add elevator` button. In the `Control Panel`, you can create elevator requests by choosing the `Start Floor` and `Destination Floor` and clicking `Call elevator`. To start (or stop) the simulation, click on the `Start` button.

## How it works
Algorithm focuses on the direction in which elevator is going. Thus, there are 3 ways the elevator can recieve a call (in order):
1. It is free at the moment
2. It is going in the direction of the call, ex. 
   * Elevator is on the 5th floor and is going towards the 9th floor
   * Someone calls the elevator on the 8th floor and wants to get to the 1st floor
   * Elevators path after the update: 5th floor -> 8th floor -> 9th floor -> 1st floor
3. If there are no free elevators left and every elevator is going in the different direction than the call, the algorithm will choose the least busy elevator (with the smallest number of calls overall).

