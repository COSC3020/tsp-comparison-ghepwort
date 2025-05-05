# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.

## Answers

The length of the tour of Held-Karp will always be less than or equal to the tour length of Local Search. This is because while Held-Karp finds the shortest possible path, Local Search essentially find a path that is close enough to being the smallest based upon some heuristic. This means that Local Search very easily can produce a result larger than that of the Held-Karp path. We also know that the Held-Karp path is the shortest possible path so at best Local Search can be the same length as Held-Karp. Combining those two peices of information we get that the Local Search path can be either larger or equal to that of Held-Karp.

What I did was I took my implementation of tsp_Local_Search and compared it to Noah Vogn's version of Held-Karp. I started by creating a function that would generaterandom distance matrix's that has an input of the size of matrix I want. I then put this inside of a loop to run an $i$ number of times. This would generate a unique distance matrix of whatever input size I needed for that iteration. I then found sime simple timing code and timed both implementations. After each have found a path, I then output the number of nodes, the distance of the path they found, and the time it took them into a JSON file. Using this JSON file I created some very simple Python code to plot the input size vs time and input size vs path length graphs.

The longest runtime I’ve observed with my Held-Karp TSP implementation was for 20 cities, which takes around 19 to 21 minutes. However, the problem never finishes for 21 cities, even after running for up to 12 hours. Based on timing data from 0 to 20 cities, I expected the 21-city case to take about 1 hour, or at most 1 hour and 45 minutes. I'm unsure why the runtime increases so drastically beyond 20 cities.

## Sources

I used [GeeksForGeeks](https://www.geeksforgeeks.org/graph-plotting-in-python-set-1/) to help plot my data. It was actually surprisingly easy and will probably be what I use to plot data from now as as taking data from a JSON format is really easy using it.

I used [Noah Vogt's](https://github.com/COSC3020/tsp-comparison-noahvogt1.git) implementation of TSP Held-Karp for this program.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.