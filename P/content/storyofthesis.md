Title: Story of Thesis.tex
Date: 2013-04-16 10:20
Category: Review

Since I finished writing my Master thesis and waiting for reviews of my advisor, I have a bit time for some side projects. Here comes one of them. Main motivation of this side project comes from a PhD Comics “A story in file names” comic.</p>

![](http://www.phdcomics.com/comics/archive/phd052810s.gif "Story")

Situation visualized in the comic is pretty common for most of us; filenames modification dates and all other metadata actually tell a
story about the file, experience and us. Hence, my main motivation was capturing the story told via metadata of the file. Since I synced my
entire thesis with Dropbox, I had an extensive amount of metadata. Dropbox keeps all revisions of the files with modification dates and
revision numbers.

I have implemented a script using Dropbox Python API, and fetched all  versions of my thesis files. Then, I have included some statistics
computation in my small script. I computed the word count of each file in each revision -time instant-. Finally, I dumped this huge revision,
time and word count log into a CSV file. Since Dropbox synced all modifications almost instantly and I saved my files after each
paragraph, I had time instant for the each paragraph I have written in my thesis. Then, I plot this data by using Mathmetica and [XKCD like plotting]("http://mathematica.stackexchange.com/questions/11350/xkcd-style-graphs"). I included some of the figures below and their corresponding stories. You can also reach source code to produce the following graphs through <a href="https://github.com/ozansener/storyoffile">https://github.com/ozansener/storyoffile</a>

<p><img src="{filename}/images/day.png" width="720"></p>

First graph is the number of words vs calendar days. As shown in the Figure, I have started to write my thesis in Mar 14 by copy/paste’ing
all my papers into a single file. Then, for 8 days I did not even write a word. This time was simply spent to accept the fact that combination of
 the papers is not a thesis. March 23 is the motivation boost day. I finished introduction completely, written some of the Graph Theory
chapter. Then, comes 9 days of procrastination, motivation boost, 6 days of procrastination and final motivation to finish the thesis. I am not
surprised to see my motivation spikes and long procrastination times since I generally work with high motivations for a short amount of time.

![]({filename}/images/dayow.png)

Second graph is the number of words vs day of the week. Apparently, Friday is a procrastination day for me. I couldn’t believe I almost did
not work on Fridays. Sunday is generally juggling and relaxation day. So, inefficiency of the sunday is understandable. Inefficiency of the
Wednesday comes from a small TA meeting. Although it takes only 1 hour, It significantly decrease my efficiency. Graph also suggests that I
experience sort of a Monday syndrome :p

![]({filename}/images/hour.png)

Final graph is the number of words vs hour of the day. Interestingly, I wrote almost all of my thesis between 19:00 and 20:00. I believe this
 is due to  my laziness to go home and stay in the lab after dinner (generally between 18:00-19:00). Then, I start to procrastinate or go
drinking etc. Since lab is pretty empty between 18:00 and 19:00 I have almost no distraction. My lunch  (13:00-14:00) and dinner time are also
clearly visible in the graph. My waking up process looks like finishing around 11:00. Hence, I am pretty useless until 11:00. Finally, after
15:00 I believe I start to get bored and start to procrastinate.

In conclusion, every data has a story in it. Indeed, metadata of the files in the Dropbox is not an exception. Visualizing the story of any
file is a great fun and is suggested to everyone. If you have some knowledge of python and some data analysis tool (Numpy/Scipy,
Mathmetica, Matlab, Excel), you could also extract the story of the file  synced by Dropbox. My scripts are entirely open source and can be
reached via  [https://github.com/ozansener/storyoffile](https://github.com/ozansener/storyoffile)  I am also open to any comments or suggestions.
