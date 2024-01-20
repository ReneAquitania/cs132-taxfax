import React from 'react';
import lowercasing from '../images/preprocessing/lowercasing.png';
import stopwordremoval from '../images/preprocessing/stop_word_removal.png';
import lemmatization from '../images/preprocessing/lemmatization.png';
import topics from '../images/modelling/topics.png';
import spreadsheet from '../images/spreadsheet.png';

//tweets
import tweet1 from '../images/tweets/in1987.png';
import tweet2 from '../images/tweets/failitr.png';
import tweet3 from '../images/tweets/fakereceipt.png';
import tweet4 from '../images/tweets/imbento.png';
import tweet5 from '../images/tweets/moralturpitude.png';
import tweet6 from '../images/tweets/marcossr.png';
import tweet7 from '../images/tweets/legit.png';
import tweet8 from '../images/tweets/withholding.png';
import tweet9 from '../images/tweets/failitr.png';
import tweet10 from '../images/tweets/blackprop.png';

const Methods = () => {
  return (
    <div className="mt-10 flex min-w-full justify-center">
      <div className="md:w-3/5">
        <h1 className="text-5xl font-bold">Data exploration</h1>
        <h2 className="text-3xl font-semibold my-4">Tweet Collection</h2>
        <div className="border-[5px] border-taxfaxblue-300 rounded-3xl px-8 py-3">
          <h3 className="text-xl font-semibold"> Keywords</h3>
          <ul className="list-inside list-disc">
            <li>To collect tweets related to this issue, we used Twitter's advanced search to find relevant tweets. Phrases used to look for these tweets include
              <ul className="list-inside list-disc pl-8">
              <li>"bbm tax paid"</li>
              <li>"marcos estate tax"</li>
              <li>"bbm tax issue"</li>
              <li>"unpaid marcos estate"</li>
              <li>"bbm tax evasion"</li></ul>
            </li>
          </ul>
          <p>and more phrases with similar keywords. We limited the scope of the tweets to be posted from 2016-2022 </p><br />

          <h3 className="text-xl font-semibold">Double checking</h3>
          <p>
            In a similar vein, Bongbong Marcos also has a separate tax evasion issue not related to the 203B PHP estate tax issue. 
            We made sure that the tweets being added to the dataset did not talk about that, but the estate tax issue.
          </p><br />

          <h3 className="text-xl font-semibold">Storing the data</h3>
          <p>
            To make the data be easily processed, we put tweet and tweet poster information in a spreadsheet.
            Data collected include the tweet itself, the tweet translated, date tweet was posted, poster follower count, date joined, 
            account type and other information
          </p>
          <img src={spreadsheet} alt="" />
        </div>

        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-semibold">Preprocessing</h2>
          <div className="flex max-w-min hover:scale-105 transition-all ease-in-out">
            <h2 className="font-semibold my-6 min-w-max">
              <a 
                className=" bg-taxfaxred-300 px-8 py-3 text-white rounded-full "
                href="https://colab.research.google.com/drive/1cBp-f-SIDquhCS9CZ0z_mtIxsc3LcTWD" 
                target="_blank" 
                rel="noreferrer">
                  Google Colab Preprocessing
              </a></h2>
          </div>
        </div>
        
        <div className="border-[5px] border-taxfaxblue-300 rounded-3xl px-8 py-3">
          <h3 className="text-xl font-semibold"> Step 1: Carry over important information/features</h3>
          <ul className="list-inside list-disc">
            <li>Important features selected for our project were:
              <ul className="list-inside list-disc pl-8">
              <li>Account type</li>
              <li>Joined</li>
              <li>Followers</li>
              <li>Translated Data</li>
              <li>Date Posted</li></ul>
            </li>
            <li>All features, except for Translated Data, were non-empty</li>
            <li>Cleaning Translated Data will be explained in Step 3</li>
          </ul>
        </div>

        <div className="mt-8 border-[5px] border-taxfaxred-300 rounded-3xl px-8 py-3">
        <h3 className="text-xl font-semibold"> Step 2: Clean data or remove unclean data</h3>
          <ul className="list-inside list-disc">
            <li>There were two possible types of unclean data: those that can be cleaned (e.g. inconsistent formatting) or those that cannot (e.g. recent data).</li>
            <li>Unclean data that can be cleaned were updated to be cleaned
              <ul className="list-inside list-disc pl-8">
                <li>Mislabeled account types were relabeled based on the data review</li>
                <li>Joined and Date Posted dates were reformatted to match their expected formats.
                  <ul className="list-inside list-disc pl-8">
                    <li>Joined format was MM/YY</li>
                    <li>Date Posted format was DD/MM/YY HH:MM</li>
                  </ul></li>
              </ul></li>
            <li>Unclean data that cannot be cleaned were removed from the dataset
              <ul className="list-inside list-disc pl-8"><li>These include those that are not disinformation, those that are recent data (i.e. tweets from 2023) and those whose information cannot be updated (e.g. deleted tweet but missing has data)</li></ul>
            </li>
          </ul>
        </div>

        <div className="mt-8 border-[5px] border-taxfaxblue-300 rounded-3xl px-8 py-3">
          <h3 className="text-xl font-semibold"> Step 3: Filling missing data</h3>
          <div>
            <ul className="list-inside list-disc">
              <li>As previously mentioned, the features selected were all non-empty save for Translated Data.</li>
              <li>Translated Data is data that is taken from Raw Data, where Raw Data is translated to English.
                <ul className="list-inside list-disc pl-8">
                  <li>Non-English words were translated to English</li>
                  <li>English words used in Raw Data were retained, but may be placed differently in the sentence based on how the sentence was translated as a whole.</li>
                </ul></li>
                <li>Other cleaning was done
                  <ul className="list-inside list-disc pl-8">
                    <li>Words wrapped in quotation marks had their quotation marks removed</li>
                    <li>Words wrapped in parentheses also had their parenthesis grouping removed</li>
                    <li>Phrases shortcut using symbols (e.g. word/phrase) had the symbol translated into a word (e.g. word or phrase)</li>
                    <li>Contractions were expanded (e.g. “what’s” becomes “what is”)</li>
                    <li>Values that are represented by abbreviations are formatted to 
                      <ul className="list-inside list-disc pl-8">
                        <li>(VAL)(ABBREVIATION)</li>
                        <li>e.g. 203 billion - 203B</li>
                    </ul></li>
                  <li>Removed tweet thread counting</li>
                  </ul></li>
            </ul>
          </div>

        </div>
        <div className="mt-8 border-[5px] border-taxfaxred-300 rounded-3xl px-8 py-3">
          <h3 className="text-xl font-semibold"> Step 4: Lower Casing</h3>
          <div className="space-y-4">
            <ul className="list-inside list-disc">
              <li>It is important to set all the alphabetical characters to lowercase to avoid case sensitivity. This is done by code.</li>
            </ul>
            <p>It is possible for the tokenization to mistake two words that mean the same thing because of the use of the letter case (e.g. BBM vs bbm). To avoid cases of case sensitivity when analyzing the tweet, the tweet's contents must be set to lowercase. This is done by using the <span className="font-bold font-mono text-taxfaxred-300">lower</span> function of the <span className="font-bold font-mono text-taxfaxred-300">lower</span> library.</p>
            <img src={lowercasing} alt="" />
          </div>
        </div>

        <div className="mt-8 border-[5px] border-taxfaxblue-300 rounded-3xl px-8 py-3">
          <h3 className="text-xl font-semibold"> Step 5: Remove Stop Words</h3>
          <div className="space-y-4">
            <ul className="list-inside list-disc"><li>Stop Words would provide us with no additional information. Hence, we remove them from the tweet. This is done by code.</li></ul>
            <p>Stop words are words that are used for grammar but do not give any additional useful information. These words are used very often in sentences. Because of this, it would show up with high frequency when plotting and modelling. These are to be removed. First, we import the necessary packages and downloads. These are all part of the NLTK module.</p>
            <p>The tweet would then be tokenized through <span className="font-bold font-mono text-taxfaxred-300">word_tokenize</span>. Each token is individually checked if it is a stop word.If the word is an english stop word found through <span className="font-bold font-mono text-taxfaxred-300">stopwords.words('english')</span>, it is removed from the words to be analyzed. Further cleaning removes other insignificant characters such as punctuations, special characters, and random apostrophes being left behind.</p>
            <img src={stopwordremoval} alt=""/>
          </div>
        </div>

        <div className="mt-8 border-[5px] border-taxfaxred-300 rounded-3xl px-8 py-3">
          <h3 className="text-xl font-semibold"> Step 6: Stemming and Lemmatization</h3>
          <div className="space-y-4">
            <ul className="list-inside list-disc"><li>Since not every word is in its base form, stemming and lemmatization is needed to avoid confusion between words that mean the same thing (e.g. running vs. run). Stemming will convert the word to what it thinks the base form is, and lemmatization would retain context of the word while reducing it.</li></ul>
            <p>It is also possible for words used in the tweet to not be in base form. An example would be the word "President" and "Presidential". Both imply the executive position, but are of different forms in grammar. It is required to transform these words to be at least in a form that is consistent. In order to use the Lemmatizer and Stemmer, its package must first be imported from NLTK.</p>
            <p>The lemmatizer used is <span className="font-bold font-mono text-taxfaxred-300">WordNetLemmatizer</span> and the stemmer used is <span className="font-bold font-mono text-taxfaxred-300">PorterStemmer</span>. For each word that was previously tokenized, the lemmatizer and stemmer would lemmatize and stem the word into what they think is the base form. These are stored as a separate column in the dataset. The new column <span className="font-bold font-mono text-taxfaxred-300">Stemmed Words</span> is for the results of the stemmer, and the new column <span className="font-bold font-mono text-taxfaxred-300">Lemmatized Words</span> is for the results of the lemmatizer. This is done to retain the original tweet's words.</p>
            <img src={lemmatization} alt=""/>
            <p>Due to the results of stemming reducing the words into weird base forms, it would be more appropritate to use the results from the lemmatization.</p>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mt-8">Data modelling</h1>
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold">Latent Dirichlet Allocation (LDA) Model</h2>
          <div className="flex max-w-min hover:scale-105 transition-all ease-in-out">
            <h2 className="font-semibold my-4 min-w-max">
              <a 
                className=" bg-taxfaxred-300 px-8 py-3 text-white rounded-full "
                href="https://colab.research.google.com/drive/1xNd9dG3DjmmWI1YlMMUSaa8PrI4OvB8m?usp=sharing#scrollTo=hjoWMOeOHvdk" 
                target="_blank" 
                rel="noreferrer">
                  Google Colab Modelling
              </a></h2>
          </div>
        </div>
        <p>
          <span className="font-bold text-taxfaxred-300">Recall the purpose of this project: </span>
          to determine what common premise was used by users
          who tweet disinformation about BBM's 203 billion peso estate tax. 
          In order to determine what the most common premise is, it is important to note 
          what the premises are of the tweets. This requires the use of topic clustering.
        </p>
        <br />
        <p>
          For this project, the topic clustering model used was Latent Dirichlet Allocation Model (LDA Model). 
          The LDA Model is a topic clustering model that attempts to cluster documents of words into topics. 
          The LDA Model, like most topic clustering models, is also unsupervised. This means that the model 
          will determine patterns/topics on its own based on the data provided. The data fed into the LDA Model 
          is the resulting Corpus Dictionary from preprocessing, which is a group of pairs where each pair 
          consists of the unique word found in the dataset and the frequency of the unique word. Furthermore, 
          the model requires that the number of topics be specified. For this project, we selected 10 topics 
          to choose from to represent the “top 10” premises of the tweets. The LDA Model returns the list of topics,
           with each topic containing the tokens found that make up the topic and the frequency of said token 
           for that topic. The results, visualized using pyLDAVis, can be found through <a 
                className="text-taxfaxred-300 underline hover:font-bold transition-all ease-in-out"
                href={process.env.PUBLIC_URL + "/topics.html"} 
                target="_blank" 
                rel="noreferrer">this link</a>. 
           For the codes used to perform the data modeling, please refer to the Google Colab linked on this page.
        </p>
        <div className="my-8 border-[5px] border-taxfaxred-300 rounded-3xl px-8 py-3">
          <img src={topics} alt=""/>
          <p>Based on the results of the model, the following topics were deduced:</p>
          <br />
          <p><span className="text-taxfaxred-300 font-bold">Topic 1</span>: 
          Estate tax as it is paid through the levying or sequestering of properties from the estate and not an heir.</p>
          <img className="ml-16 h-40" src={tweet1} alt="" />
          <br />
          <p><span className="text-taxfaxred-300 font-bold">Topic 2</span>: 
          BBM has already paid the estate tax, but was only unable to state it in his income tax return (ITR).</p>
          <img className="ml-16 h-40" src={tweet2} alt="" />
          <br />
          <p><span className="text-taxfaxred-300 font-bold">Topic 3</span>: 
          Presented various false articles as evidence or method of disinformation.</p>
          <img className="ml-16 h-100" src={tweet3} alt="" />
          <br />
          <p><span className="text-taxfaxred-300 font-bold">Topic 4</span>: 
          Carpio and BIR made up the 203 billion, the inherited estate has been sequestered and the heirs are not to pay.</p>
          <img className="ml-16 h-96" src={tweet4} alt="" />
          <br />
          <p><span className="text-taxfaxred-300 font-bold">Topic 5</span>: 
          BBM did not do tax evasion and DQ is impossible as there is no conviction of moral turpitude.</p>
          <img className="ml-16 h-56" src={tweet5} alt="" />
          <br />
          <p><span className="text-taxfaxred-300 font-bold">Topic 6</span>: 
          BBM is not liable as an heir because the administrator (implied as FEM Sr.)  is liable and is deceased.</p>
          <img className="ml-16 h-40" src={tweet6} alt="" />
          <br />
          <p><span className="text-taxfaxred-300 font-bold">Topic 7</span>: 
          Either the Marcos estate is legitimate because the government sequestered properties which cannot be done for ill-gotten wealth.</p>
          <img className="ml-16 h-40" src={tweet7} alt="" />
          <br />
          <p><span className="text-taxfaxred-300 font-bold">Topic 8</span>: 
          BBM was acquitted from tax evasion because it is only withholding of tax.</p>
          <img className="ml-16 h-40" src={tweet8} alt="" />
          <br />
          <p><span className="text-taxfaxred-300 font-bold">Topic 9</span>: 
          BBM’s non-filing of ITR is not tax evasion.</p>
          <img className="ml-16 h-40" src={tweet9} alt="" />
          <br />
          <p><span className="text-taxfaxred-300 font-bold">Topic 10</span>: 
          Ill-gotten wealth propaganda.</p>
          <img className="ml-16 h-40" src={tweet10} alt="" />
          <br />
        </div>
        <p>
          It is important to note that some of these topics do not talk about estate tax. 
          This is not the fault of the model, rather the dataset where some tweets would not 
          only talk about estate tax, but also other relevant issues such as BBM’s other 
          tax evasions in the same tweet. However, the grouped topics are based on actual premises 
          found in the dataset.

          <br /><br />

          With this in mind, the group believes that the modeling has successfully identified 
          relevant topics that may answer the question of the research.
        </p>

      </div>
    </div>
  )
}

export default Methods