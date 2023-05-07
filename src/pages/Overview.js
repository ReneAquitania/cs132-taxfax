import React from 'react';
import lightbulb from '../images/lightbulb-icon.png';
import question from '../images/res-q-icon.png';
import hypo from '../images/hypo.png';
import nullhypo from '../images/nullhypo.png';
import todo from '../images/todo-icon.png';

const Overview = () => {
  return (
    <div className="flex min-w-full justify-center">
        <div className="px-8 py-6 md:w-3/5">
            <div className="md:grid md:grid-cols-3 md:gap-6 max-h-min">
                <div className="md:col-span-2 bg-taxfaxblue-300 px-8 py-3 overflow-auto rounded-3xl hover:scale-105 transition-all ease-in-out">
                    <div className="flex gap-4 max-md:justify-center">
                        <p className="text-2xl md:text-4xl font-extrabold text-white">Project Motivation</p>
                        <img src={lightbulb} alt="lightbulb" className="h-12"/>
                    </div>
                    <p className="pt-2 text-white text-sm">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                    </p>
                </div>
                <div className="rounded-3xl py-3 px-8 border-[5px] border-taxfaxblue-300 max-md:mt-6 overflow-x-auto hover:scale-105 transition-all ease-in-out">
                    <div className="flex justify-center place-items-center">
                        <p className="text-2xl text-taxfaxblue-300 font-extrabold">Research <br className="max-md:hidden"/>Question</p>
                        <img src={question} alt="research question bubble" className="h-12 pl-4"/>
                    </div>
                    <p className="text-xs">
                        Do BBM Supporters that spread disinformation on Twitter about 
                        BBM's estate tax case use a common premise to defend him?
                    </p>
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="p-4 mt-6 md:flex border-[5px] border-taxfaxred-300 overflow-x-auto rounded-3xl hover:scale-105 transition-all ease-in-out">
                    <div className="flex min-w-max justify-center items-center">
                        <img src={hypo} alt="Null hypothesis icon" className="h-20 mr-4" />
                    </div>
                    <div>
                        <p className="text-taxfaxred-300 text-xl md:text-3xl font-extrabold max-md:text-center">Hypothesis</p>
                        <p>There is a single premise that is used among the majority of BBM supporters 
                            that spread misinformation about BBM's estate tax case in Twitter</p>
                    </div>
                </div>
                <div className="p-4 mt-6 md:flex bg-taxfaxred-300 overflow-x-auto rounded-3xl hover:scale-105 transition-all ease-in-out">
                    <div className="flex min-w-max justify-center items-center">
                        <img src={nullhypo} alt="Null hypothesis icon" className="h-20 mr-4" />
                    </div>
                    <div>
                        <p className="text-white text-xl md:text-3xl font-extrabold max-md:text-center">Null Hypothesis</p>
                        <p className="text-white">There is <span className="font-extrabold underline">no</span> single premise that is used among the majority of BBM supporters 
                            that spread misinformation about BBM's estate tax case in Twitter</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 px-8 py-3 md:flex border-[5px] gap-4 border-taxfaxblue-300 md:gap-x-10 rounded-3xl max-h-min hover:scale-105 transition-all ease-in-out">
                <div className="flex gap-4 items-center max-md:justify-center">
                    <img src={todo} alt="action plan icon" className="h-12 border-2 border-red-900"/>
                    <div>
                        <p className="text-3xl text-taxfaxred-300 align-middle font-extrabold border-2 border-red-900">Action Plan</p>  
                    </div>
                </div>
                <div>
                    <p>1) something Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam,</p>
                    <p>2) we'll</p>
                    <p>3) do fr</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Overview;
