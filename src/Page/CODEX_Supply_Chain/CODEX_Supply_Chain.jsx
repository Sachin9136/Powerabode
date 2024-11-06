import React from "react";

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
import { CODEX_Supply_Chain_banner, Check, CODEX_1, CODEX_2, CODEX_3, Tick, Dash} from "../../components/Img/ImportedImage";

const About_us = () => {

  return (
    <>
      <CommanBanner children={CODEX_Supply_Chain_banner} />

        <div className="px-4 md:px-20 my-10">
            <div className="lg:flex my-10">
                <div className="w-full lg:w-1/2 px-3">
                    <div className="mt-14">
                        <h2 className='text-3xl font-bold text-[#29385E] mt-6 mb-3'>Complete system from day one</h2>
                        <ul>
                            <li className="text-xl font-medium my-2 flex gap-3"><img src={Check} alt="" /> Zero development risk</li>
                            <li className="text-xl font-medium my-2 flex gap-3"><img src={Check} alt="" /> Made for energy assets</li>
                            <li className="text-xl font-medium my-2 flex gap-3"><img src={Check} alt="" /> Supported by services & frontline Experts</li>
                            <li className="text-xl font-medium my-2 flex gap-3"><img src={Check} alt="" /> With tools & strategies for Cost Efficiency</li>
                            <li className="text-xl font-medium my-2 flex gap-3"><img src={Check} alt="" /> Delivered through My Abode platform</li>
                            <li className="text-xl font-medium my-2 flex gap-3"><img src={Check} alt="" /> Per client: adaptation and implementation program</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 ">
                    <div className="lg:flex justify-center mb-10 mt-20">
                        <img  src={CODEX_1} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="px-4 md:px-20 my-10">
            <h2 className='text-3xl font-bold text-[#29385E] mt-6 mb-3 text-center'>Codex Management System</h2>
            <div className="flex justify-center items-center">
                <span>System</span> <span className="text-2xl text-[#29385E] font-bold mx-2">|</span> <span>Processes </span> <span className="text-2xl text-[#29385E] font-bold mx-2">|</span> <span>Controls</span> <span className="text-2xl text-[#29385E] font-bold mx-2">|</span> <span>Forms</span> <span className="text-2xl text-[#29385E] font-bold mx-2">|</span> <span>Work Instructions</span>
            </div>
        </div>

        <div className="px-4 md:px-20 my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1 */}
                <div className="bg-[#51A9B433] w-full h-96 rounded-xl relative">
                <div className="flex justify-center py-4">
                    <img className="px-3 w-full" src={CODEX_3} alt="" />
                </div>
                <div>
                    <p className="font-semibold text-xl px-3 text-[#29385E]">CODEX</p>
                    <p className="text-[#504F4F] font-medium px-3 mt-2">
                    Procurement & Supply Chain Management System.
                    </p>
                </div>
                <div className="px-3 absolute bottom-3 left-0 right-0 flex">
                    <button className="text-sm bg-[#29385E] rounded-full px-4 py-1 text-white">Volume 1</button>
                </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#51A9B433] w-full h-96 rounded-xl relative">
                <div className="flex justify-center py-4">
                    <img className="px-3 w-full" src={CODEX_3} alt="" />
                </div>
                <div>
                    <p className="font-semibold text-xl px-3 text-[#29385E]">PRE-AWARD CONTROL PROCEDURES</p>
                    <p className="text-[#504F4F] font-medium px-3 mt-2">
                    Process, Procedures, Controls and templates from demand identification until approval of award
                    </p>
                </div>
                <div className="px-3 absolute bottom-3 left-0 right-0 flex">
                    <button className="text-sm bg-[#29385E] rounded-full px-4 py-1 text-white">Volume 2</button>
                </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#51A9B433] w-full h-96 rounded-xl relative">
                <div className="flex justify-center py-4">
                    <img className="px-3 w-full" src={CODEX_3} alt="" />
                </div>
                <div>
                    <p className="font-semibold text-xl px-3 text-[#29385E]">POST-AWARD CONTROL PROCEDURES</p>
                    <p className="text-[#504F4F] font-medium px-3 mt-2">
                    Always underestimated. Structures proper implementation, Avoids loss of intent..
                    </p>
                </div>
                <div className="px-3 absolute bottom-3 left-0 right-0 flex">
                    <button className="text-sm bg-[#29385E] rounded-full px-4 py-1 text-white">Volume 3</button>
                </div>
                </div>

                {/* Card 4 */}
                <div className="bg-[#51A9B433] w-full h-96 rounded-xl relative">
                <div className="flex justify-center py-4">
                    <img className="px-3 w-full" src={CODEX_3} alt="" />
                </div>
                <div>
                    <p className="font-semibold text-xl px-3 text-[#29385E]">MATERIALS MANAGEMENT</p>
                    <p className="text-[#504F4F] font-medium px-3 mt-2">
                    Part 1, 2 and 3. It will help you get the right materials at the right place. Now and in 5 years.
                    </p>
                </div>
                <div className="px-3 absolute bottom-3 left-0 right-0 flex">
                    <button className="text-sm bg-[#29385E] rounded-full px-4 py-1 text-white">Volume 4</button>
                </div>
                </div>

                <div className="bg-[#51A9B433] w-full h-96 rounded-xl relative">
                <div className="flex justify-center py-4">
                    <img className="px-3 w-full" src={CODEX_3} alt="" />
                </div>
                <div>
                    <p className="font-semibold text-xl px-3 text-[#29385E]">MATERIALS MANAGEMENT</p>
                    <p className="text-[#504F4F] font-medium px-3 mt-2">
                    Part 1, 2 and 3. It will help you get the right materials at the right place. Now and in 5 years.
                    </p>
                </div>
                <div className="px-3 absolute bottom-3 left-0 right-0 flex">
                    <button className="text-sm bg-[#29385E] rounded-full px-4 py-1 text-white">Volume 5</button>
                </div>
                </div>

                <div className="bg-[#51A9B433] w-full h-96 rounded-xl relative">
                <div className="flex justify-center py-4">
                    <img className="px-3 w-full" src={CODEX_3} alt="" />
                </div>
                <div>
                    <p className="font-semibold text-xl px-3 text-[#29385E]">MATERIALS MANAGEMENT</p>
                    <p className="text-[#504F4F] font-medium px-3 mt-2">
                    Part 1, 2 and 3. It will help you get the right materials at the right place. Now and in 5 years.
                    </p>
                </div>
                <div className="px-3 absolute bottom-3 left-0 right-0 flex">
                    <button className="text-sm bg-[#29385E] rounded-full px-4 py-1 text-white">Volume 6</button>
                </div>
                </div>

                <div className="bg-[#51A9B433] w-full h-96 rounded-xl relative">
                <div className="flex justify-center py-4">
                    <img className="px-3 w-full" src={CODEX_3} alt="" />
                </div>
                <div>
                    <p className="font-semibold text-xl px-3 text-[#29385E]">MATERIALS MANAGEMENT</p>
                    <p className="text-[#504F4F] font-medium px-3 mt-2">
                    Part 1, 2 and 3. It will help you get the right materials at the right place. Now and in 5 years.
                    </p>
                </div>
                <div className="px-3 absolute bottom-3 left-0 right-0 flex">
                    <button className="text-sm bg-[#29385E] rounded-full px-4 py-1 text-white">Volume 7</button>
                </div>
                </div>
            </div>
        </div>

        <div className="px-4 md:px-20 my-10">
            <h2 className='text-3xl font-bold text-[#29385E] mt-6 mb-3 text-center'>Table of Content Codex System</h2>
        </div>

        <div className="px-4 md:px-20 my-10">
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border-2 border-white">
                    <thead>
                        <tr>
                        <th className="px-4 py-2 border-8 border-white bg-[#29385E] text-center text-white text-2xl rounded-2xl">Volume</th>
                        <th className="px-4 py-2 border-8 border-white bg-[#29385E] text-center text-white text-2xl  rounded-2xl ">Volume</th>
                        <th colSpan="3" className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-2xl  rounded-2xl text-center">Delivery Method</th>
                        </tr>
                        <tr>
                        <th colSpan="2"></th>
                        <th className="px-4 py-2 border-8 border-white bg-[#BDF8FF] text-left text-[#29385E] text-xl  rounded-2xl">Books</th>
                        <th className="px-4 py-2 border-8 border-white bg-[#BDF8FF] text-left text-[#29385E] text-xl  rounded-2xl">Portal</th>
                        <th className="px-4 py-2 border-8 border-white bg-[#BDF8FF] text-left text-[#29385E] text-xl  rounded-2xl">Expert Services</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center  rounded-2xl">Volume 1</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center  rounded-2xl">The Contracting, Procurement and Supply Chain Management System</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF]  rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF]  rounded-2xl">
                        <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF]  rounded-2xl">
                        <div className="flex justify-center">
                            <img src={Dash} alt="" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Volume 2</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Pre-Award Control Procedure</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                        <div className="flex justify-center">
                            <img src={Dash} alt="" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Volume 3</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Post-Award Control Procedure</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                        <div className="flex justify-center">
                            <img src={Dash} alt="" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Volume 4</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Materials Management: MM Guideline</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                            <img src={Tick} alt="" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Volume 4.1</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">MM Control Procedures</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                        <div className="flex justify-center">
                            <img src={Tick} alt="" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Volume 4.2</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">MM Templates</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                        <div className="flex justify-center">
                            <img src={Tick} alt="" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Volume 5</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Commercial Assurance</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Tick} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                        <div className="flex justify-center">
                            <img src={Tick} alt="" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Volume 5.1</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Assurance Questionnaires</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                        <div className="flex justify-center">
                                <img src={Dash} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                        <div className="flex justify-center">
                                <img src={Dash} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                        <div className="flex justify-center">
                            <img src={Tick} alt="" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Volume 5.2</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Assurance: Diagnostics</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Dash} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Dash} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                        <div className="flex justify-center">
                            <img src={Tick} alt="" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Volume 6</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Cost Recovery</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Dash} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Dash} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                            <img src={Tick} alt="" />
                            </div></td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Volume 7</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#29385E] text-white text-md font-bold text-center rounded-2xl">Coaching by powerabode Academy</td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Dash} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Dash} alt="" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border-8 border-white bg-[#BDF8FF] rounded-2xl">
                            <div className="flex justify-center">
                            <img src={Tick} alt="" />
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <div>
            <img className="w-full" src={CODEX_2} alt="" />
        </div>

      <Footer />
    </>
  );
};

export default About_us;
