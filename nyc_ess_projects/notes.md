Goal:
Filter and count / calculate the following important metrics for Con Edison energy storage systems in NYC:

1.	Energy Storage Applications
    a.	Count number of ESS applications by year
    b.	Calculate running total of ESS applications by year

2.	Completed Energy Storage Applications
    a.	Count completed ESS projects by year
    b.	Calculate running total of completed ESS projects by year

3.	ESS Power (kWAC)
    a.	Completed ESS (kWAC) by year
    b.	Running total of completed ESS (kWAC) by year
    c.	ESS (kWAC) applied for by year
    d.	Running total of ESS (kWAC) applied for by year

Notes:
•	Use ‘/data/csv/coned_2020-02.csv’ 
•	Only count energy storage projects (ESS (kWAC))
•	Exclude any thermal ice storage projects (ICE (kWAC))
•	Only counting projects in the Five Boroughs (exclude Division: CENY-W)
•	For application date, use Start Date under APPLICATION REVIEW  
•	For completed project date, use Final Letter of Acceptance Date
•	The way the original Excel file from which the original data is laid out is annoying and has two rows above the actual column headers we need. As a work around, when reading the data using Pandas I skipped the top two rows.
•	You can follow my thought process in the comments in the Jupyter notebook files. I’m positive there are more effective ways to filter and count the data, so go about in the way you see most efficient.
•	I noticed a difference in Power (kWAC) I got in Python vs. Excel. This is the big inconsistency that is important to check, as mentioned yesterday.
•	It would be cool to then be able to pull the main metrics above into Highcharts to visualize. Don’t worry too much about this now though.
•	You can compare with some charts I made, found in the charts.html file. Again, I may have made a mistake here and there, so it would be very helpful to compare results.
