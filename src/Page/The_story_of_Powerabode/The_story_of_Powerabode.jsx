import React, { useState } from "react";

import {
  Column,
  Heading,
  Row,
  Span,
  Wraper,
  Button,
} from "../../components/ComponentsIndex";

import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import CommanBanner from "../../components/Banners/CommanBanner";
import { Cost_and_Value_Philosophy, The_story_of_Powerabode_img,  our_sector1, our_sector2, our_sector3, our_sector4, our_sector5, our_sector6, our_sector7, our_sector8, our_sector9, Supply_Chain_Resilience, Cost_Efficiency, Codex, CM, Program_img, Energy_Transition,  Why_powerabode_1, Why_powerabode_2, Why_powerabode_3, Why_powerabode_4, Why_powerabode_5, Why_powerabode_6, Why_powerabode_7, Why_powerabode_8} from "../../components/Img/ImportedImage";


const The_story_of_Powerabode = () => {

    const [activeSlide, setActiveSlide] = useState(0);


  return (
    <>
      <CommanBanner children={The_story_of_Powerabode_img} />

        <div className="px-4 md:px-20">
            <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Who do we serve?</h2>
        </div>

        <div className="px-4 md:px-20 my-5 lg:flex">
            <div className="w-full">
                <p className="my-2">Powerabode is the platform for a large part of the energy industry to get to cost efficient delivery. The integrated supply chain sits at the core of this. For us, the development of the commercial ecosystem was a logical consequence of seeing how cost efficiency will play a critical role in the changing energy landscape.</p>
                <p className="my-2">National Oil Companies (NOC's) will become operators due to the energy transition. They are part of our main clientele. But also start ups in Hydrogen require robust sytems 'overnight'. Our Codex delivers that.</p>
            </div>
        </div>

        <Row>
            <div className="px-4 md:px-20 my-10 block lg:flex justify-center gap-5">
                <div className="w-full lg:2/6 border-2 bg-[#51A9B433] rounded-lg shadow-lg px-4 py-8 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-[#59ADB7] mb-8">Projects, Operations and Maintenance are all part of our scope.</h3>
                    </div>
                    <div>
                        <p className="text-medium font-medium">We bring them to asset owners through Supply Chain by SLA Services, our Cost Program 'The Road to Cost Leadership' and off the shelf products like our Codex Management System for Supply Chain and Procurement. Everything is supported by front line experts.</p>
                        <p className="text-medium font-medium mt-3">Powerabode Academy is there to implement our products and programs, and develop local content.</p>
                    </div>
                </div>

                <div className="w-full lg:2/6 border-2 bg-[#51A9B433] rounded-lg shadow-lg px-4 py-8 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-[#59ADB7] mb-8">Every Supply Chain has Waste. We Fix It.</h3>
                    </div>
                    <div>
                        <p className="text-medium font-medium">All our experts are experienced in front line delivery. They complement our systems and methods with hands-on experience. Driven by Energy We Deliver.</p>
                    </div>
                </div>
            </div>
        </Row>

        <div className="px-4 md:px-20">
            <p className='text-2xl text-[#29385E]'>We understand the commercials of these supply chains better then anyone. Our philosophy of Cost and Value intelligence delivers cost efficiency and specification will bring long-term value improvement.</p>
        </div>

        <Row>
            <div className="px-4 md:px-20 my-10 lg:flex justify-center items-center">
                <div className="w-full lg:w-2/5 flex justify-center">
                <img src={Cost_and_Value_Philosophy} alt="" />
                </div>
                <div className="w-full lg:w-3/5">
                <div className='bg-white py-5'>
                    <h2 className='text-center text-3xl font-bold text-[#29385E]'>Cost and Value Intelligence Philosophy</h2>
                    <p className='text-center text-2xl font-medium mt-3'>How to deliver cost efficiency and value improvement?</p>
                    <p className='text-2xl text-[#4AC4D9] font-medium text-center'>We help you do it.</p>
                </div>
                <div className='flex justify-center'> 
                    <div className='w-full px-4'>
                    <ul className='list-disc pl-8'>
                        <li className='mt-2 font-medium text-md'>All our products and services are built around our cost and value philosophy. It will bring overall improvement (OPEX/CAPEX) by double digit percentage.</li>
                        <li className='mt-2 font-medium text-md'>Rates are only 20% of any potential saving! Specification focus can deliver 30% of the Savings Potential. Efficiency focus can bring 40% of the Savings Potential.</li>
                        <li className='mt-2 font-medium text-md'>We take your organization on the road to cost leadership.</li>
                        <li className='mt-2 font-medium text-md'>Our analyses of Rates, Specification and Efficiency will bring out the maximum Savings Potential.</li>
                        <li className='mt-2 font-medium text-md'>The Opex/Capex Program, our Supply Chain Services by SLA, but also our Codex Management System and CM+ empower your organisation utilising methods based on the Cost and value Philosophy. Consistently and sustainably optimising cost and value!</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </Row>

        <div className="px-4 md:px-20">
            <div>
                <h2 className='text-center text-3xl font-bold text-[#29385E] my-10'>Our Sector</h2>
            </div>   
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <img className="w-full object-fill rounded-2xl" src={our_sector1} alt="" />
                </div>
                <div>
                    <img className="w-full object-fill rounded-2xl" src={our_sector2} alt="" />
                </div>
                <div>
                    <img className="w-full object-fill rounded-2xl" src={our_sector3} alt="" />
                </div>
                <div>
                    <img className="w-full object-fill rounded-2xl" src={our_sector4} alt="" />
                </div>
                <div>
                    <img className="w-full object-fill rounded-2xl" src={our_sector5} alt="" />
                </div>
                <div>
                    <img className="w-full object-fill rounded-2xl" src={our_sector6} alt="" />
                </div>
                <div>
                    <img className="w-full object-fill rounded-2xl" src={our_sector7} alt="" />
                </div>
                <div>
                    <img className="w-full object-fill rounded-2xl" src={our_sector8} alt="" />
                </div>
                <div>
                    <img className="w-full object-fill rounded-2xl" src={our_sector9} alt="" />
                </div>
            </div>
        </div>

        <Row>
            <div className="px-4 md:px-20 my-10 lg:flex justify-center items-center">
                <div className="w-full lg:w-3/5">
                    <div className='bg-white py-5'>
                        <h2 className='text-3xl font-bold text-[#29385E] pl-8'>Supply Chain Resilience</h2>
                    </div>
                    <div className='flex justify-center'> 
                        <div className='w-full px-4'>
                            <ul>
                                <li className='mt-2 font-medium text-md'>The black swan events triggered by COVID have put our awareness of the importance of understanding our supply chain & procurement processes under our full attention.</li>
                                <li className='mt-2 font-medium text-md'>Companies have always been aware, however, this time ‘small risks’ turned into high impact events. Cost price impact, but also availability of materials.</li>
                                <li className='mt-2 font-medium text-md'>For the coming years challenges will remain with us, as the transition process, and the industrial dynamics triggered by energy transition will prove to be game changers.</li>
                                <li className='mt-2 font-medium text-md'>What are the actual risks in your supply chain? We can map them for you, and present mitigations.</li>
                                <li className='mt-2 font-medium text-md'>More importantly, to have our experts involved making your Supply Chain and Procurement more robust or cost effective; it is something to consider. Not the blue suits that advice, but the agile team that takes work packages and delivers them for you.</li>
                                <li className='mt-2 font-medium text-md'>Supply Chain disruption and subsequent challenges can have deep implications on your operations.</li>
                                <li className='mt-2 font-medium text-md'>Our product CM+ can help you manage your contracts and supply chain better then ever before. As we focus on the contract users & reach out to each individual stakeholder we deliver cost efficiency.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 flex justify-center">
                    <img src={Supply_Chain_Resilience} alt="" />
                </div>
            </div>
        </Row>

        <div className="px-4 md:px-20">
            <div>
                <h2 className='text-center text-3xl font-bold text-[#29385E] my-10'>Products & Services for Supply Chain Resilience</h2>
            </div>   
        </div>

        <div className="px-4 md:px-20 my-20">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <div>
                        <img className="h-48 w-48 mx-auto border-[#4C78B5] border-[12px] rounded-full" src={Codex} alt="" />
                        </div>
                        <div>
                        <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">Codex</p>
                        <p className="text-xl mt-2 px-2 md:px-5 text-center">The unique system for energy transition</p>
                        </div>
                    </div>

                    <div>
                        <div>
                        <img className="h-48 w-48 mx-auto border-[#8F4A81] border-[12px] rounded-full" src={CM} alt="" />
                        </div>
                        <div>
                        <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">CM+</p>
                        <p className="text-xl mt-2 px-2 md:px-5 text-center">
                            Hands on Tool <br />
                            - Supported by cost experts <br />
                            - For Cost efficiency in transition
                        </p>
                        </div>
                    </div>

                    <div>
                        <div>
                        <img className="h-48 w-48 mx-auto border-[#9ED033] border-[12px] rounded-full" src={Codex} alt="" />
                        </div>
                        <div>
                        <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">Supply Chain by SLA</p>
                        <p className="text-xl mt-2 px-2 md:px-5 text-center">Mature organization to run your SC & <br /> cost efficiency</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>

        <Row>
            <div className="px-4 md:px-20 my-10 lg:flex justify-center items-center">
                <div className="w-full lg:w-3/5">
                    <div className='bg-white py-5'>
                        <h2 className='text-3xl font-bold text-[#29385E] pl-8'>Cost Efficiency</h2>
                    </div>
                    <div className='flex justify-center'> 
                        <div className='w-full px-4'>
                            <ul>
                                <li className='mt-2 font-medium text-md'>Any energy producer has to compete on electricity pricing. This is what it all comes to with the electrification of our world. Transport will move to EV's, and virtually all appliances are electric, communication digital - all battery powered.</li>
                                <li className='mt-2 font-medium text-md'>Clearly cost is one of the key drivers.</li>
                                <li className='mt-2 font-medium text-md'>Our Cost Intelligence Philosophy sets the basis for assessing your operations. In general the focus is on rates; but our approach is based on the premise that only 20% of a saving comes from sharper rates. The majority of savings comes from efficiency and specification. Check our Cost Intelligence Philosophy for better understanding. The site also holds articles and case studies in the 'thinking cost intelligence' section.</li>
                                <li className='mt-2 font-medium text-md'>All our services will contribute to Cost Efficiency. Foremost because they are all based on the Cost Intelligence Philosophy.</li>
                                <li className='mt-2 font-medium text-md'>Our flagship product is the Third Party Cost Program: The Road to Cost Leadership. This delivers savings, but also sets the right culture in terms of awareness of Cost Efficiency. The program is supported by a culture module and training, so it leaves a Commercial DNA within the client organisation.</li>
                                <li className='mt-2 font-medium text-md'>CM+ is our product that provides users of a contract with context. In the real world hardly any contract users reads the contract (for various reasons, for example commercial confidentiality). CM+ gives each stakeholder the necessary information to handle their part of the process in optimised fashion. Visit our CM+ section on the site for detailed explanation.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 flex justify-center">
                    <img src={Cost_Efficiency} alt="" />
                </div>
            </div>
        </Row>

        <div className="px-4 md:px-20">
            <div>
                <h2 className='text-center text-3xl font-bold text-[#29385E] my-10'>Products & Services for Supply Chain Resilience</h2>
            </div>   
        </div>

        <div className="px-4 md:px-20 my-20">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <div>
                        <img className="h-48 w-48 mx-auto border-[#4C78B5] border-[12px] rounded-full" src={Codex} alt="" />
                        </div>
                        <div>
                        <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">Codex</p>
                        <p className="text-xl mt-2 px-2 md:px-5 text-center">The unique system for energy transition</p>
                        </div>
                    </div>

                    <div>
                        <div>
                        <img className="h-48 w-48 mx-auto border-[#8F4A81] border-[12px] rounded-full" src={CM} alt="" />
                        </div>
                        <div>
                        <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">CM+</p>
                        <p className="text-xl mt-2 px-2 md:px-5 text-center">
                            Hands on Tool <br />
                            - Supported by cost experts <br />
                            - For Cost efficiency in transition
                        </p>
                        </div>
                    </div>

                    <div>
                        <div>
                        <img className="h-48 w-48 mx-auto border-[#9ED033] border-[12px] rounded-full" src={Codex} alt="" />
                        </div>
                        <div>
                        <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">Supply Chain by SLA</p>
                        <p className="text-xl mt-2 px-2 md:px-5 text-center">Mature organization to run your SC & <br /> cost efficiency</p>
                        </div>
                    </div>

                    <div>
                        <div>
                        <img className="h-48 w-48 mx-auto border-[#01BCB1] border-[12px] rounded-full" src={Program_img} alt="" />
                        </div>
                        <div>
                        <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">Program</p>
                        <p className="text-xl mt-2 px-2 md:px-5 text-center">20%+ Commercial improvement. <br />A disruptive & controlled process <br />focused on delivery</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>

        <Row>
            <div className="px-4 md:px-20 my-10 lg:flex justify-center items-center">
                <div className="w-full lg:w-3/5">
                    <div className='bg-white py-5'>
                        <h2 className='text-3xl font-bold text-[#29385E] pl-8'>Energy Transition</h2>
                    </div>
                    <div className='flex justify-center'> 
                        <div className='w-full px-4'>
                            <ul>
                                <li className='mt-2 font-medium text-md'>Across the globe we are moving towards an energy transition. Where energy demand will grow over 25% over the next 20 years, an enormous task lies ahead of us. Firstly, to transit to a more sustainable energy mix, but secondly to keep up with future demand.</li>
                                <li className='mt-2 font-medium text-md'>During this transition systems will co-exist in parallel. Old and New. To an extend they will also compete, on cost level. Therefore, cost efficiency is critical.</li>
                                <li className='mt-2 font-medium text-md'>New energies will be produced by new industries. Fragmented, local and often on a relatively ‘small’ scale.</li>
                                <li className='mt-2 font-medium text-md'>Gas is a key source of the current mix, but also for decades to come. Hydrogen (grey, blue and green) is likely to take a large percentage as proxy for storage. Its true source will often be renewable energy. This transition will put massive pressure on industry. Resources will be scarce, specialist expertise in high demand, contractors and production capacity; it is all part of what will drive the transition.</li>
                                <li className='mt-2 font-medium text-md'>powerabode has defined a set of services that support this process and the activities. We offer Supply Chain by SLA, as a common denominator for the transition is a high level of Supply Chain and procurement activities. The perfect set of delivery services is available, and delivered by front line experts.</li>
                                <li className='mt-2 font-medium text-md'>Our Codex Management system is a platform to managing and controlling everything around the Supply Chain. Not just pre- and post-award; also materials management or commercial assurance. In its standard format is ‘off the shelf’, but will be adapted to your organisation. After this we supply a range of services to guarantee compliance and governance standards. The transition will see many new start up energy assets and suppliers. We create their mature supply chain ‘overnight’. What took us years is available.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 flex justify-center">
                    <img src={Energy_Transition} alt="" />
                </div>
            </div>
        </Row>

        <div className="px-4 md:px-20">
            <div>
                <h2 className='text-center text-3xl font-bold text-[#29385E] my-10'>Products & Services for Supply Chain Resilience</h2>
            </div>   
        </div>

        <div className="px-4 md:px-20 my-20">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <div>
                        <img className="h-48 w-48 mx-auto border-[#4C78B5] border-[12px] rounded-full" src={Codex} alt="" />
                        </div>
                        <div>
                        <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">Codex</p>
                        <p className="text-xl mt-2 px-2 md:px-5 text-center">The unique system for energy transition</p>
                        </div>
                    </div>

                    <div>
                        <div>
                        <img className="h-48 w-48 mx-auto border-[#8F4A81] border-[12px] rounded-full" src={CM} alt="" />
                        </div>
                        <div>
                        <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">CM+</p>
                        <p className="text-xl mt-2 px-2 md:px-5 text-center">
                            Hands on Tool <br />
                            - Supported by cost experts <br />
                            - For Cost efficiency in transition
                        </p>
                        </div>
                    </div>

                    <div>
                        <div>
                        <img className="h-48 w-48 mx-auto border-[#9ED033] border-[12px] rounded-full" src={Codex} alt="" />
                        </div>
                        <div>
                        <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">Supply Chain by SLA</p>
                        <p className="text-xl mt-2 px-2 md:px-5 text-center">Mature organization to run your SC & <br /> cost efficiency</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>

        <div className="px-4 md:px-20">

            <div>
                <h2 className='text-center text-3xl font-bold text-[#29385E] my-10'>Why powerabode?</h2>
            </div>   

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-20">
                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img src={Why_powerabode_1} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img src={Why_powerabode_2} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img src={Why_powerabode_3} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img src={Why_powerabode_4} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img src={Why_powerabode_5} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img src={Why_powerabode_6} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img src={Why_powerabode_7} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img src={Why_powerabode_8} alt="" />
                </div>
          </div>

        </div>

      <Footer />
    </>
  );
};

export default The_story_of_Powerabode;
