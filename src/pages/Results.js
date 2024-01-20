import React from 'react';
import topic1 from '../images/modelling/topic1.png';
import tweet1 from '../images/tweets/in1987.png';
import tweet2 from '../images/tweets/marcossr.png';

const Results = () => {
  return (
    <div className="mt-10 flex min-w-full justify-center">
      <div className="md:w-3/5">
        <h1 className="text-5xl font-bold mb-6">Results</h1>
        <div className="border-[5px] border-taxfaxblue-300 rounded-3xl px-8 py-10">
          <h1 className="text-3xl font-bold">Topic 1: </h1>
          <h1 className="text-2xl font-semibold mt-2 mb-4"> Estate tax was paid through levying or sequestering of properties from the estate and not an heir</h1>
          <p className="pb-4">
            Among the 15 topics, we determined that topic 1 had the most relevance to our study. 
            It had 15.8% of tokens contained in our Corpus dictionary. The 15 most relevant tokens in topic 1
            include the words property, pay, government, bir, cory, sequestered, heir, already, itr, time, levied,
            stupid, asset, file, and official. </p>
          <img src={topic1} alt="" />
          <p>

            <span className="text-4xl text-taxfaxred-300 font-bold">Discussion/Implications:</span><br />
            Based on the top 15 words for the first topic cluster, very important keywords to note are: 
            <span className="font-bold"> levied, heir, property, bir and sequestered</span>. The BIR first sent 
            the demand for the 203 billion peso estate tax. However, some tweets attempt to rebut this estate tax 
            with the premise that the Marcos estate has already been sequestered or levied from a previous 
            court ruling during Cory's tenure. Others claim that the heir is not liable for the estate tax as 
            the payment is done through the estate. <br /><br />

            The public is not knowledgeable about estate tax, as not everyone is a lawyer. The results imply 
            that this is true as the common premise used is about the liability and remedies of the estate tax.
            However, while it is true that not everyone is a lawyer, the spread of this kind of disinformation 
            may twist their understanding of the law. This is of importance as the Tax Code is the basis of 
            the nuances of taxes in the country. Misunderstandings such as this may result in problems even 
            outside the Marcos estate tax case. They may accidentally use this disinformation for their own 
            estate tax cases. 
            <div className="mt-5 flex gap-2">
              <img className="h-48" src={tweet1} alt="" />
              <img className="h-48" src={tweet2} alt="" />
            </div><br />

            <span className="text-4xl text-taxfaxred-300 font-bold">Conclusion:</span><br />
            With that in mind, the results of the LDA Model, specifically Topic 1 which contains most tokens 
            from the dataset, show that majority of the tweets follow the premise of the <span className="font-bold">
            Marcoses are not liable for estate tax, despite being heirs, as it is paid through levy and sequestering 
            of properties from the estate</span><br /><br />
            Given the main premise found from this research, it may be wise to clarify with the public about 
            the nuances of the Tax Code of the Philippines to fight disinformation. This may be done through seminars, 
            talks with trustworthy lawyers, or simply urging the public to read up on at least the estate tax section 
            of the Tax Code.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Results;
