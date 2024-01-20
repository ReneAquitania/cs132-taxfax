import React from 'react';
import frequentwords from '../images/exploration_plots/frequent_words.png';
import frequentwords2 from '../images/exploration_plots/frequent_words2.png';
import accounttypes from '../images/exploration_plots/account_types.png';
import avgfollowercount from '../images/exploration_plots/avg_follower_count.png';
import avgfollowercount2 from '../images/exploration_plots/avg_follower_count2.png';
import avgfollowercount3 from '../images/exploration_plots/avg_follower_count3.png';
import datesjoined from '../images/exploration_plots/dates_joined.png';
import datesposted from '../images/exploration_plots/dates_posted.png';

const Data = () => {
  return (
    <div className="mt-10 flex min-w-full justify-center">
      <div className="md:w-3/5">
        <div className="flex gap-4 items-center">
          <h1 className="text-5xl font-bold">Data Exploration Visualizations</h1>
          <div className="flex max-w-min hover:scale-105 transition-all ease-in-out">
          <h2 className="font-semibold my-6 min-w-max">
              <a 
                className=" bg-taxfaxred-300 px-8 py-3 text-white rounded-full "
                href="https://colab.research.google.com/drive/1cBp-f-SIDquhCS9CZ0z_mtIxsc3LcTWD" 
                target="_blank" 
                rel="noreferrer">
                  Google Colab
              </a></h2>
          </div>
        </div>
        <div className="mt-10 space-y-3 px-8 py-3 border-[5px] border-taxfaxred-300 rounded-3xl">
          <h1 className="text-3xl font-bold">Plot 1: Frequency of Words</h1>
          <p>Taking the results of the preprocessing, we look at which words come out the most often among the disinformation tweets. Using the dictionary, it would keep track of which words have been found, and which words are new. The keys are the unique words, and its values are its frequency.</p>
          <p className="font-bold font-mono text-taxfaxred-300 text-xl">Number of unique words: 944</p>
          <p>Due to the number of unique words found among the tweets (944), the plot is cannot show all the unique words due to spatial constraints. Instead, we will show the top 10 most frequent words that were used. </p>
          <img src={frequentwords} alt="" />
          <p>The top 3 words are to be expected as they are words describing the topic. Also, "marcos" is among the top 10 for that same reason. For that reason, we disregard these words and look at the next top 10 words.</p>
          <img src={frequentwords2} alt="" />
          <p>These are the words most commonly used with consideration to the topic keywords. The words are very much related to the estate tax issue, and some may even represent the point of the tweet (e.g. heir, paid). However, the premises of the accounts would need to be grouped and verified using Machine Learning to determine whether or not to accept the hypothesis.</p>
        </div>

        <div className="mt-10 space-y-3 px-8 py-3 border-[5px] border-taxfaxblue-300 rounded-3xl">
          <h1 className="text-3xl font-bold">Plot 2: Account Type Comparison</h1>
          <p>Among the selected tweets, not every single one is from an account that is for personal or professional use. More well known (Identified or Media) accounts may be more trustworthy and susceptible to spreading disinformation through their following. Even personal accounts is considered for this as the accounts who follow them know them personally. This distribution would gauge how likely disinformation is trusted based on the account type. </p>
          <p>Similar to the previous plot, a dictionary is used to keep track of the unique values and its frequency. The values checked this time, however, are the account types. In other words, this code counts the number of each account type encountered.</p>
          <p className="font-bold font-mono text-taxfaxred-300 text-xl">Number of Anonymous accounts: 102<br />Number of Identified accounts: 39<br />Number of Media Accounts: 3</p>
          <img src={accounttypes} alt="" />
          <p>It is clear that a majority of the accounts are anonymous. While some may still be mislabeled simply because that they're personal accounts that doesn't use their personal information, it can be said that most of the disinformation tweets come from untrustworthy sources or accounts.</p>
          </div>

          <div className="mt-10 space-y-3 px-8 py-3 border-[5px] border-taxfaxred-300 rounded-3xl">
            <h1 className="text-3xl font-bold">Plot 3: Follower Count Distribution</h1>
            <p>We look at the follower counts of the accounts that tweet disinformation about the topic. This can gauge how many users are exposed to disinformation tweets. Given the follower count is numerical, it is appropriate to visualize this through the use of a histogram. This uses <span className="font-bold font-mono text-taxfaxred-300">np.histogram</span> to transform the data into bins and counts plotable by <span className="font-bold font-mono text-taxfaxred-300">plt.hist</span>. Furthermore, we take a peek at the average follower count, calculated using <span className="font-bold font-mono text-taxfaxred-300">np.average</span> of an account to gauge the exposure of the disinformation tweet.</p>
            <p className="font-bold font-mono text-taxfaxred-300 text-xl">Average follower count: 15525.0902777777777</p>
            <img src={avgfollowercount} alt="" />
            <p>The distribution shows the effect of accounts with extremely high following, such as CNN Philippines who is sitting at 1.8M followers. Say we were to exclude the obvious outlier by setting an upper boundary of number of followers, the plot would be updated as follows.</p>
            <p className="font-bold font-mono text-taxfaxred-300 text-xl">Average follower count: 1632.4859154929577</p>
            <img src={avgfollowercount2} alt="" />
            <p>The histogram stil show that majority of the data are left-skewed. We check the z-scores of each data to determine if there are any other outliers. The z-scores are calculated using `zscore` from `scipy.stats`. Outliers are usually 3 standard deviations away from the mean. Therefore, we check if any z-score is greater than or equal to 3 or less than or equal to -3. </p>
            <p className="font-bold font-mono text-taxfaxred-300 text-xl">Average follower count: 628.3550724637681</p>
            <img src={avgfollowercount3} alt="" />
            <p>With considerations to the outliers, the average follower count of some average twitter user posting disinformation about the topic is 624. The histogram above shows the distribution of the follower counts of these accounts. Majority of the accounts posing disinformation span from 0 to about 800 followers. Given the average. there is a lot of people of whom are exposed to disinformation due to Twitter's algorithm of suggesting tweets from followed accounts.</p>
          </div>

          <div className="mt-10 space-y-3 px-8 py-3 border-[5px] border-taxfaxblue-300 rounded-3xl">
            <h1 className="text-3xl font-bold">Plot 4: Dates Joined Distribution</h1>
            <p>One may also look at the accounts from the perspective of when they were made. Troll farms are premediated, there is likely a time near or during the electoral period where there is an influx of accounts. This plot distribution can show whether or not that's true. Due to spatial constraints of the plot, each account is grouped per year.</p>
            <p>The dates are parsed by using the delimiters in the format. The delimiter between month and year was /. This allows us to acquire the year. These are then stored into dictionaries, similar to the previous bar plots. Furthermore, we track the earliest year. This allows us to fill in gap years later on with 0 as its frequency, so that the plot would show the years in succeeding progression. Of course, the latest year would be 2022.</p>
            <img src={datesjoined} alt="" />
            <p>From the accounts in the dataset, there is a clear spike in account creations during the electoral period starting 2021. Although, a good number of the accounts were made even before BBM applied for candidacy. These accounts are very likely legitimate accounts of whom the owner is a victim of disinformation.</p>
          </div>

          <div className="mt-10 space-y-3 px-8 py-3 border-[5px] border-taxfaxred-300 rounded-3xl">
            <h1 className="text-3xl font-bold">Plot 5: Dates Posted Distribution</h1>
            <p>When the tweets were posted provides context of the political climate and relevancy of the disinformation posted. We look at the distribution of the dates when the tweets are posted for this. For the histogram to work, the specific datetime is converted to a UNIX timestamp. </p>  
            <p>Parsing the date requires the use of the delimiters defined for the format. First, the date and time is separated with the delimiter <span className="font-bold font-mono text-taxfaxred-300">' '</span>. The date and time are stored into a 2-element tuple. The date is separated using <span className="font-bold font-mono text-taxfaxred-300">/</span> to get the year, month, and day. The time is separated using <span className="font-bold font-mono text-taxfaxred-300">:</span> to get the hour and minute. Using these values, a datetime object is made, of which is converted into UNIX time for the histogram. Similar to Plot 3, <span className="font-bold font-mono text-taxfaxred-300">np.histogram</span> is used to determine the counts and bins to be used for the plot generated by <span className="font-bold font-mono text-taxfaxred-300">plt.hist</span>.</p>
            <img src={datesposted} alt="" />
            <p>The histogram above indicates that most of the tweets are posted from 1.645e12 to 1.650e12 in UNIX time, which is from February 16, 2022 8:26:40 AM to April 15, 2022 5:20:00 AM in date time format. It is clear that the posts appeared at the peak of the election period. However, during this time was when the topic was most relevant. It was around this period when Isko Moreno and the BIR pressured the Marcoses to pay their estate tax. The trend drops quickly after the election, but began to gain traction after 1.660e12, or August 8, 2022 11:06:40 PM. </p>
          </div>
      </div>
    </div>
  )
}

export default Data