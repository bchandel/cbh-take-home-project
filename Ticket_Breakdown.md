# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Below are the Major Breakdown

1. Required DataBase modification to accomodate the desired functionality.
2. Required code changes to accomodate the desired functionality.

# Assumption for DataBase (i.e #Task1)
1. We have all the required indexing in place for the required columns for all 3 tables mentioned
2. We are using RDMS DB so, table relations defined properly.
3. Custom AgentId will be unique as per the facilities and it will be generated only once. 

# Implimentation datail for DB task
1. Need to alter the Facilities table in order to add the custom AgentId Column.
2. We also need to add the custom AgentId Column value for each facilities for the associated agents in the Facility table.
3. We can write one script which will add the custom AgentId value and we can run same script in the production.
4. We also need to modify the code where we are doing the agent association with the facilities to accomodate the custom AgentId change.

# Efforts Estimate
1. For the table alteration 10-15 Minute 
2. For writing the script 8-10 Hours
3. For code modification 3-4 Hours (As we also need to modify the existing test case)


# Assumption for Adding the code  (i.e #Task2)
1. All the required common utility class are already present (i.e DBTransaction class, QueryBuilder class, DBConnection class etc)

# We can further Breakdown  #Task2
1. Add `getShiftsByFacility` function and its test cases
2. Add `generateReport` funtion and its test cases.

# Implimentation datail for function `getShiftsByFacility` 
1. Need to add the query to get the desired result.
2. Accomodate the test cases for this newly function.

# Implimentation datail for function `generateReport` 
1. Need to add the Aggregation query to get the desired result.
2. Write the PDF utility to generate the report in PDF format.
2. Accomodate the test cases for this newly function.

# Efforts Estimate
1. For adding `getShiftsByFacility` function 5-6 Hours (Including test cases)
2. For adding `generateReport` function 12-15 Hours (Including the test cases)