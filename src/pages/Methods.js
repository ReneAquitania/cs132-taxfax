import React from 'react';
import lowercasing from '../images/preprocessing/lowercasing.png';
import stopwordremoval from '../images/preprocessing/stop_word_removal.png';
import lemmatization from '../images/preprocessing/lemmatization.png';

const Methods = () => {
  return (
    <div className="mt-10 flex min-w-full justify-center">
      <div className="md:w-3/5">
        <h1 className="text-5xl font-bold">Data exploration</h1>
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-semibold">Preprocessing</h2>
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
      </div>
    </div>
  )
}

export default Methods